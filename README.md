# Farrukh's Portfolio Website

A modern, high-performance portfolio website built with Next.js, React, and TypeScript.

## 🚀 Features

- **Modern Design** - Glassmorphism UI with smooth animations
- **Dark/Light Mode** - Theme switching with persistent storage
- **Responsive** - Mobile-first design approach
- **Performance Optimized** - Lazy loading, code splitting, image optimization
- **Type Safe** - Full TypeScript support
- **Accessible** - WCAG compliant components
- **Contact Form** - Integrated with Telegram Bot API
- **Visitor Tracking** - Anonymous visitor analytics

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/Farrukh-Front-Dev/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables in `.env.local`:
```env
TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_SITE_NAME=Farrukh Portfolio
NEXT_PUBLIC_API_URL=http://localhost:3000/api
NEXT_PUBLIC_ENABLE_ANALYTICS=false
NEXT_PUBLIC_ENABLE_COMMENTS=false
```

## 🚀 Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm run start
```

### Linting

```bash
npm run lint
```

## 📁 Project Structure

```
app/
├── (site)/                    # Main site layout
│   ├── _components/           # React components
│   │   ├── common/            # Reusable components
│   │   ├── sections/          # Page sections
│   │   ├── features/          # Feature-specific components
│   │   ├── effects/           # Visual effects
│   │   └── ui/                # UI primitives
│   ├── _hooks/                # Custom React hooks
│   ├── _lib/                  # Utilities & helpers
│   ├── _types/                # TypeScript types
│   ├── _context/              # React context providers
│   ├── _content/              # Static content
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Home page
├── api/                       # API routes
│   ├── contact/               # Contact form endpoint
│   └── visit/                 # Visitor tracking endpoint
└── globals.css                # Global styles
```

## 🔐 Environment Variables

### Required (Server-side)
- `TELEGRAM_BOT_TOKEN` - Telegram bot token from @BotFather
- `TELEGRAM_CHAT_ID` - Your Telegram chat ID

### Required (Client-side)
- `NEXT_PUBLIC_SITE_URL` - Your site URL
- `NEXT_PUBLIC_SITE_NAME` - Site name
- `NEXT_PUBLIC_API_URL` - API base URL

### Optional (Feature Flags)
- `NEXT_PUBLIC_ENABLE_ANALYTICS` - Enable analytics (default: false)
- `NEXT_PUBLIC_ENABLE_COMMENTS` - Enable comments (default: false)

## 📚 API Endpoints

### POST /api/contact
Send a contact message via Telegram.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'm interested in your work!"
}
```

**Response:**
```json
{
  "status": "success",
  "message": "Message sent successfully!"
}
```

### POST /api/visit
Track visitor information.

**Request:**
```json
{
  "visitorId": "uuid",
  "name": "John",
  "type": "visit",
  "page": "/",
  "screen": "1920x1080"
}
```

## 🎨 Customization

### Colors & Theme
Edit `tailwind.config.ts` to customize colors and theme.

### Content
Update content in `app/(site)/_content/`:
- `content.json` - Main content
- `skills.tsx` - Skills list
- `ProjectsContent.tsx` - Projects list

### Components
All components are in `app/(site)/_components/` organized by feature.

## 🧪 Testing

```bash
npm run test
```

## 📊 Performance

- Lighthouse Score: 90+
- Core Web Vitals: All green
- Bundle Size: ~150KB (gzipped)

## 🔒 Security

- Input validation on all forms
- Rate limiting on API endpoints
- XSS protection
- CSRF tokens on forms
- Environment variables for sensitive data

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

```bash
npm run build
npm run start
```

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Farrukh Djumayev**
- GitHub: [@Farrukh-Front-Dev](https://github.com/Farrukh-Front-Dev)
- LinkedIn: [farrukhdjumayev](https://www.linkedin.com/in/farrukhdjumayev)
- Email: farrukh.front.dev@gmail.com

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

For support, email farrukh.front.dev@gmail.com or open an issue on GitHub.

---

Made with ❤️ by Farrukh
