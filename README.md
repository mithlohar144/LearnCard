# LearnCard

A comprehensive digital credentialing system that enables the creation, management, and verification of educational and professional credentials using blockchain-inspired technology.

## Quick Start

Clone the repository
```bash
git clone https://github.com/mithlohar144/LearnCard.git
```

Install dependencies
```bash
npm install
```

Set up environment variables
```bash
cp .env.example .env
```

## Development

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Deployment

This project is configured for deployment on **Netlify**.

### Deploy to Netlify

1. **Automatic Deployment from GitHub:**
   - Connect your GitHub repository to Netlify
   - Netlify will automatically detect the build settings from `netlify.toml`
   - Build command: `npm run build`
   - Publish directory: `dist`

2. **Manual Deployment:**
   ```bash
   npm run build
   # Upload the 'dist' folder to Netlify
   ```

3. **Using Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=dist
   ```

### Environment Variables

Set up your environment variables in the Netlify dashboard:
- Go to Site settings > Environment variables
- Add any required environment variables from your `.env.example`

## Documentation

For detailed documentation, see [explain.md](explain.md)
