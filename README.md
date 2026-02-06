# Sonu Kumar - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, and experience as a Full-Stack + AI Engineer. Built with React, Tailwind CSS, and deployed on Vercel.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://hhsksonu.vercel.app/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-black)](https://vercel.com/)

## Live Demo

**[hhsksonu.vercel.app](https://hhsksonu.vercel.app/)**

## Features

- **Modern Design**: Clean, professional UI with dark theme and emerald green accents
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll animations, hover effects, and transitions
- **Interactive Skills Section**: Skill proficiency visualization with neon-fill buttons
- **Project Showcase**: Detailed project cards with tech stack and links
- **Contact Section**: Easy-to-use contact cards with social links
- **Fast Performance**: Optimized build with React and Vite
- **SEO Optimized**: Meta tags and structured content for better search visibility

## Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Build Tools
- **Vite** - Fast build tool and dev server
- **PostCSS** - CSS processing
- **Autoprefixer** - Browser compatibility

### Deployment
- **Vercel** - Hosting and deployment platform

## Project Structure

```
sonu-kumar-portfolio/
├── public/
│   └── assets/          # Static assets (images, icons)
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main application component
│   ├── index.css        # Global styles
│   └── main.jsx         # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## Sections

### 1. Hero Section
- Professional introduction
- Role and tagline
- Quick links (GitHub, Resume, LinkedIn)
- Stats grid (Experience, Projects, Technologies, ML Accuracy)
- Profile image with floating tech badges

### 2. About Section
- Professional summary
- Academic background (MCA from DY Patil University)
- Availability status
- Contact information

### 3. Skills Section
Organized into 7 categories with interactive skill buttons showing proficiency levels:
- **Frontend Stack**: React.js, HTML, CSS, Bootstrap, Tailwind CSS
- **Backend Stack**: Python, Django, Flask, FastAPI, Express.js, REST APIs
- **AI/ML Stack**: Machine Learning, NLP, Computer Vision, TensorFlow, Scikit-learn
- **Data & Analytics**: NumPy, Pandas, Matplotlib, Power BI, Jupyter
- **Databases**: PostgreSQL, MySQL, MongoDB, Microsoft SQL Server
- **Languages**: Python, JavaScript, SQL, R, C, C++
- **Tools**: Git, Jupyter, VS Code, Postman, Power BI, PyCharm

### 4. Experience Section
- **AI/ML Intern at ACISM** (Jan 2025 - Jul 2025)
- Modular ML pipeline development
- Model optimization achievements

### 5. Projects Section
Featured projects with:
- Project descriptions
- Key highlights and achievements
- Tech stack badges
- GitHub and live demo links

**Projects:**
1. **Fake Job Post Detector** - NLP-based fraud detection (95% accuracy)
2. **Loyalty Analytics Engine** - Gaming platform backend
3. **Voice-to-Text Desktop Application** - Speech recognition app
4. **Blog Website** - Django full-stack application

### 6. Education Section
- **MCA** - DY Patil University, Pune (CGPA: 8.5)
- **BA Economics** - T.P.S. College, Patna

### 7. Contact Section
- Email, GitHub, LinkedIn links
- Availability status
- Professional contact cards

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/hhsksonu/sonu-kumar-portfolio.git
cd sonu-kumar-portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
# or
yarn build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
# or
yarn preview
```

## Deployment

This portfolio is deployed on **Vercel** with automatic deployments from the main branch.

### Deploy Your Own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/hhsksonu/sonu-kumar-portfolio)

**Manual Deployment:**

1. Install Vercel CLI
```bash
npm install -g vercel
```

2. Deploy
```bash
vercel
```

## Customization Guide

### Update Personal Information

1. **Profile Image**: Replace image URL in `src/App.jsx` (Hero section)
2. **Resume Link**: Update resume URL in navigation and hero buttons
3. **Social Links**: Update GitHub, LinkedIn, email in contact section
4. **Projects**: Edit project details in the projects array
5. **Skills**: Modify skill proficiency levels in `skillsData` object

### Color Theme

The portfolio uses an emerald green accent color. To change:

1. Update Tailwind config in `tailwind.config.js`
2. Replace `emerald-400` with your preferred color throughout components
3. Update gradient backgrounds in hero section

### Adding New Sections

1. Create new section component in `src/components/`
2. Import and add to `App.jsx`
3. Update navigation menu

## Performance Optimization

- **Code Splitting**: React lazy loading for components
- **Image Optimization**: Compressed images and proper formats
- **Tailwind Purge**: Unused CSS removed in production
- **Vite Optimization**: Fast HMR and optimized builds

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

While this is a personal portfolio, suggestions and feedback are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Commit your changes (`git commit -m 'Add improvement'`)
4. Push to branch (`git push origin feature/improvement`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Sonu Kumar**

- Portfolio: [hhsksonu.vercel.app](https://hhsksonu.vercel.app/)
- GitHub: [@hhsksonu](https://github.com/hhsksonu)
- LinkedIn: [linkedin.com/in/hhsksonu](https://www.linkedin.com/in/hhsksonu)
- Email: sonukumaryz463@gmail.com

---

## Acknowledgments

- Design inspiration from modern portfolio websites
- Icons from [Lucide React](https://lucide.dev/)
- Deployed on [Vercel](https://vercel.com/)
- Built with [React](https://reactjs.org/) and [Tailwind CSS](https://tailwindcss.com/)

---

**Status**: Active Development | Open to Full-Stack / AI Engineer Roles | Immediate Joiner

If you like this portfolio, please give it a star! ⭐
