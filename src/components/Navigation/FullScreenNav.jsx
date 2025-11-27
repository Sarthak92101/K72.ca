import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import Navbar from './Top'
import { NavbarContext } from '../../context/navContext'
 

const FullScreenNav = () => {


  const fullNavLinkRef = useRef(null)
  const fullscreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavbarContext)
  console.log(navOpen);


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }
    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
       
    }


    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])
  return (
    <div ref={fullscreenRef} id='fullscreennav' className='fullscreennav hidden h-screen z-50 w-full absolute '>
      <div className='h-screen w-full fixed '>
        <div className='h-screen w-full flex'>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
          <div className='stairing h-full w-1/5 bg-black '></div>
          <div className='stairing h-full w-1/5 bg-black'></div>
        </div>
      </div>

      <div ref={fullNavLinkRef} className='relative'>
        <div className='navlink  flex w-full items-start p-5 justify-between'>
          <div className='p-5 '>
            <div className='w-36'>
              <svg className='w-full' xmlns="http://www.w3.org/2000/svg" width="103" height="40" viewBox="0 0 103 44">
                <path fill="#fff" fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
              </svg>
            </div>
          </div>
          <div onClick={() => setNavOpen(false)}   className='h-32 w-32  mt-0 relative cursor-pointer'>
            <div className='h-40 w-1 -rotate-50 origin-top absolute  bg-[#D3FD50]'></div>
            <div className='h-40 w-1 right-0 rotate-50 origin-top absolute bg-[#D3FD50]'></div>


          </div>
        </div>
        <div className='py-25'>
          <div className='link  origin-top relative border-t '>
            <h1 className='font-[font2] text-center text-[8vw] leading-[0.8] pt-10  uppercase'>
              Projects
            </h1>

            <div className=' moveLink absolute bg-[#D3FD50] text-black flex top-0'>

              {/* ROW 1 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

              {/* ROW 2 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

            </div>
          </div>
          <div className='link origin-top relative border-t'>
            <h1 className='font-[font2]  text-center text-[8vw] leading-[0.8] pt-10 uppercase'>
              Agence
            </h1>

            <div className=' moveLink absolute bg-[#D3FD50] text-black flex top-0'>

              {/* ROW 1 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

              {/* ROW 2 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

            </div>
          </div>
          <div className='link origin-top relative border-t'>
            <h1 className='font-[font2] text-center text-[8vw] leading-[0.8] pt-10 uppercase'>
              Contact
            </h1>

            <div className=' moveLink absolute bg-[#D3FD50] text-black flex top-0'>

              {/* ROW 1 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

              {/* ROW 2 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

            </div>
          </div>
          <div className='link origin-top relative border-t border-y'>
            <h1 className='font-[font2] text-center text-[8vw] leading-[0.8] pt-10 uppercase'>
              BLOUGE
            </h1>

            <div className=' moveLink absolute bg-[#D3FD50] text-black flex top-0'>

              {/* ROW 1 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

              {/* ROW 2 */}
              <div className='moveX flex items-center'>
                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b"
                  alt=""
                />

                <h2 className='font-[font2] whitespace-nowrap text-[8vw] leading-[0.8] pt-10 uppercase'>
                  Pour tout voir
                </h2>

                <img
                  className='h-32 mt-2 rounded-full shrink-0 w-80 object-cover'
                  src="https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
                  alt=""
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
