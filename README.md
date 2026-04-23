# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework** — Next.js
- **Styling** — Tailwind CSS
- **Animation** — Framer Motion
- **Particles** — tsParticles
- **Slider** — Swiper.js
- **Email** — EmailJS
- **Icons** — React Icons
- **Font** — Sora (Google Fonts)

## Pages

- **Home** — landing page with hero section, avatar, and projects button
- **About** — profile photo, skills, experience, and credentials
- **Services** — list of services offered
- **Work** — project showcase with image slider
- **Testimonials** — client testimonials slider
- **Contact** — contact form with EmailJS integration

## Features

- Responsive design — mobile, tablet, and desktop
- Page transition animations
- Interactive particle background
- Swiper sliders for work and testimonials
- Contact form with EmailJS
- Circular rotating text button
- Social media links

## Getting Started

### Prerequisites

- Node.js 
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Radityaputrazz/My-Portfolio.git

# Navigate to the project directory
cd portfolio

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open (http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Environment Setup

Create a `.env.local` file in the root directory and add your EmailJS credentials:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Then update `pages/contact/index.js` to use the environment variables:

```js
await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
  { ... },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
);
```

## Project Structure

```
├── components/
│   ├── Avatar.jsx
│   ├── Bulb.jsx
│   ├── Circles.jsx
│   ├── Header.jsx
│   ├── Layout.jsx
│   ├── Nav.jsx
│   ├── ParticlesContainer.jsx
│   ├── ProjectsBtn.jsx
│   ├── ServiceSlider.jsx
│   ├── Socials.jsx
│   ├── TestimonialSlider.jsx
│   ├── TopLeftImg.jsx
│   ├── Transition.jsx
│   └── WorkSlider.jsx
├── pages/
│   ├── about/
│   │   └── index.js
│   ├── contact/
│   │   └── index.js
│   ├── services/
│   │   └── index.js
│   ├── testimonials/
│   │   └── index.js
│   ├── work/
│   │   └── index.js
│   ├── _app.js
│   └── index.js
├── public/
│   └── ...assets
├── styles/
│   └── globals.css
├── variants.js
├── tailwind.config.js
└── next.config.js
```
## Tampilan

📧 Kontak: [Radityaputra.dev@gmail.com]
🔗 Live Demo: [https://my-portfolio1-kappa-nine.vercel.app/]

## License

[MIT License](https://gh.io/mit)
