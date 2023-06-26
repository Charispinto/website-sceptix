import React, { useEffect, useRef, useState } from "react";
import { useSpring, config } from "react-spring";
import Sidebar from "../sidenav/sidebar";
import img1 from "/public/New_Project__3_-removebg.png";
import img2 from "/public/L1-removebg-preview.png";



const Landing = () => {
  const leftRef = useRef(null);
  const [animate, setAnimate] = useState(false);
  const [x, setX] = useState(100);

  const [tweenWipe, setTweenWipe] = useSpring(() => ({
    from: { value: 100 },
    config: config.cubicOut,
  }));

  useEffect(() => {
    setTimeout(() => {
      setTweenWipe({ value: 85 });
      setAnimate(true);
    }, 1000);
  }, [setTweenWipe]);

  const handleOnMove = (e) => {
    const newX = (e.clientX / window.innerWidth) * 100;
    setX(newX);
    if (animate) {
      leftRef.current.style.width = `${newX}%`;
    }
  };

  return (
    <main
      className="h-screen overflow-hidden relative"
      onPointerMove={handleOnMove}
    >
    {/* <div
        className="h-screen w-full overflow-hidden absolute z-20 bg-cyan-100 text-stone-950"
        id="left-box"
        ref={leftRef}
        style={{ width: tweenWipe.value.interpolate((val) => `${val}%`) }}
      >
        <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-10">
          <img src={img1} alt="" />
        </div>
        
      </div> */}

      <div
        className="h-screen w-full overflow-hidden absolute z-10 bg-[#00070e] text-stone-50"
        id="right-box"
      >
        <div className="w-full h-screen flex flex-col items-center justify-center absolute z-10">
        <div className="w-screen h-screen flex flex-col items-center justify-center absolute z-10">
          <img src={img2} alt="" />
        </div>
        </div>
        <div id="right-img" className="w-screen h-screen absolute z-0"></div>
        <Sidebar />
      </div>
    </main>
  );
};

export default Landing;
