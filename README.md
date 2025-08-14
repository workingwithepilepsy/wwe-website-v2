# Working with Epilepsy - Website v2

A professional empowerment platform for people with epilepsy, built as a scalable, accessible, and SEO-optimized nonprofit website with content managed through Sanity CMS.

## 🏗️ Architecture

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS with custom design system
- **CMS**: Sanity Studio for content management
- **Backend**: Node.js + Express + GraphQL
- **Deployment**: Vercel (frontend) + Railway (backend)

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone and install dependencies**
   ```bash
   git clone <repository-url>
   cd wwe-website-v2
   npm install
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Add your Sanity project credentials
   ```

3. **Start development servers**
   ```bash
   # Frontend (port 3000)
   npm run dev
   
   # Backend (port 4000)
   npm run server:dev
   
   # Sanity Studio (port 3333)
   npm run studio:dev
   ```

## 📁 Project Structure

```
working-with-epilepsy/
├── client/           # React frontend
├── server/           # Node.js backend
├── studio/           # Sanity CMS
├── shared/           # Shared types
└── docs/            # Documentation
```

## 🎨 Design System

The project uses a custom Tailwind CSS theme with:
- **Brand Colors**: Innovation Purple, Authority Charcoal, etc.
- **Typography**: Avenir, Source Sans 3, Source Serif 4
- **Accessibility**: WCAG 2.1 AA compliant with seizure safety

## 🌐 Content Management

Content is managed through Sanity CMS with:
- **Project ID**: `b68z8asn`
- **Schemas**: Page builder with modular content blocks
- **Real-time**: Live preview and webhooks

## 🔧 Development Commands

```bash
# Frontend
npm run dev              # Development server
npm run build            # Production build
npm run type-check       # TypeScript validation
npm run lint             # ESLint checking
npm run format           # Prettier formatting

# Backend
npm run server:dev       # Development server
npm run server:build     # Production build

# Studio
npm run studio:dev       # Sanity Studio development
npm run studio:build     # Studio build
```

## ♿ Accessibility

This platform prioritizes accessibility with:
- WCAG 2.1 AA compliance
- Seizure-safe design (no flashing >3Hz)
- Screen reader optimization
- Keyboard navigation support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built to empower professionals with epilepsy in their workplace journey.
