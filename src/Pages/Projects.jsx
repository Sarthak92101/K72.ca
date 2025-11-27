import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {

const projects=[
  {
    image1:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
    image2:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479'
  },
   {
    image1:'https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996',
    image2:'https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022'
  },
   {
    image1:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b',
    image2:'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c'
  }
]

gsap.registerPlugin(ScrollTrigger)

useGSAP(function () {
  gsap.from('.hero',{
    height: '100px',
    stagger: {
      amount: 0.4,

    },
    scrollTrigger: {
      trigger: '.lol',
      start: 'top 100%',
      end: 'top -150%',
      scrub: true
    }
  })
})
  return (
    <div className='p-4'>
      <div className=' pt-[45vh]'>
        <h2 className='font-[font2] text-[10vw] uppercase'>Projets</h2>
      </div>
      <div className='-mt-10 lol '>
         {projects.map(function (elem,idx){
          return <div key={idx} className=' hero w-full h-[500px] mb-4 gap-4  flex '>
           <ProjectCard image1={elem.image1} image2={elem.image2} />
          </div>
         })}
      </div>
    </div>
  )
}
 
export default Projects
