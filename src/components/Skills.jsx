import '../components/Skills.css'
const LANGS = [
  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
  { name: "PHP", icon: "devicon-php-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "HTML5", icon: "devicon-html5-plain colored" },
  { name: "CSS3", icon: "devicon-css3-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Astro", icon: "devicon-astro-plain colored"},
  { name: "Mysql", icon: "devicon-mysql-plain-wordmark colored"},
  { name: "Capacitor", icon: "devicon-capacitor-plain colored"},
  { name: "Git", icon: "devicon-git-plain colored"},
  { name: "GitHub", icon: "devicon-github-original"},
  { name: "Bootstrap", icon: "devicon-bootstrap-plain colored"},
];

export default function Skills() {
  return (
    <div className="skills-container">
      <div className="skills-carrousel">
        {[...LANGS, ...LANGS].map((lang, i) => (
          <div key={i} className="skill">
            <i className={lang.icon}></i>
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}