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
    scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8':scrollState >=900 && scrollState <1000 ? scrollValue = 'base_line_9': scrollState >=1000 && scrollState <1200 ? scrollValue = 'base_line_10':scrollState >=1200 && scrollState <1300 ?scrollValue = 'base_line_11':scrollState >=1300 && scrollState <1400 ? scrollValue = 'base_line_12':scrollState >=1400 && scrollState <1500 ? scrollValue = 'base_line_13':scrollValue = 'base_line_11'}

    window.addEventListener('scroll',handleScroll)

    return (
    <>
            {/* <div className={`content-center bg-blue-800 border-[1px] border-red-200 first_line`}></div> */}
                <div className={`xl:content-center bg-blue-800 border-[1px] border-red-300  ${scrolled} ${scrollValue}`}></div>
    </>

    );
   
}

function Timeline() {
  return (
    <>     {/* <h1 className='text-white  top-[500px] fixed'>{scrollState}</h1> */}
           
    <div className='bg-black mt-0  xl:h-full lg:h-full md:h-full sm:h-full'>

    
        <h1 className=" text-center mt-0 py-16 text-6xl font-bold mb-8 m-auto bg-gradient-to-r from-sky-500 to-blue-400 bg-clip-text text-transparent">
          History of FOSS
        </h1>
      


    {timelineElements.map((elements,index) =>{
            if(elements.id %2 != 0){
            return (
            <>
                <div className='flex xl:justify-start lg:justify-center sm: justify-center'>
                    <div className='w-2/5 xl:mt-10 ml-24 lg:mt-10 '>
                    <h2 className='text-white  text-3xl font-bold' key={index}>{elements.title}</h2><br></br>
                        <p className='text-white text-justify' key={index}>{elements.description}</p>
                    </div>
                </div> 
            </>
            );
        }       
        else {
            return(
             <>   
                <div className='flex xl:justify-end lg:justify-center sm: justify-center'>
                        <div className='w-2/5 xl:mt-10 mr-24 lg:mt-10 ml-48 '>
                        <h2 className='text-white  text-3xl font-bold' key={index}>{elements.title}</h2><br></br>
                            <p className='text-white text-justify' key={index}>{elements.description}</p>
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