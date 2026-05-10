# Vite + React + Tailwind CSS + PostCSS

A modern web development setup with React, Vite, Tailwind CSS, and PostCSS.

## Project Structure

```
├── src/
│   ├── main.jsx          # Entry point
│   ├── App.jsx           # Root component
│   └── index.css         # Tailwind CSS directives
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Dependencies and scripts
```

## Getting Started

### Install Dependencies

```bash
npm install
```

### Development Server

```bash
npm run dev
```

The app will run on `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm start
```

### Linting

Check for linting errors:
```bash
npm run lint
```

Show warnings as well:
```bash
npm run lint:warn
```

## Features

- **Vite** - Lightning fast build tool and development server
- **React 18** - Latest React version with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS transformations with autoprefixing
- **Radix UI** - Accessible component primitives
- **React Hook Form** - Performant form management
- **Lucide React** - Beautiful SVG icons
- **Framer Motion** - Animation library
- **ESLint** - Code quality and style enforcement

## Available Scripts

| Script | Description |
|--------|-------------|
| `dev` | Start development server on port 3000 |
| `build` | Build for production |
| `start` | Preview production build |
| `lint` | Check code quality (quiet mode) |
| `lint:warn` | Check code quality with warnings |

## Technologies

- **React 18.3.1**
- **Vite 7.3.1**
- **Tailwind CSS 3.4.17**
- **PostCSS 8.4.49**
- **React Router 7.13.0**
- **React Hook Form 7.71.2**
- **Radix UI components**
- **TypeScript ready** (dev dependencies included)
