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
     scrollState >= 100 && scrollState <200 ? scrollValue = 'base_line_1' : scrollState >= 200 && scrollState <300 ? scrollValue = 'base_line_2' :scrollState >= 300 && scrollState <400?  scrollValue = 'base_line_3' :    scrollState >= 400 && scrollState <500? scrollValue = 'base_line_4' : scrollState >= 500 && scrollState <600? scrollValue = 'base_line_5' :scrollState >= 600 && scrollState<700 ? scrollValue = 'base_line_6': scrollState >= 700 && scrollState<800 ? scrollValue = 'base_line_7': scrollState >= 800 && scrollState<900 ? scrollValue = 'base_line_8': scrollValue = ''}
 
  return (
window.addEventListener('scroll',handleScroll),
 <div className='flex justify-center main-div '>
     <div className={`self-stretch bg-blue-800 w-o border-[1px] border-red-300  ${scrolled}  ${scrollValue}`}></div>
     {/* <h1 className='text-white  top-[500px] fixed'>{scrollState}</h1> */}
   
     
     </div>
    
   
 )
}

export default Timeline