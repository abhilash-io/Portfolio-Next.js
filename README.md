# Abhilash Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This project showcases my professional experience, technical skills, and featured projects with smooth animations and a clean design.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS for clean, maintainable styling
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **TypeScript**: Type-safe development for better code quality
- **SEO Optimized**: Includes sitemap, robots.txt, and meta tags
- **Fast Performance**: Next.js 16 with App Router for optimal loading speeds

## 🛠️ Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12.34.0
- **Icons**: Lucide React 0.563.0
- **Deployment**: Ready for Vercel, Netlify, or other static hosting

## 📁 Project Structure

```
abhilash-portfolio/
├── app/                    # Next.js App Router pages
│   ├── about/              # About page
│   ├── projects/           # Projects showcase
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── public/                 # Static assets
├── .gitignore              # Git ignore file
├── package.json            # Dependencies and scripts
├── tailwind.config.js      # Tailwind configuration
└── tsconfig.json           # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/abhilash-portfolio.git
   cd abhilash-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📜 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint for code linting

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically detect the Next.js framework and deploy

### Other Platforms

The built application can be deployed to any platform that supports Node.js or static hosting:

```bash
npm run build
```

The `.next` folder contains the production build.

## 🎨 Customization

### Personal Information

Update your personal details in `app/page.tsx`:
- Name and title
- Contact information
- Social media links
- Project details

### Styling

Modify the theme and colors in:
- `app/globals.css` for global styles
- `tailwind.config.js` for Tailwind configuration

### Adding Projects

Add new projects to the `projects` array in `app/page.tsx` with the following structure:
```typescript
{
  title: "Project Name",
  period: "Start Date - End Date",
  type: "Technology Stack",
  description: "Brief project description",
  achievements: ["Achievement 1", "Achievement 2"],
  technologies: ["Tech1", "Tech2", "Tech3"],
  icon: ComponentName
}
```

## 🤝 Contributing

This is a personal portfolio project. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: your.email@example.com
- **GitHub**: [yourusername](https://github.com/yourusername)
- **LinkedIn**: [Your Name](https://linkedin.com/in/yourprofile)

---

⭐ If you like this portfolio template, consider giving it a star!
