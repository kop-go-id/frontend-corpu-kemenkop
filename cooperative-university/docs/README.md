# Cooperative University - Frontend Documentation

## Project Overview

Cooperative University is a learning platform developed by Kementerian Koperasi Republik Indonesia. This frontend application is built with Next.js 14 and provides a modern, responsive interface for educational content delivery.

## Technology Stack

- **Framework**: Next.js 14.2.33
- **React**: 18.x
- **Styling**: Tailwind CSS 3.4.1
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## Project Structure

```
cooperative-university/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.jsx          # Root layout
│   │   └── page.jsx            # Home page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Basic UI components
│   │   ├── layout/             # Layout components
│   │   ├── forms/              # Form components
│   │   └── common/             # Common components
│   ├── lib/                    # Library functions
│   │   ├── db.js              # Database utilities
│   │   ├── auth.js            # Authentication utilities
│   │   └── api.js             # API client
│   ├── utils/                  # Utility functions
│   │   ├── helpers.js         # General helpers
│   │   └── validation.js      # Validation utilities
│   ├── hooks/                  # Custom React hooks
│   │   └── index.js           # Hook exports
│   ├── context/               # React Context providers
│   │   ├── AuthContext.jsx    # Authentication context
│   │   ├── ThemeContext.jsx   # Theme context
│   │   └── NotificationContext.jsx # Notification context
│   ├── types/                 # Type definitions
│   │   └── index.js           # JSDoc type definitions
│   └── constants/             # Application constants
│       └── index.js           # App constants
├── public/                    # Static assets
│   ├── images/               # Image assets
│   ├── icons/                # Icon assets
│   ├── fonts/                # Font assets
│   ├── manifest.json         # PWA manifest
│   └── robots.txt            # SEO robots file
├── middleware.js             # Next.js middleware
├── .env.example              # Environment variables template
├── .env.production           # Production environment template
├── .gitignore               # Git ignore rules
├── next.config.mjs           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── postcss.config.mjs       # PostCSS configuration
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Configure your environment variables in `.env.local`

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Component Architecture

### UI Components

Located in `src/components/ui/`, these are basic, reusable components:

- **Button**: Customizable button component with variants
- **Input**: Form input with validation support
- **Modal**: Modal dialog component
- **Card**: Content card component
- **Badge**: Status badge component

### Layout Components

Located in `src/components/layout/`:

- **Header**: Application header
- **Footer**: Application footer
- **Sidebar**: Navigation sidebar
- **Container**: Content container with responsive max-width

### Custom Hooks

Located in `src/hooks/`:

- `useApi`: API call hook with loading and error states
- `useLocalStorage`: Local storage management hook
- `useDebounce`: Debounced value hook
- `useWindowSize`: Window size tracking hook
- `useForm`: Form handling hook with validation

### Context Providers

Located in `src/context/`:

- **AuthContext**: Authentication state management
- **ThemeContext**: Theme switching functionality
- **NotificationContext**: Global notification system

## Styling

The project uses Tailwind CSS for styling. Key features:

- Responsive design utilities
- Custom color palette
- Component-based styling
- Dark mode support (via ThemeContext)

## Environment Variables

### Development (.env.local)

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cooperative_university
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Production (.env.production)

Configure production-specific values for database, API endpoints, and external services.

## API Integration

The project includes a centralized API client in `src/lib/api.js` with methods for:

- GET requests
- POST requests
- PUT requests
- DELETE requests

All API calls include error handling and can be extended with authentication headers.

## Authentication

Authentication is handled through:

- JWT token management
- Protected route middleware
- Authentication context provider
- Login/logout functionality

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables
3. Deploy automatically on push to main branch

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Self-hosted servers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is developed for Kementerian Koperasi Republik Indonesia.

## Support

For support and questions, please contact the development team.
