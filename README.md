# NexGen Design Agency - Frontend Task

A modern, responsive, and animated Design Agency Homepage built with Next.js App Router as a task-based evaluation for the Frontend Developer position.

## 🚀 Live Demo & Repository
- **GitHub Repository:** https://github.com/Sivavg/design-agency
- **Live Deployment (Vercel):** https://weboinagency.netlify.app/

## 🛠️ Tech Stack Used
- **Framework:** [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Language:** JavaScript (JSX)
- **Deployment:** Recommended on Vercel

## ✨ Features Implemented
1. **Hero Section:** Engaging headline with animated staggered entry, dual CTA buttons, and a dynamic gradient background.
2. **Services Section:** Grid layout with visually appealing service cards showcasing our core expertise using icons.
3. **Portfolio Section:** Responsive grid layout showcasing project thumbnails using `next/image` with smooth hover transitions.
4. **Contact Section:** Functional UI for a contact form with simulated loading/success states.
5. **Bonus / Additional Features Added:**
   - **Framer Motion Animations:** Scroll-triggered animations for all sections to make the site feel premium and dynamic.
   - **SEO Metadata:** Added relevant page metadata in `layout.jsx` to ensure search engine visibility.
   - **Responsive Navigation Bar:** Sticky top navigation that blurs on scroll, with a functional mobile hamburger menu.
   - **Image Optimization:** Used Next.js built-in `<Image />` component for automatic optimization and responsive sizing.

## 📁 Project Structure
The code is structured modularly for maintainability and scalability. All sections are isolated into their own components.
```text
src/
├── app/
│   ├── layout.jsx         # Root layout with Navbar, Footer, and SEO metadata
│   ├── page.jsx           # Main homepage stitching all sections together
│   └── globals.css        # Global CSS and Tailwind directives
└── components/
    ├── Navbar.jsx         # Responsive top navigation
    ├── Hero.jsx           # Hero section 
    ├── Services.jsx       # Services overview cards
    ├── Portfolio.jsx      # Project gallery
    ├── Contact.jsx        # Contact form with validation UI
    └── Footer.jsx         # Standard footer
```

## ⚙️ Setup Instructions

### Prerequisites
Make sure you have Node.js (version 18 or above) installed on your system.

### 1. Install Dependencies
Run the following command in the terminal to install all necessary packages:
```bash
npm install
```

### 2. Run the Development Server
Start the local development server:
```bash
npm run dev
```

### 3. Open in Browser
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. 

## 💡 Assumptions & Design Decisions
- **Dark Theme Priority:** Opted for a sleek, modern dark theme (Slate-950) with blue/purple accents, as this is currently a popular trend among high-end design agencies, creating an immediate "wow" factor.
- **Component Separation:** Chose to separate each section into its own Client Component (`"use client"`) because they utilize interactive elements (like `framer-motion` hooks, `useState` for forms, and `useEffect` for the navbar scroll).
- **Contact Form Simulation:** The contact form simulates an API request with a `setTimeout` to demonstrate loading states and success feedback, showing attention to UX details.

---

*Thank you for reviewing my submission. I look forward to the technical discussion!*

Author : Siva

