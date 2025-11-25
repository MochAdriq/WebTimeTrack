# Time Track - Web Portal 🌐

![Platform](https://img.shields.io/badge/Platform-Web-blue?style=for-the-badge)
![Framework](https://img.shields.io/badge/Built%20With-Next.js-black?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

> **Note:** This is the web companion for the [Time Track Mobile SuperApp](https://github.com/mochadriq/time-track-app).

## 📖 Overview

**Time Track Web** serves as the central hub for the Time Track ecosystem. While the mobile app focuses on personal productivity and community engagement, this web platform functions as the **Administrative Dashboard & Landing Portal**.

It empowers administrators to manage marketplace content, monitor community discussions, and analyze user engagement metrics in real-time.

**🚀 [View Live Demo]([https://timetrack-web.vercel.app](https://web-time-track.vercel.app/))**

---

## ✨ Key Features

### 🖥️ Admin Dashboard
* **Content Management System (CMS):** Create and manage quizzes, educational materials, and marketplace products.
* **User Management:** Monitor user growth, verify premium members, and handle support tickets.
* **Analytics Visualization:** Real-time charts displaying active users, transaction volume, and community activity.

### 🌍 Public Landing Page
* **App Showcase:** Modern landing page highlighting mobile app features to drive downloads.
* **Community Preview:** Web-accessible view of public discussion threads.

---

## 🛠️ Tech Stack

This project is built with a modern, type-safe stack to ensure scalability and performance:

* **Core Framework:** [Next.js 14](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/) & [Shadcn UI](https://ui.shadcn.com/)
* **Backend & Auth:** [Supabase](https://supabase.com/)
* **State Management:** React Context / Zustand
* **Deployment:** Vercel

---

## 📂 Project Structure

```bash
.
├── app/                  # Next.js App Router pages
│   ├── (auth)/           # Authentication routes (Login/Register)
│   ├── (dashboard)/      # Protected admin routes
│   └── page.tsx          # Landing page
├── components/           # Reusable UI components
│   ├── ui/               # Shadcn UI primitives
│   └── features/         # Feature-specific components
├── lib/                  # Utility functions & Supabase client
├── public/               # Static assets (images, icons)
└── types/                # TypeScript type definitions

```

-----

## 🚀 Getting Started

Follow these steps to run the project locally:

### 1\. Clone the Repository

```bash
git clone https://github.com/MochAdriq/WebTimeTrack.git
cd time-track-web
```

### 2\. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3\. Configure Environment

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4\. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) with your browser to see the result.

-----

## 🤝 Related Repositories

This web portal is part of a larger ecosystem. Check out the mobile application:

  * **📱 Mobile App:** [Time Track App (Android/iOS)](https://www.google.com/url?sa=E&source=gmail&q=https://github.com/mochadriq/time-track-app)

-----

## 📝 License

This project is licensed under the [MIT License](https://www.google.com/search?q=LICENSE).

-----

Built with ❤️ by Mochadriq
