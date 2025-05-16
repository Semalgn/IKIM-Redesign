import { words } from "../constants";
import Button from "../components/Button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.5, duration: 1.5, ease: "power2.inOut" }
    );
  });
  return (
    <section id="hero" className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex items-center justify-center w-screen px-5 md:px-20 md:w-full">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                IKIM TURN
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))} 
                  </span>
                </span>
              </h1>
              <h1>Reality</h1>
              <h1>through creative service</h1>
            </div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              IKIM Tech Co. is Private Tech Company Works in  
              Ethiopia.
            </p>

            <Button
              text="Check Our Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
          </div>
        </header>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
