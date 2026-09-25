
# Portfolio React — Juan Ignacio Chuchuy Linares

Portfolio personal desarrollado con **React + Vite** como Trabajo Práctico N°1 de la cátedra en UTN - Facultad Regional Tucumán.

## Descripción

Sitio de una sola página (single page) con secciones de presentación, sobre mí, habilidades, proyectos y contacto, dividido en componentes reutilizables de React. Incluye un switch para cambiar el idioma del contenido entre inglés y español, y tarjetas de proyectos con descripción expandible al hacer click.

## Tecnologías utilizadas

- React 19
- Vite
- JavaScript (JSX)
- CSS3 (sin frameworks de estilos)
- [lucide-react](https://lucide.dev/) — íconos
- [typify-react](https://www.npmjs.com/package/typify-react) — efecto de máquina de escribir
- [Devicon](https://devicon.dev/) — íconos de tecnologías

## Instalación

Clonar el repositorio e instalar las dependencias:

```bash
git clone https://github.com/Juanchuchuy/tp1-portfolio-Chuchuy-Juan.git
cd tp1-portfolio-Chuchuy-Juan
npm install
```

## Ejecución en local

```bash
npm run dev
```

Esto levanta el servidor de desarrollo de Vite (por defecto en `http://localhost:5173`).

Otros scripts disponibles:

```bash
npm run build    # genera la build de producción
npm run preview  # sirve la build de producción localmente
```

## Estructura de componentes



App

├── Header      (navegación + switch de idioma)

├── HeroIntro   (presentación / hero)

├── About       (sobre mí)

├── Skills      (habilidades y tecnologías)

├── Projects    (proyectos, con descripción expandible)

└── Footer      (contacto, redes y secciones)


## Repositorio

[https://github.com/Juanchuchuy/tp1-portfolio-Chuchuy-Juan](https://github.com/Juanchuchuy/tp1-portfolio-Chuchuy-Juan)

## Autor

Juan Ignacio Chuchuy Linares — [github.com/Chuchuy-code](https://github.com/Chuchuy-code)
