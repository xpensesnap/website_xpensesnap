# XpenseSnap — Landing Page

Welcome to the frontend repository for **XpenseSnap**, the landing page for our AI-powered expense tracking and bill-splitting app. This project isn't just a static site; it's an interactive, highly-polished experience built to wow users and demonstrate the premium nature of the product.

## 🎨 Design Philosophy & Aesthetics

We set out to build an interface that feels alive, premium, and state-of-the-art. We moved away from generic flat designs and heavily invested in micro-animations, 3D transforms, and deep interactive states. 

The aesthetic is characterized by:
- **Dark Mode by Default:** Deep "ink" blacks and sleek typography designed to reduce eye strain and feel modern.
- **Vibrant Gradients:** Harmonious, tailored color palettes (like the `--color-brand-*` and `--color-ink-*` scales defined in our custom CSS properties).
- **Glassmorphism & Blurs:** Extensive use of backdrop filters (`backdrop-blur`) and semi-transparent layers to give depth to the UI, particularly in our mock app screens.
- **Fluid Typography:** Utilizing the *Doto* font for striking display headers and data points alongside clean sans-serif bodies.

## ✨ Key Visual Effects & Interactions

We relied heavily on **Framer Motion** and advanced CSS techniques to create these standout effects:

### 1. Interactive Cursor Masking (The "X-Ray" Effect)
In the **Hero Section** (`HeroSection.tsx`), we built a dynamic mask effect. As you move your mouse over the main headline, a `clip-path: circle(...)` follows your cursor. This acts as a window or "x-ray", revealing an intensely colored, inverted text layer hidden beneath the standard dark text. It creates an immediate, visceral connection with the user.

### 2. 3D Parallax & Scroll Transforms
- **The Apple-Style Showcase:** In `AppleShowcase.tsx`, as you scroll down, a mockup phone rotates in 3D space (`rotateY`, `rotateZ`, `preserve-3d`). The content within the screen seamlessly animates between different states (Scanning, Splitting, Budgeting) based on your scroll progress, giving a cinematic tour of the app.
- **Tilting Windows:** In `DeepFeatures.tsx`, feature cards track the user's mouse position and subtly tilt in 3D space using spring physics. The inner content is translated forward on the Z-axis (`translateZ`), causing elements to visually "pop" out of the screen.

### 3. CSS Masking & Fading
We frequently use `mask-image` with radial gradients. For example, our background grids fade out beautifully at the edges using `[mask-image:radial-gradient(ellipse_at_center,#000_25%,transparent_75%)]`. This technique is used to create spotlight effects and blend hard edges into the background seamlessly.

### 4. Smooth View Transitions & Theming
Our `globals.css` leverages the View Transitions API (`::view-transition`) to ensure that routing and theme toggles (Light/Dark mode) feel buttery smooth, avoiding the harsh flashing typical of traditional SPAs. 

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)
- **UI Library:** React 19
- **Styling:** Tailwind CSS v4 (with custom `@theme inline` variables)
- **Animation:** Framer Motion (for spring physics, scroll progress, and gesture tracking)
- **Icons:** Lucide React
- **Smooth Scrolling:** Lenis

## 🚀 Getting Started

To run the site locally:

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---
*Built with ❤️ for XpenseSnap.*
