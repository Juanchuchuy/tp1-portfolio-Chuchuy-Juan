import '../components/Skills.css';
import {ArrowDown} from 'lucide-react'

const STACK = {
  Frontend: [
    { name: "React",      icon: "devicon-react-original colored" },
    { name: "Astro",      icon: "devicon-astro-plain colored" },
    { name: "JavaScript", icon: "devicon-javascript-plain colored" },
    { name: "HTML5",      icon: "devicon-html5-plain colored" },
    { name: "CSS3",       icon: "devicon-css3-plain colored" },
    { name: "Bootstrap",  icon: "devicon-bootstrap-plain colored" },
  ],
  Backend: [
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "PHP",     icon: "devicon-php-plain colored" },
    { name: "Java",    icon: "devicon-java-plain colored" },
    { name: "C#",      icon: "devicon-csharp-plain colored" },
  ],
  Database: [
    { name: "MySQL",   icon: "devicon-mysql-plain-wordmark colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  ],
  Tools: [
    { name: "Git",       icon: "devicon-git-plain colored" },
    { name: "GitHub",    icon: "devicon-github-original " },
    { name: "Capacitor", icon: "devicon-capacitor-plain colored" },
  ],
};

// Categorías que NO deben animarse
const STATIC_CATEGORIES = ["Database"];

export default function Skills() {
  return (
    <div className='skills'>
      <h2><ArrowDown color='#9ee3f0' size={65}/>Skills</h2>
      <div className="skills-container">
        
        {Object.entries(STACK).map(([category, items]) => {
          const isStatic = STATIC_CATEGORIES.includes(category);

          return (
            <div key={category} className="skill-card">
              <h3 className="skill-card-title">{category}</h3>

              {isStatic ? (
                <div className="skills-static">
                  {items.map((lang) => (
                    <div key={lang.name} className="skill">
                      <i className={lang.icon}></i>
                      <span>{lang.name}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="skills-carrousel">
                  <div className="skills-track">
                    {[...items, ...items, ...items].map((lang, i) => (
                      <div key={i} className="skill">
                        <i className={lang.icon}></i>
                        <span>{lang.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}