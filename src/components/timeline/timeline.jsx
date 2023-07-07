import React from 'react'
import timelineElements from './timelineElements'
import './timeline.css'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Line(){
    const [scrollState , setScrollState ] = useState(0)
    let scrollValue = ''
    let scrolled = 'scrolled'
    let scroll =0;
    const handleScroll = ()=>{
        setScrollState(window.scrollY)
    }
    // if(scrollState >500){
    //      scrollValue = 'scroll'
    // }
    // else{
    //      scrollValue = ''
    // }
    {
    scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8':scrollState >=900 && scrollState <1000 ? scrollValue = 'base_line_9': scrollState >=1000 && scrollState <1200 ? scrollValue = 'base_line_10':scrollValue = ''}

    window.addEventListener('scroll',handleScroll)

    return (
        <>
    

        
    <div className={`content-center bg-blue-800 border-[1px] border-red-200 first_line`}></div>
        <div className={`content-center bg-blue-800 border-[1px] border-red-300 ${scrolled} ${scrollValue}`}></div>
        
     
        </>

    );
   
}

function Timeline() {
    
 
  return (
  

    <>     {/* <h1 className='text-white  top-[500px] fixed'>{scrollState}</h1> */}
      
        
    {/* <div className='parent bg-black'> */}
    {/* firt div */}
    <div className='h-full bg-black'>
       {/* <div className='flex justify-start'>
        <div className='w-2/5 mt-10 ml-24'>
            <p className='text-white text-justify'>The FOSS Movement emerged from Richard Stallman's GNU Project in the late 1970s. With a vision of a Unix-like system built entirely from free software, Stallman laid the foundation for the influential Free Software Foundation (FSF). This ignited the thriving FOSS movement, driving innovation and collaboration.</p>
        </div>
       </div> */}
    {/* second div */}
       {/* <div className='flex justify-end'>
        <div className='w-2/5 mt-10 mr-24'>
            <p className='text-white text-justify'>In 1991, Linus Torvalds unleashed Linux, the free and game-changing kernel. Combined with GNU software, it became the heart of the vibrant FOSS ecosystem, revolutionizing technology.</p>
        </div>
       </div> */}
       {/* third div */}
       {/* <div className='flex justify-start'>
        <div className='w-2/5 mt-10 ml-24'>
            <p className='text-white text-justify'>In 1998, the Open Source Initiative (OSI) sparked a revolution. With the release of the Open Source Definition, a new era of authenticity was born."Open source" surged forward, reshaping technology and innovation forever. The years 1998 and beyond marked an unstoppable force that redefined the industry.</p>
        </div>
       </div> */}

        {/* fourth div */}
        {/* <div className='flex justify-end'>
        <div className='w-2/5 mt-10 mr-24'>
            <p className='text-white text-justify'> A noble revolution! Unleashing free, superior educational tools, it empowers educators and students alike. Collaboration soars, customization triumphs, and digital literacy skills thrive. Institutions embrace this mighty mission, slashing costs while igniting fearless critical thinking. Students emerge as visionary heroes, shaping a limitless future of learning.</p>
        </div>
       </div> */}

         {/* fifth div */}
         {/* <div className='flex justify-start'>
        <div className='w-2/5 mt-10 ml-24'>
            <p className='text-white text-justify'>A resounding victory! It has firmly embedded itself in the digital landscape. Linux, Apache, MySQL, Python, and more have triumphed, embraced worldwide. The FOSS movement birthed Creative Commons licenses, unleashing a revolution of sharing and openness. Now, FOSS reigns as the champion of innovation, empowerment, and global collaboration. Its victory echoes, transforming our technological journey forever.</p>
        </div>
       </div> */}

         {/* sixth div */}
         {/* <div className='flex justify-end'>
        <div className='w-2/5 mt-10 mr-24'>
            <p className='text-white text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta laudantium voluptatibus nesciunt, nisi commodi ea, consequatur aliquam, cumque sapiente enim alias necessitatibus facilis. Iure sit repellendus, sint repellat a deleniti.</p>
        </div>
       </div> */}


        {timelineElements.map((elements,index) =>{
            return (
                <>
                <div className='flex justify-start'>
                    <div className='w-2/5 mt-10 ml-24'>
                        <p className='text-white text-justify'>{elements.description}</p>
                    </div>
                </div> 

                <div className='flex justify-end'>
                        <div className='w-2/5 mt-10 mr-24'>
                            <p className='text-white text-justify'>{elements.description}</p>
                        </div>
                </div> 




                </>
            );

        })}




        
       
       

    <Line/>
    

    </div>
    
   
   
     {/* <div  data-aos="zoom-out" className='div1 text-white   absolute left-[700px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div2 text-white   absolute right-[700px] top-12'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div3 text-white   absolute left-[700px] top-36'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div4 text-white   absolute right-[700px] top-48'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div5 text-white   absolute left-[700px] top-80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div6 text-white   absolute right-[700px] top-[350px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div7 text-white   absolute left-[700px] top-[500px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div8 text-white   absolute right-[700px] top-[550px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div9 text-white   absolute left-[700px] top-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div10 text-white   absolute right-[700px] top-[750px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div11 text-white   absolute left-[700px] top-[850px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
     <div  data-aos="zoom-out" className='div12 text-white   absolute right-[700px] top-[900px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
    
    </div> */}
    </>

 )
}

export default Timeline