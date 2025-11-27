import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='font-[font2] flex justify-center items-center gap-2 mt-10'>


      <div className='border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] px-10 lg:h-32 flex item-center border-white rounded-full uppercase'>
        <Link className='text-[5vw] pt-3' to='/projects'>Projects</Link>
      </div>

      <div className='uppercase hover:border-[#D3FD50] hover:text-[#D3FD50] px-10 lg: h-32 border-2 flex item-center border-white rounded-full'>
        <Link className='text-[5vw] pt-3' to='/agence'>Agence</Link>
      </div>

    </div>
  )
}

export default HomeBottom
