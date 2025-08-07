# AI Career Companion

A modern React application that empowers African graduates with AI-powered career tools, featuring an intelligent CV builder with multiple professional templates.

## 🚀 Features

### Landing Page
- **Hero Section**: Compelling introduction to the platform
- **Problem & Solution**: Clear value proposition for African graduates
- **Impact Metrics**: Showcase of platform benefits
- **Interactive MVP Demo**: Live demonstration of capabilities
- **User Stories**: Real testimonials and success stories
- **Call-to-Action**: Clear next steps for users

### CV Builder
- **Template Selection**: Choose from 3 professional templates:
  - Modern Professional (sidebar layout)
  - Classic Executive (traditional header layout)
  - Creative Impact (diagonal design elements)
- **AI-Powered Chat Interface**: Guided CV creation process
- **Smart Data Collection**: Step-by-step information gathering
- **Live Preview**: Real-time CV preview with template styling
- **PDF Export**: High-quality PDF generation with proper formatting

## 🛠️ Technology Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Routing**: React Router DOM
- **PDF Generation**: jsPDF, html2canvas, @react-pdf/renderer
- **Testing**: Vitest, Testing Library
- **Icons**: Lucide React

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd project
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

Run the test suite:
```bash
# Run tests once
npm run test:run

# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
project/
├── components/
│   ├── cv-builder/
│   │   ├── CVBuilder.tsx          # Main CV builder component
│   │   ├── TemplateSelector.tsx   # Template selection interface
│   │   ├── AIChatInterface.tsx    # AI chat for data collection
│   │   ├── CVPreview.tsx          # CV preview with templates
│   │   └── utils/
│   │       ├── chatService.ts     # AI chat logic
│   │       └── pdfGenerator.ts    # PDF export functionality
│   ├── ui/                        # Reusable UI components
│   ├── figma/                     # Figma-specific components
│   └── [landing-page-components]  # Hero, Problem, Solution, etc.
├── test/                          # Test files
├── styles/                        # Global styles
└── public/                        # Static assets
```

## 🎯 Key Features Implementation

### AI Chat Service
- Sequential data collection (personal info → experience → education → skills)
- Input validation (email format, required fields)
- Support for multiple work experiences and education entries
- Natural language processing for user responses

### Template System
- Modular template rendering
- Responsive design for all templates
- Template-specific styling and layouts
- Easy addition of new templates

### PDF Generation
- High-quality PDF export
- Multi-page support for long CVs
- Template-specific formatting preservation
- Optimized for print and digital viewing

### Performance Optimizations
- Lazy loading of CV Builder component
- Code splitting for vendor libraries
- Optimized bundle sizes
- Fast development server with HMR

## 🚀 Deployment

The project is configured for Netlify deployment with the included `netlify.toml` file.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Ensure all tests pass
6. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the excellent UI component library
- [Unsplash](https://unsplash.com) for high-quality images
- The React and Vite communities for amazing tools and documentation
