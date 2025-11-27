import React from 'react'

const ProjectCard = (props) => {
  return (
   <>
  
           {/* card1 */}
          <div className='w-1/2 transition-all group h-full relative hover:rounded-[50px] overflow-hidden'>
            <img className='object-cover h-full w-full' src={props.image1} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
              <h2 className='uppercase text-2xl font-[font1] border-2 pt-2 px-4 text-white border-white rounded-full'>Vior le projets</h2>
            </div>
          </div>
          {/* card2 */}
          <div className='w-1/2 transition-all group h-full relative hover:rounded-[50px] overflow-hidden'>
            <img className='object-cover h-full w-full' src={props.image2} alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
              <h2 className='uppercase text-2xl font-[font1] border-2 pt-2 px-4 text-white border-white rounded-full'>Vior le projets</h2>
            </div>
          </div>    

   </>
  )
}

export default ProjectCard
