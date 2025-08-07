import type { CVData } from '../CVBuilder';

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

const SECTIONS = ['personal', 'experience', 'education', 'skills', 'complete'] as const;
type Section = typeof SECTIONS[number];

class CVChatServiceImpl {
  private currentSection: Section = 'personal';
  private data: Partial<CVData> = {};
  private personalInfoStep = 0;
  private experienceStep = 0;
  private educationStep = 0;
  private currentExperience: any = {};
  private currentEducation: any = {};

  private readonly PROMPTS = {
    personal: "Hi! I'm here to help you create an outstanding CV. Let's start with your basic information. What's your full name?",
    experience: "Great! Now let's talk about your work experience. What's your most recent job title?",
    education: "Perfect! Now let's cover your educational background. What's your highest degree or qualification?",
    skills: "Excellent! Finally, let's highlight your skills. What are your key professional skills? (You can list them separated by commas)"
  };

  private readonly FOLLOW_UPS = {
    personal: [
      "What's your email address?",
      "What's your phone number?",
      "Where are you located? (City, Country)",
    ],
    experience: [
      "Which company did you work for?",
      "When did you work there? (e.g., 'Jan 2022 - Present' or 'Jan 2020 - Dec 2021')",
      "What were your main responsibilities and achievements in this role?",
      "Do you have any other work experience you'd like to add? (Type 'yes' to add more or 'no' to continue)",
    ],
    education: [
      "Which institution did you attend?",
      "When did you graduate or complete this program? (e.g., '2019 - 2023' or 'Graduated 2023')",
      "Do you have any other educational qualifications? (Type 'yes' to add more or 'no' to continue)",
    ],
    skills: [
      "Any specific tools or technologies you're proficient in?",
      "What soft skills would you like to highlight?",
    ],
  };

  async processMessage(message: string): Promise<ChatMessage> {
    let response = '';

    switch (this.currentSection) {
      case 'personal':
        if (!this.data.personalInfo) {
          this.data.personalInfo = {
            name: '',
            email: '',
            phone: '',
            location: '',
          };
        }

        // Handle personal info collection in sequence
        if (this.personalInfoStep === 0) {
          this.data.personalInfo.name = message;
          response = this.FOLLOW_UPS.personal[0]; // Ask for email
          this.personalInfoStep++;
        } else if (this.personalInfoStep === 1) {
          if (message.includes('@')) {
            this.data.personalInfo.email = message;
            response = this.FOLLOW_UPS.personal[1]; // Ask for phone
            this.personalInfoStep++;
          } else {
            response = "Please provide a valid email address.";
          }
        } else if (this.personalInfoStep === 2) {
          this.data.personalInfo.phone = message;
          response = this.FOLLOW_UPS.personal[2]; // Ask for location
          this.personalInfoStep++;
        } else {
          this.data.personalInfo.location = message;
          this.currentSection = 'experience';
          response = this.PROMPTS.experience;
        }
        break;

      case 'experience':
        if (!this.data.experience) {
          this.data.experience = [];
        }

        if (this.experienceStep === 0) {
          this.currentExperience = { title: message };
          response = this.FOLLOW_UPS.experience[0]; // Ask for company
          this.experienceStep++;
        } else if (this.experienceStep === 1) {
          this.currentExperience.company = message;
          response = this.FOLLOW_UPS.experience[1]; // Ask for duration
          this.experienceStep++;
        } else if (this.experienceStep === 2) {
          this.currentExperience.duration = message;
          response = this.FOLLOW_UPS.experience[2]; // Ask for description
          this.experienceStep++;
        } else if (this.experienceStep === 3) {
          this.currentExperience.description = message;
          this.data.experience.push(this.currentExperience);
          response = this.FOLLOW_UPS.experience[3]; // Ask if more experience
          this.experienceStep++;
        } else {
          if (message.toLowerCase().includes('yes')) {
            this.currentExperience = {};
            this.experienceStep = 0;
            response = "Great! What's your next job title?";
          } else {
            this.currentSection = 'education';
            response = this.PROMPTS.education;
          }
        }
        break;

      case 'education':
        if (!this.data.education) {
          this.data.education = [];
        }

        if (this.educationStep === 0) {
          this.currentEducation = { degree: message };
          response = this.FOLLOW_UPS.education[0]; // Ask for institution
          this.educationStep++;
        } else if (this.educationStep === 1) {
          this.currentEducation.institution = message;
          response = this.FOLLOW_UPS.education[1]; // Ask for duration
          this.educationStep++;
        } else if (this.educationStep === 2) {
          this.currentEducation.duration = message;
          this.data.education.push(this.currentEducation);
          response = this.FOLLOW_UPS.education[2]; // Ask if more education
          this.educationStep++;
        } else {
          if (message.toLowerCase().includes('yes')) {
            this.currentEducation = {};
            this.educationStep = 0;
            response = "What's your next qualification or degree?";
          } else {
            this.currentSection = 'skills';
            response = this.PROMPTS.skills;
          }
        }
        break;

      case 'skills':
        if (!this.data.skills) {
          this.data.skills = [];
        }
        this.data.skills = message.split(',').map(skill => skill.trim()).filter(skill => skill.length > 0);
        this.currentSection = 'complete';
        response = "Perfect! I have all the information needed to create your professional CV. Your CV will include:\n\n" +
                  `• Personal Info: ${this.data.personalInfo?.name}\n` +
                  `• ${this.data.experience?.length || 0} work experience(s)\n` +
                  `• ${this.data.education?.length || 0} education qualification(s)\n` +
                  `• ${this.data.skills?.length || 0} skills\n\n` +
                  "Ready to preview your CV?";
        break;

      case 'complete':
        response = "Great! Let's preview your CV now. You'll be able to see how it looks and download it as a PDF.";
        break;
    }

    return {
      role: 'assistant',
      content: response,
    };
  }

  getData(): CVData {
    return this.data as CVData;
  }
}

export const CVChatService = CVChatServiceImpl;
