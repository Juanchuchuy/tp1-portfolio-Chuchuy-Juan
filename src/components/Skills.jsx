import '../components/Skills.css';
import { ArrowDown } from 'lucide-react'

const STATIC_CATEGORIES = ["Database"];

export default function Skills({ title, stack }) {
  return (
    <div className='skills' id='skills'>
      <h2><ArrowDown color='#9ee3f0' size={65} />{title}</h2>
      <div className="skills-container">
        {Object.entries(stack).map(([category, items]) => {
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