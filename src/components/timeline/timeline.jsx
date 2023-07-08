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
    scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8':scrollState >=900 && scrollState <1000 ? scrollValue = 'base_line_9': scrollState >=1000 && scrollState <1200 ? scrollValue = 'base_line_10':scrollState >=1200 && scrollState <1300 ?scrollValue = 'base_line_11':scrollState >=1300 && scrollState <1400 ? scrollValue = 'base_line_12':scrollState >=1400 && scrollState <1500 ? scrollValue = 'base_line_13':scrollValue = ''}

    window.addEventListener('scroll',handleScroll)

    return (
    <>
            {/* <div className={`content-center bg-blue-800 border-[1px] border-red-200 first_line`}></div> */}
                <div className={`content-center bg-blue-800 border-[1px] border-red-300 ${scrolled} ${scrollValue}`}></div>
    </>

    );
   
}

function Timeline() {
    
 
  return (
  

    <>     {/* <h1 className='text-white  top-[500px] fixed'>{scrollState}</h1> */}
      
        
    {/* <div className='parent bg-black'> */}
    {/* firt div */}
    <div className='h-full bg-black mt-0'>
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

    
        <h1 className=" text-center mt-0 py-16 text-6xl font-bold mb-8 m-auto bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
          Timeline of FOSS
        </h1>
      


    {timelineElements.map((elements,index) =>{
            if(elements.id %2 != 0)
        {
            return (
            <>
                <div className='flex justify-start'>
                   
                    <div className='w-2/5 mt-10 ml-24'>
                    <h2 className='text-white  text-3xl font-bold'>{elements.title}</h2><br></br>
                        <p className='text-white text-justify'>{elements.description}</p>
                    </div>
                </div> 
            </>
            );
        }       
        else {
            return(
             <>   
                <div className='flex justify-end'>
                        <div className='w-2/5 mt-10 mr-24'>
                        <h2 className='text-white  text-3xl font-bold'>{elements.title}</h2><br></br>
                            <p className='text-white text-justify'>{elements.description}</p>
                        </div>
                </div> 
             </>

            );
        }
        })}




        
       
       

    <Line/>
    

    </div>
    </>

 )
}

export default Timeline