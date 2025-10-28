# Cooperative University

A modern learning platform developed by Kementerian Koperasi Republik Indonesia.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/           # Next.js App Router
├── components/    # Reusable components
│   ├── ui/        # Basic UI components
│   ├── layout/    # Layout components
│   ├── forms/     # Form components
│   └── common/    # Common components
├── lib/           # Library functions
├── utils/         # Utility functions
├── hooks/         # Custom React hooks
├── context/       # React Context providers
├── types/         # Type definitions
└── constants/     # Application constants
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Language**: JavaScript (ES6+)
- **Package Manager**: npm

## 📚 Documentation

Detailed documentation is available in the [docs/](./docs/) folder.

## 🔧 Environment Variables

Copy `.env.example` to `.env.local` and configure your environment variables:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=cooperative_university
DB_USER=postgres
DB_PASSWORD=your_password
JWT_SECRET=your_jwt_secret
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

## 🚀 Deployment

The project can be deployed to Vercel, Netlify, or any platform that supports Next.js.

## 📄 License

Developed for Kementerian Koperasi Republik Indonesia.