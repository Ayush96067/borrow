import React from "react";
import localFont from "next/font/local";
import { Button } from "@/components/ui/button";
import { BackgroundLines } from "@/components/ui/background-lines";
import { CarouselDemo } from "@/components/Crousel";

function Home() {
  return (
    <main
      className={`font-serif flex items-center justify-center min-h-screen `}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 px-4">
        <div className="relative mb-7 md:mb-0 flex flex-col items-center">
          <BackgroundLines>
            <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-600 to-white text-4xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
              <span className="text-violet-400 dark:text-green-600">
                Welcome
              </span>
              <br /> to the{" "}
              <span className="text-purple-600 dark:text-white">World</span> of
              <span className="dark:text-orange-500 text-violet-900">
                {" "}
                Borrow.
              </span>
            </h2>
            <p className="max-w-xl  mx-auto text-sm  text-neutral-700 dark:text-neutral-400 text-center w-5/6 md:text-base md:w-2/3 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni,
              quo? Saepe eius soluta iste repudiandae expedita? Earum, quas
              totam? Possimus!
            </p>
          </BackgroundLines>
        </div>
        <div className="flex flex-col justify-center items-center">
          <CarouselDemo />
          <Button className="w-[30%] mt-2">Get Started</Button>
        </div>
      </div>
    </main>
  );
}

export default Home;
