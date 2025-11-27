import React from 'react'

const ProjectCard = () => {
  return (
    <div>
      <div className='w-full h-[400px] mb-4 gap-4  flex '>
           {/* card1 */}
          <div className='w-1/2 transition-all group h-full relative hover:rounded-[50px] overflow-hidden'>
            <img className='object-cover h-full w-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
              <h2 className='uppercase text-2xl font-[font1] border-2 pt-2 px-4 text-white border-white rounded-full'>Vior le projets</h2>
            </div>
          </div>
          {/* card2 */}
          <div className='w-1/2 transition-all group h-full relative hover:rounded-[50px] overflow-hidden'>
            <img className='object-cover h-full w-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b" alt="" />
            <div className='opacity-0 group-hover:opacity-100 transition-all absolute top-0 left-0 flex items-center justify-center h-full w-full bg-black/10'>
              <h2 className='uppercase text-2xl font-[font1] border-2 pt-2 px-4 text-white border-white rounded-full'>Vior le projets</h2>
            </div>
          </div>

        </div>
    </div>
  )
}

export default ProjectCard
