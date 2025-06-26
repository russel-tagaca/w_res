# Replit.md - Resume Application

## Overview

This is a full-stack web application built as a personal resume website. The application features a modern, interactive resume with smooth animations, responsive design, and PDF download functionality. It's built using React with TypeScript on the frontend, Express.js on the backend, and includes a PostgreSQL database setup with Drizzle ORM.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Bundler**: Vite for development and production builds
- **UI Library**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion for smooth page transitions and scroll animations
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for lightweight routing

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Build Tool**: esbuild for server-side bundling
- **Development**: tsx for TypeScript execution in development

### Data Storage Solutions
- **Database**: PostgreSQL 16 (configured via Neon serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Schema**: Shared schema definitions between client and server
- **Session Storage**: In-memory storage for user sessions

## Key Components

### Frontend Components
- **Resume Sections**: Modular components for each resume section (Hero, Experience, Projects, Skills, Education)
- **Navigation**: Fixed navigation with scroll progress and section highlighting
- **UI Components**: Complete shadcn/ui component library for consistent design
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Services
- **API Routes**: RESTful endpoints for resume data and PDF downloads
- **File Serving**: Static file serving for resume PDF downloads
- **Development Server**: Vite integration for hot module replacement in development

### Data Models
- **User Schema**: Basic user authentication structure
- **Storage Interface**: Abstracted storage layer supporting both in-memory and database persistence

## Data Flow

1. **Client-Side Rendering**: React components render resume data from static data files
2. **API Requests**: TanStack Query manages server state for PDF downloads
3. **File Downloads**: Express serves static PDF files via dedicated API endpoints
4. **Session Management**: In-memory session storage for user interactions
5. **Database Operations**: Drizzle ORM handles PostgreSQL interactions with type safety

## External Dependencies

### Production Dependencies
- **UI Framework**: React ecosystem with shadcn/ui components
- **Database**: @neondatabase/serverless for PostgreSQL connectivity
- **Validation**: Zod for runtime type validation
- **Animations**: Framer Motion for interactive animations
- **Date Handling**: date-fns for date formatting

### Development Dependencies
- **Build Tools**: Vite, esbuild, tsx for development and production builds
- **Type Checking**: TypeScript with strict configuration
- **Linting**: ESLint configuration for code quality

## Deployment Strategy

### Containerization
- **Docker**: Multi-stage Dockerfile for optimized production builds
- **Base Image**: Node.js 20 Alpine for lightweight containers
- **Build Process**: Separate build stage for dependency installation and application building
- **Production Stage**: Minimal runtime environment with only production dependencies

### Platform Support
- **Replit**: Configured for Replit's autoscale deployment
- **Port Configuration**: Application runs on port 5000 with external port 80
- **Environment**: Production-ready configuration with proper environment variable handling

### Build Configuration
- **Frontend Build**: Vite builds React application to `dist/public`
- **Backend Build**: esbuild bundles server code to `dist/index.js`
- **Static Assets**: Resume PDF served from `attached_assets` directory

## Changelog

```
Changelog:
- June 26, 2025. Initial setup
- January 5, 2025. Fixed Docker build configuration to resolve Vite import errors in production
- January 5, 2025. Implemented PDF download functionality serving actual resume file from attached_assets
- January 5, 2025. Fixed sidebar navigation highlighting for education section at bottom of page
- January 5, 2025. Updated progress bar to show real scroll progress (100% at page bottom)
- January 5, 2025. Optimized sidebar positioning and scroll trigger delays
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```