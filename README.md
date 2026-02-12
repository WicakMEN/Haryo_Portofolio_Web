# Haryo's Portfolio Website 🔥

Modern, interactive portfolio website with particle line background and mouse repulse effect.

## 🎯 Features

- ✨ Interactive particle background with mouse repulse effect
- 🎨 Modern dark tech aesthetic
- 📱 Fully responsive design
- 🚀 Smooth animations with Framer Motion
- ⚡ Built with Vite for blazing fast performance
- 🎭 Clean, modular component structure

## 🛠 Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **tsParticles** - Interactive particle background
- **Framer Motion** - Smooth animations

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server (opens at http://localhost:3000)
npm run dev
```

### Build

```bash
# Build for production
npm run build
```

### Preview

```bash
# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ParticleBackground.jsx  # Interactive particle effect
│   ├── Hero.jsx                # Hero section with CTA
│   ├── About.jsx               # About section with skills
│   ├── Projects.jsx            # Projects showcase
│   └── Contact.jsx             # Contact section
├── App.jsx                     # Main app component
├── main.jsx                    # Entry point
└── index.css                   # Global styles
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  accent: {
    purple: '#8b5cf6',  // Main accent color
    blue: '#38bdf8'      // Secondary accent
  }
}
```

### Particle Settings

Modify particle behavior in `src/components/ParticleBackground.jsx`:

- `number.value` - Number of particles
- `links.distance` - Connection distance
- `move.speed` - Movement speed
- `modes.repulse.distance` - Mouse repulse distance

### Content

Update your personal information in:
- `Hero.jsx` - Name, title, tagline
- `About.jsx` - Bio and skills
- `Projects.jsx` - Your projects
- `Contact.jsx` - Social links and email

## 📝 TODO

- [ ] Add your actual projects with images
- [ ] Update social media links
- [ ] Add your email address
- [ ] Customize colors to your preference
- [ ] Add more sections if needed (e.g., Experience, Blog)

## 🌟 Performance Tips

- Particle count is optimized for performance
- Responsive particle density for mobile
- Lazy loading for images (when you add them)
- Minimized animations for smooth experience

## 📄 License

Free to use for personal projects. Created with ❤️ by Haryo.

---

**Made with creativity and passion** ✨
