"use client";
import React from "react";
import { GlowingEffect } from "./ui/GlowingEffect";

const About = () => {
  return (
    <main className="text-white ">
      <div className="text-black text-4xl font-bold text-center mt-20  bg-amber-50 py-10">
        About me
      </div>
      <section className="grid grid-cols-2 grid-rows-2 gap-10 w-full h-screen p-10">
          <div className="relative h-full border p-2 col-start-1 col-end-2 row-start-1 row-end-3 flex items-center justify-center rounded-4xl">
            
            
          </div>
          <div className="relative h-full border p-2 col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-center rounded-4xl">
            
          </div>
          <div className="relative h-full border p-2 col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-center rounded-4xl">
           
          </div>
            

        {/* <div className=" w-auto bg-amber-100 col-start-2 col-end-3 row-start-1 row-end-2 flex items-center justify-center rounded-4xl"></div> */}
        {/* <div className=" w-auto  bg-amber-100 col-start-2 col-end-3 row-start-2 row-end-3 flex items-center justify-center rounded-4xl"></div> */}
      </section>
    </main>
  );
};

export default About;
