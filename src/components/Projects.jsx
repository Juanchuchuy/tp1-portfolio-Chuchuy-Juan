import React from 'react'
import './Projects.css'
import floridaIMG from '../assets/projects-img/empresaFlorida.png'
import seguridadIMG from '../assets/projects-img/seguridad.png'
import puntoLimpioIMG from '../assets/projects-img/puntoLimpio.webp'
import {ArrowDown} from 'lucide-react'


const projects = [{projectName : 'Empresa Florida',projectDescription : 'Consultor en tiempo real de los horarios y recorridos de la Empresa web o la app movile.',projectImage : floridaIMG},{projectName : 'Punto Limpio',projectDescription : 'Plataforma municipal de gestión de residuos: mapa interactivo de puntos de recolección y horarios de camiones por calle.',projectImage : puntoLimpioIMG},{projectName : 'Seguridad Privada',projectDescription : 'Aplicacion para el control de manejo de llaves de los consultorios',projectImage : seguridadIMG},]


// import
const Projects = () => {




  return (
    <>
     
      <div className='projects-container' >
              <h2 className='title'><ArrowDown color='#9ee3f0' size={65}/>My Projects</h2>  
              {
                projects.map((projects, index) =>{
                  return(
                  <div className="project-card" key={index} >
                    <div className='card-content'>
                      <img src={projects.projectImage}></img>
                      <div className='project-card-content'>
                        <h2 className='project-title'>{projects.projectName}</h2>
                        
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