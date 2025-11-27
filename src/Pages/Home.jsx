import React from 'react'
import Video from '../components/Home/Video';
import HomeHero from '../components/Home/HomeHero';
import HomeBottom from '../components/Home/HomeBottom';


const Home = () => {
  return (
    <div >
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className='h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between'>
        <HomeHero />
        <HomeBottom />
      </div>
    </div>
  )
}

export default Home
