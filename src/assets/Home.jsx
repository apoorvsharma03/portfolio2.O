import React, { useEffect, useState } from 'react';
import "./Home.css";

const Home = () => {
    const [isTouchDevice, setIsTouchDevice] = useState(false);

    useEffect(() => {
        const checkTouchDevice = () => {
          setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
        };
        checkTouchDevice();
        window.addEventListener("resize", checkTouchDevice);
        return () => {
          window.removeEventListener("resize", checkTouchDevice);
        };
    }, []);

  const [homeHeight, setHomeHeight] = useState('100vh');
  const letters = ['H', 'E', 'L', 'L', 'O', '!'];
  const [helloTransitionDone, setHelloTransitionDone] = useState(false);

  useEffect(() => {
    const navbarHeight = document.getElementById('NAVBAR').offsetHeight;
    setHomeHeight(`calc(100vh - ${navbarHeight}px)`);

    setTimeout(() => {
      setHelloTransitionDone(true);
    }, 2000);

  }, []);

  return (
    <div>
      <div style={{ height: homeHeight }} className="flex flex-col w-screen justify-center items-center h-screen gap-5 p-6">
        <div id="HELLO" className={`lg:text-9xl md:text-8xl text-7xl text-cyan-700 ${isTouchDevice && "text-cyan-400"} ${!isTouchDevice && "hover:text-cyan-400"} flex transition-transform duration-300 ease-in-out`}>
          {letters.map((item, index) => (
            <div
              className="w-fit opacity-0"
              style={{
                animation: "helloAnimation 0.4s ease-in forwards",
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div className={`${helloTransitionDone ? 'opacity-100' : 'opacity-0'} text-cyan-700 max-w-[60vw] md:text-2xl text-lg text-center transition-all duration-300 tracking-wide ${!isTouchDevice && "hover:text-cyan-400"}`}>
            I am Apoorv Sharma, a software engineer trying to enhance digital user experiences, one line of code at a time.
        </div>
      </div>
    </div>
  );
};

export default Home;
