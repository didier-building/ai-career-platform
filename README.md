# 🚀 AI-Powered Career Development Platform

> Empowering African graduates with AI-driven career tools for professional success

[![Live Demo](https://img.shields.io/badge/demo-live-green.svg)](https://github.com/didier-building/ai-career-platform)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?logo=react&logoColor=61DAFB)](https://reactjs.org/)

A comprehensive career development platform designed specifically for African graduates, featuring AI-powered tools for CV building, interview preparation, and career guidance. Built with modern web technologies and a focus on accessibility and user experience.

## ✨ Features

### 🤖 AI CV Builder
- **Conversational Interface**: Chat with AI to build your CV step-by-step
- **Smart Data Collection**: AI guides you through personal info, experience, education, and skills
- **Real-time Preview**: See your CV update as you provide information
- **Multiple Templates**: Choose from professionally designed templates:
  - 🎨 **Modern**: Clean, contemporary design with accent colors
  - 📄 **Classic**: Traditional, professional layout
  - 🎭 **Creative**: Bold, standout design for creative fields

### 📄 Professional Output
- **PDF Generation**: High-quality PDF export with perfect formatting
- **Responsive Design**: Optimized for all devices and screen sizes
- **Print-Ready**: Professional layouts suitable for printing

### 🎯 User Experience
- **No Signup Required**: Start building immediately
- **Progressive Enhancement**: Works without JavaScript for basic functionality
- **Accessibility First**: WCAG compliant design
- **Mobile Optimized**: Full functionality on mobile devices

### 🔮 Coming Soon
- **AI Communication Coach**: Practice and improve communication skills
- **Interview Training**: Mock interviews with AI feedback
- **Career Progress Tracker**: Monitor your professional development
- **Mentorship Matching**: Connect with experienced professionals

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible, unstyled UI components

### Libraries & Tools
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **jsPDF** - Client-side PDF generation
- **html2canvas** - HTML to canvas conversion
- **Class Variance Authority** - Component variant management
- **Tailwind Merge** - Intelligent Tailwind class merging

### Development
- **Vitest** - Fast unit testing framework
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - Automatic vendor prefixing

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0.0 or higher
- **npm** 8.0.0 or higher (or **yarn** 1.22.0+)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/didier-building/ai-career-platform.git
   cd ai-career-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to see the application

### Building for Production

```bash
# Build the application
npm run build

# Preview the production build
npm run preview
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run test` | Run unit tests with Vitest |
| `npm run test:ui` | Run tests with UI interface |
| `npm run lint` | Run ESLint for code quality |
| `npm run type-check` | Run TypeScript type checking |

## 🏗️ Project Structure

```
ai-career-platform/
├── components/           # React components
│   ├── cv-builder/      # CV builder specific components
│   │   ├── AIChatInterface.tsx
│   │   ├── CVBuilder.tsx
│   │   ├── CVPreview.tsx
│   │   ├── TemplateSelector.tsx
│   │   └── utils/       # CV builder utilities
│   │       ├── chatService.ts
│   │       └── pdfGenerator.ts
│   ├── ui/              # Reusable UI components
│   ├── HeroSection.tsx  # Landing page components
│   ├── ProblemSection.tsx
│   ├── SolutionSection.tsx
│   ├── MVPInteractiveSection.tsx
│   └── ...              # Other components
├── styles/              # Global styles
├── test/                # Test files
├── public/              # Static assets
└── dist/                # Production build (generated)
```

## 🧪 Testing

The project includes comprehensive testing setup:

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests with UI
npm run test:ui
```

## 🎨 Design System

The platform uses a consistent design system built with Tailwind CSS:

- **Colors**: Professional blue and green gradient theme
- **Typography**: Clean, readable font hierarchy
- **Spacing**: Consistent 8px grid system
- **Components**: Accessible, reusable UI components
- **Responsive**: Mobile-first responsive design

## 🎯 Key Features Implementation

### AI Chat Service
- Sequential data collection (personal info → experience → education → skills)
- Input validation (email format, required fields)
- Support for multiple work experiences and education entries
- Natural language processing for user responses
- Completion detection and CV preview trigger

### Template System
- Modular template rendering with TypeScript interfaces
- Responsive design for all templates
- Template-specific styling and layouts
- Easy addition of new templates
- Professional layouts optimized for ATS systems

### PDF Generation
- High-quality PDF export using jsPDF and html2canvas
- Multi-page support for long CVs
- Template-specific formatting preservation
- Optimized for print and digital viewing
- Maintains styling and layout integrity

### Performance Optimizations
- Lazy loading of CV Builder component
- Code splitting for vendor libraries
- Optimized bundle sizes with Vite
- Fast development server with HMR
- Efficient re-rendering with React optimization

## 🚀 Deployment

The project is configured for easy deployment:

- **Netlify**: Includes `netlify.toml` configuration
- **Vercel**: Compatible with zero-config deployment
- **GitHub Pages**: Can be deployed with GitHub Actions
- **Self-hosted**: Standard static site hosting

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm run test`
5. Commit your changes: `git commit -m 'Add amazing feature'`
6. Push to the branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Guidelines
- Follow TypeScript best practices
- Write tests for new features
- Ensure accessibility compliance
- Follow the existing code style
- Update documentation as needed

### Code Style
- Use TypeScript for all new code
- Follow ESLint configuration
- Use meaningful component and variable names
- Write clear commit messages

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **African Graduate Community** - For inspiration and feedback
- **Open Source Contributors** - For the amazing tools and libraries
- **Design Community** - For design inspiration and best practices
- [shadcn/ui](https://ui.shadcn.com/) for the excellent UI component library
- [Unsplash](https://unsplash.com) for high-quality images
- The React and Vite communities for amazing tools and documentation

## 📞 Support

If you have any questions or need help:

- 📧 **Email**: [Create an issue](https://github.com/didier-building/ai-career-platform/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/didier-building/ai-career-platform/discussions)
- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/didier-building/ai-career-platform/issues)

---

<div align="center">
  <p>Made with ❤️ for African graduates</p>
  <p>
    <a href="https://github.com/didier-building/ai-career-platform">⭐ Star this repo</a> •
    <a href="https://github.com/didier-building/ai-career-platform/issues">🐛 Report Bug</a> •
    <a href="https://github.com/didier-building/ai-career-platform/issues">✨ Request Feature</a>
  </p>
</div>
