import React from 'react'
import timelineElements from './timelineElements'
import './timeline.css'
import { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Timeline() {
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
     scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8':scrollState >=900 && scrollState <1000 ? scrollValue = 'base_line_9': scrollValue = ''}
 
  return (
window.addEventListener('scroll',handleScroll),
 <div className='flex justify-center main-div '>
     <div className={`self-stretch bg-blue-800 w-o border-[1px] border-red-300  ${scrolled}  ${scrollValue}`}></div>
     {/* <h1 className='text-white  top-[500px] fixed'>{scrollState}</h1> */}
    <div className='parent'>
     <div  data-aos="zoom-out" className='div1 text-white   absolute left-[700px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquid, libero facilis excepturi consectetur corporis, laudantium soluta voluptates earum ipsum tenetur amet ipsam sint, molestias blanditiis quae vero sed et?</div>
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
    
     </div>
     </div>
   
 )
}

export default Timeline