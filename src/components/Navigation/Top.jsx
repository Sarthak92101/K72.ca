import React, { useContext, useRef } from 'react'
import { NavbarContext } from "../../context/NavContext";



const Top = () => {
  const stairGreenRef = useRef(null)
  const [navOpen, setNavOpen] = useContext(NavbarContext)

  return (
    <div className='z-4 flex fixed w-full top-0 items-start justify-between'>
      
      {/* Logo */}
      <div className='p-4'>
        <div className='lg:w-36  w-20'>
          <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="103" height="40" viewBox="0 0 103 44">
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M35.1441047,8.4486911 L58.6905011,8.4486911 ..."
            />
          </svg>
        </div>
      </div>

      {/* Menu Button */}
      <div
        onClick={() => setNavOpen(true)}
        onMouseEnter={() => {
          stairGreenRef.current.style.height = '100%'
        }}
        onMouseLeave={() => {
          stairGreenRef.current.style.height = '0%'
        }}
        className='lg:h-10  bg-black relative lg:1 lg:w-[17vw] overflow-hidden'
      >

        {/* Animated Green Bar */}
        <div
          ref={stairGreenRef}
          className='bg-[#D3FD50] transition-all duration-300 ease-out absolute top-0 h-0 w-full'
        ></div>

        {/* Hamburger Lines */}
        <div className='relative h-full px-8 flex flex-col gap-2 justify-center items-end'>
          <div className="w-20 h-0.5 bg-white"></div>
          <div className="w-[15px] h-0.5 bg-white"></div>
        </div>

      </div>
    </div>
  )
}

export default Top
