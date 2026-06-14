# 🦅 Raptor Webcraft Technologies — Web App

**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS · MongoDB · Mongoose · JWT · Framer Motion

## Quick Start

```bash
npx create-next-app@14 raptor-webcraft --typescript --tailwind --app
cd raptor-webcraft
npm install mongoose jsonwebtoken bcryptjs axios react-icons framer-motion react-hot-toast clsx
npm install -D @types/jsonwebtoken @types/bcryptjs
```

Copy all files from this ZIP into the project root, then:

```bash
cp .env.local.example .env.local  # fill in MONGODB_URI and JWT_SECRET
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable          | Description                          |
|-------------------|--------------------------------------|
| MONGODB_URI       | MongoDB Atlas connection string      |
| JWT_SECRET        | 32+ char random secret               |
| JWT_EXPIRES_IN    | Token lifetime (default: 7d)         |
| NEXT_PUBLIC_APP_URL | Your domain (https://yoursite.com) |

## File Structure

```
raptor-webcraft/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── about/page.tsx      # About Us
│   ├── resources/page.tsx  # Resources
│   ├── notices/page.tsx    # Notices
│   ├── login/page.tsx      # Login
│   ├── dashboard/
│   │   ├── admin/page.tsx  # Admin Dashboard
│   │   └── user/page.tsx   # User Dashboard
│   └── api/                # API routes (auth, users, notices, resources)
├── components/             # Navbar, Footer
├── lib/                    # mongodb.ts, auth.ts
├── models/                 # User, Notice, Resource (Mongoose)
└── middleware.ts            # Route protection
```

## Brand Colors

| Token              | Hex       | Usage                    |
|--------------------|-----------|--------------------------|
| raptor-orange      | #FF8C00   | CTAs, highlights         |
| raptor-purple      | #5B2C9F   | Buttons, borders         |
| raptor-darkpurple  | #3D1A5C   | Dark card backgrounds    |
| raptor-blue        | #2563EB   | Gradient, tech accents   |
| App BG             | #0d0618   | Page background          |

## Deployment

Deploy to **Vercel** (recommended for Next.js):
1. Push to GitHub
2. Connect repo to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!
