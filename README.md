# EstateIn - Real Estate Frontend Project

A modern, responsive real estate website built with React and TypeScript, featuring property listings, detailed property views, and a clean user interface.

## 🚀 Tech Stack

### Core Technologies

- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.0.4** - Fast build tool and dev server

### UI & Styling

- **Tailwind CSS 4.1.11** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library for React
- **React Spinners 0.17.0** - Loading spinner components

### State Management & Data

- **React Context API** - Built-in state management
- **Local JSON Data** - Static data storage (no backend required)

### Routing & Navigation

- **React Router 7.7.1** - Client-side routing
- **Lazy Loading** - Code splitting for better performance

### Development Tools

- **ESLint 9.30.1** - Code linting and quality
- **Prettier 3.6.2** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 🏗️ Architecture & Techniques

### Component Architecture

- **Functional Components** - Modern React with hooks
- **Component Composition** - Reusable UI components
- **Props Interface** - TypeScript interfaces for component props
- **Custom Hooks** - Logic extraction and reusability

### State Management Patterns

- **Context Providers** - Global state management
- **useState Hook** - Local component state
- **useEffect Hook** - Side effects and data fetching
- **Custom Context Hooks** - Encapsulated state logic

### Performance Optimizations

- **Lazy Loading** - Route-based code splitting
- **Memoization** - React.memo for expensive components
- **Conditional Rendering** - Smart UI updates
- **Image Optimization** - WebP format support

### Responsive Design

- **Mobile-First Approach** - Responsive breakpoints
- **Tailwind Responsive Classes** - Adaptive layouts
- **Flexbox & Grid** - Modern CSS layout systems
- **Touch-Friendly Interactions** - Mobile-optimized UI

### Type Safety

- **TypeScript Interfaces** - Property and component types
- **Strict Type Checking** - Compile-time error prevention
- **API Response Typing** - Data structure validation

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
├── home/                 # Homepage components
├── aboutUsPage/          # About us page
├── propertiesPage/       # Properties listing page
├── propertyDetailsPage/  # Individual property page
├── servicesPage/         # Services page (TO BE BUILT)
├── contactUsPage/        # Contact page (TO BE BUILT)
├── context/              # State management
├── hooks/                # Custom React hooks
├── types/                # TypeScript type definitions
├── assets/               # Static assets
│   ├── images/          # Image files
│   ├── fonts/           # Custom fonts
│   └── icons/           # Icon assets
├── App.tsx              # Main app component
├── App.css              # Global styles
├── main.tsx             # App entry point
└── vite-env.d.ts        # Vite type definitions
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone [https://github.com/Mohamed-A-Yehia/Estatein]

# Navigate to project directory
cd estatein

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

---

**Note**: This is a frontend-only project with no backend requirements. All data is managed through local JSON files and React Context API for state management.
