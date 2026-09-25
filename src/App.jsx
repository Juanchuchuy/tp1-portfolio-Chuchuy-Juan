import { useState } from 'react'

import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroIntro from './components/HeroIntro'
import Projects from './components/Projects'
import About from './components/About'
import Skills from './components/Skills'

import floridaIMG from './assets/projects-img/empresaFlorida.png'
import seguridadIMG from './assets/projects-img/seguridad.png'
import puntoLimpioIMG from './assets/projects-img/puntoLimpio.webp'

const content = {
  en: {
    nav: ['Home', 'Projects', 'About Me','Skills'],
    hero: {
      careers: ['Software Developer', 'UX/UI Designer', 'Student From UTN'],
    },
    about: {
      title: 'About Me',
      paragraphs: [
        `I'm Juan a Software Developer and UI/UX Designer who builds complete applications with design at the core. Based in Tucumán, Argentina, I'm finishing my degree at UTN-FRT while working as a freelance developer.`,
        `What sets me apart is that I don't just write code I design the experience before building it. Clients get a complete solution, not just a set of features.`,
        `I work mainly with React, Node.js and Astro, and take apps to mobile with Capacitor. On the design side, Figma is home.`,
        `My process starts by understanding the problem before touching code: user flows first, then design, then development. I work in short cycles with constant feedback, so clients see real progress from week one.`,
        `Available for freelance projects and collaborations.`,
      ],
      button: 'Lets talk',
    },
    projects: {
      title: 'My Projects',
      items: [
        { projectName: 'Empresa Florida', projectDescription: 'Real-time schedule and route lookup for Empresa Florida, via web or the mobile app.', projectImage: floridaIMG },
        { projectName: 'Punto Limpio', projectDescription: 'Municipal waste management platform: interactive map of collection points and truck schedules by street.', projectImage: puntoLimpioIMG },
        { projectName: 'Seguridad Privada', projectDescription: 'Application to manage and control office key handling.', projectImage: seguridadIMG },
      ],
    },
    skills: { title: 'Skills' },
  },
  es: {
    nav: ['Inicio', 'Proyectos', 'Sobre mí','Habilidades'],  
    hero: {
      careers: ['Desarrollador de Software', 'Diseñador UX/UI', 'Estudiante de UTN'],
    },
    about: {
      title: 'Sobre mí',
      paragraphs: [
        `Soy Juan, Desarrollador de Software y Diseñador UI/UX que construye aplicaciones completas diseñando con el usuario como centro. Vivo en Tucumán, Argentina, estoy terminando mi carrera en la UTN-FRT mientras trabajo como desarrollador freelance.`,
        `Lo que me diferencia es que no solo escribo código, diseño la experiencia antes de construirla. Los clientes obtienen una solución completa, no solo un conjunto de funcionalidades.`,
        `Trabajo principalmente con React, Node.js y Astro, y llevo las apps a mobile con Capacitor. Del lado del diseño, Figma es mi herramienta preferida.`,
        `Mi proceso empieza por entender las necesidades del usuario antes de nada, Utilizando la metodología design sprint trabajo en ciclos cortos con feedback constante, para que los clientes vean progreso real desde la primera semana.`,
        `Disponible para proyectos freelance y colaboraciones.`,
      ],
      button: 'Hablemos',
    },
    projects: {
      title: 'Mis Proyectos',
      items: [
        { projectName: 'Empresa Florida', projectDescription: 'Consultor en tiempo real de los horarios y recorridos de la Empresa, vía web o la app móvil.', projectImage: floridaIMG },
        { projectName: 'Punto Limpio', projectDescription: 'Plataforma municipal de gestión de residuos: mapa interactivo de puntos de recolección y horarios de camiones por calle.', projectImage: puntoLimpioIMG },
        { projectName: 'Seguridad Privada', projectDescription: 'Aplicación para el control de manejo de llaves de los consultorios.', projectImage: seguridadIMG },
      ],
    },
    skills: { title: 'Habilidades' },
  },
}

const STACK = {
  Frontend: [
    { name: 'React', icon: 'devicon-react-original colored' },
    { name: 'Astro', icon: 'devicon-astro-plain colored' },
    { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
    { name: 'HTML5', icon: 'devicon-html5-plain colored' },
    { name: 'CSS3', icon: 'devicon-css3-plain colored' },
    { name: 'Bootstrap', icon: 'devicon-bootstrap-plain colored' },
  ],
  Backend: [
    { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },
    { name: 'PHP', icon: 'devicon-php-plain colored' },
    { name: 'Java', icon: 'devicon-java-plain colored' },
    { name: 'C#', icon: 'devicon-csharp-plain colored' },
  ],
  Database: [
    { name: 'MySQL', icon: 'devicon-mysql-plain-wordmark colored' },
    { name: 'MongoDB', icon: 'devicon-mongodb-plain colored' },
  ],
  Tools: [
    { name: 'Git', icon: 'devicon-git-plain colored' },
    { name: 'GitHub', icon: 'devicon-github-original ' },
    { name: 'Capacitor', icon: 'devicon-capacitor-plain colored' },
  ],
}

const App = () => {
  const [lang, setLang] = useState('en') // único estado: 'en' | 'es'

  const toggleLang = () => {
    setLang((prevLang) => (prevLang === 'en' ? 'es' : 'en'))
  }

  const t = content[lang]

  return (
    <div>
      <Header
        navItems={t.nav}
        lang={lang}
        onToggleLang={toggleLang}
      />
      <HeroIntro careers={t.hero.careers} />
      <div className='introduction-container'>
        <About
          title={t.about.title}
          paragraphs={t.about.paragraphs}
          buttonText={t.about.button}
        />
        <Skills title={t.skills.title} stack={STACK} />
      </div>
      <Projects title={t.projects.title} items={t.projects.items} />
      <Footer />
    </div>
  )
}

export default App