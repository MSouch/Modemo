# MODEMO - Site Mobilization & Demobilization

A modern React web application for site mobilization and demobilization solutions, built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with responsive navigation
- **Modern UI Components**: Custom UI components with Tailwind CSS styling
- **Site Management**: Solutions for workforce management, project timeline, and safety compliance
- **Interactive Login**: User authentication interface
- **Professional Layout**: Clean, professional design suitable for industrial operations

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons
- **Custom UI Components** - Reusable component library

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or download the project files
2. Navigate to the project directory:
   ```bash
   cd Modemo
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### Building for Production

Build the project:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── label.tsx
│   └── figma/        # Figma-specific components
│       └── ImageWithFallback.tsx
├── lib/
│   └── utils.ts      # Utility functions
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
└── index.css         # Global styles and CSS variables
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Colors and Theming

The application uses CSS custom properties for theming. You can modify the color scheme by updating the CSS variables in `src/index.css`.

### Components

All UI components are located in `src/components/ui/` and can be customized or extended as needed.

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is private and proprietary.
