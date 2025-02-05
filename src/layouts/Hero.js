
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function App() {

  const cloudAttributes = [
    { img: './clouds1.png', style: 'w-[40vw] h-[30vh] bottom-[-5%] left-[-5%] z-[6]' },
    { img: './clouds2.png', style: 'w-[50vw] h-[40vh] top-[20%] right-[-10%]' },
    { img: './clouds3.png', style: 'w-[40vw] h-[40vh] top-[-5%] left-[-5%] z-[6]' }
  ]

  const div = useRef(null);
  const divChild = useRef(null);
  const text = useRef(null);
  const sunText = useRef(null);
  const clouds = useRef([]);


  useEffect(() => {
    gsap.from(divChild.current, {
      y: '-100vh',
      borderRadius: '100%',
      width: '60px',
      height: '60px'
    });
    gsap.to(divChild.current, {
      y: '60vh',
      delay: 2,
      onComplete: () => {
        gsap.to(divChild.current, {
          borderRadius: '100',
          duration: .2,
          width: '100vw',
          height: '150vh'
        });
        gsap.to(text.current, {
          y: '-30vh',
          duration: .2
        });
        gsap.to(clouds.current, {
          duration: 2,
          opacity: 100
        });
        gsap.to(sunText.current, {
          delay: .4,
          scale: 1,
          duration: .1,
          transformOrigin: 'center center'
        })
      }
    })
  }, [])

  return (
    <div className='bg-[#343434] h-screen '>



      <div ref={div} className={`bg-[#93b7b8] overflow-hidden h-full flex justify-center items-center transition-[2s] relative`}>
        <div ref={divChild} className='h-[50%] w-[30%] bg-[#ffe627] absolute z-[5] sun p-8 flex justify-center items-center'>
          <div ref={sunText} className='text-[blue] w-full h-full flex flex-col justify-start items-center p-4 scale-0'>
          <h3 className='py-4 font-semibold max-w-[300px] text-center'>We do whats best for you and your company so let us. ai'ight nigga!</h3>
          <h1 className='text-[48px] font-bold pt-4 pb-8'>COMPANY NAME</h1>
          <button className='px-4 py-2 bg-[blue] rounded-xl w-fit text-[#ffe627]'>Explore more</button>
        </div>
        </div>

        {
          cloudAttributes.map((cloud, i)=>(
            <img ref={(e)=> clouds.current[i] = e} src={cloud.img} alt='' className={`absolute opacity-0 ${cloud.style}`} />
          ))
        }

        <h1 ref={text} className='text-[20vw] font-bold text-[blue] translate-y-[30vh]'>SUNRISE</h1>
      </div>



    </div>
  )
};

export default App;

