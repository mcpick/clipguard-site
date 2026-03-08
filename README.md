# Clipboard Guard Website

Official promotional website for Clipboard Guard - an open-source desktop clipboard security app.

## 🌐 Live Site

Visit [mcpick.github.io/clipguard](https://mcpick.github.io/clipguard)

## 🚀 Development

This site is built with [Astro 5](https://astro.build/) and deployed to GitHub Pages.

### Prerequisites

- Node.js 18+
- pnpm

### Getting Started

```bash
# Clone the repository
git clone https://github.com/mcpick/clipguard-site.git
cd clipguard-site

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm check` - Run Astro check
- `pnpm fmt` - Format code with Prettier
- `pnpm fmt:check` - Check code formatting

## 🎨 Design System

The site uses a light, clean design inspired by the Clipboard Guard app itself:

**Colors:**

- Background: `#f5f5f7`
- Cards: `#ffffff`
- Text: `#1d1d1f`
- Secondary text: `#86868b`
- Primary accent: `#34c759`
- Blue: `#007aff`
- Orange: `#ff9500`

**Typography:**

- System font stack: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

## 🏗️ Project Structure

```
├── src/
│   ├── components/          # Reusable components
│   ├── layouts/            # Page layouts
│   └── pages/              # Pages (file-based routing)
├── public/                 # Static assets
└── .github/workflows/      # GitHub Actions
```

## 📝 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Related

- [Clipboard Guard App](https://github.com/mcpick/clipguard) - The main application
- [Clipboard Guard Releases](https://github.com/mcpick/clipguard/releases) - Download the app
