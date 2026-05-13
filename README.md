# GYMORA-AI

An AI-driven fitness platform for personalized workouts, nutrition planning, and health tracking.

## Project Structure

### 📁 client/ (Frontend - React + Tailwind)
- `public/`: Assets like images, icons, and videos.
- `src/app/`: Next.js App Router (if applicable).
- `src/components/`: Modular UI components organized by feature (common, dashboard, workout, nutrition, ai, auth).
- `src/pages/`: Page-level components.
- `src/services/`: API and third-party service integrations.
- `src/hooks/`: Custom React hooks.
- `src/context/`: React context providers for state management.
- `src/utils/`: Utility functions (calculators, formatters).
- `src/styles/`: Global styles and Tailwind configuration.
- `src/data/`: Static data (exercises, food database).

### 📁 server/ (Backend - Node.js + Express)
- `config/`: Configuration for DB, OpenAI, and Cloudinary.
- `controllers/`: Request handlers for different routes.
- `routes/`: API endpoint definitions.
- `models/`: Database schemas (User, Workout, Diet, etc.).
- `middleware/`: Auth, error handling, and upload middleware.
- `services/`: Business logic and external API interactions.
- `utils/`: Helper functions for backend logic.
- `uploads/`: Local storage for meal images and body analysis reports.

### 📁 Other Directories
- `database/`: SQL schemas, seeds, and backups.
- `ai-models/`: Resources for food recognition, workout recommendations, and chatbot prompts.
- `docs/`: Project documentation (API, Flow, Database).
- `deployment/`: Configuration for Vercel, Docker, and Nginx.

## Setup Instructions

### Frontend
1. `cd client`
2. `npm install`
3. `npm run dev`

### Backend
1. `cd server`
2. `npm install`
3. `npm run dev` (requires nodemon)
