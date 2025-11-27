import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'

const Projects = () => {
  return (
    <div className='p-4'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>Projets</h2>
      </div>
      <div className='-mt-10 '>
        <ProjectCard/>
      </div>
    </div>
  )
}

export default Projects
