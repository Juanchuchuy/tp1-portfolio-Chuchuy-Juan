import React, { useState } from 'react'
import './Projects.css'
import { ArrowDown } from 'lucide-react'

const Projects = ({ title, items }) => {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleProject = (index) => {
    setExpandedIndex((prev) => (prev === index ? null : index))
  }

  return (
    <>
      <div className='projects-container'>
        <h2 className='title'><ArrowDown color='#9ee3f0' size={65} />{title}</h2>
        {
          items.map((project, index) => {
            const isExpanded = expandedIndex === index
            return (
              <div className="project-card" key={index}>
                <div className='card-content'>
                  <img src={project.projectImage}></img>
                  <div className='project-card-content'>
                    <h2
                      className='project-title'
                      onClick={() => toggleProject(index)}
                    >
                      {project.projectName}
                    </h2>
                    <p className={`project-description ${isExpanded ? 'project-description--open' : ''}`}>
                      {project.projectDescription}
                    </p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default Projects