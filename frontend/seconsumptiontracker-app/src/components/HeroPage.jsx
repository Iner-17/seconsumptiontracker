import React from "react";
import "../App.css";

function HeroPage() {
  return (
    <>
      <div className="container h-[92vh] bg-lightblue">
        <div className="flex h-auto pt-[12vh]">
          <div className="w-full">
            <p className="text-cta-blue text-xl">
              Smart Energy Consumption using AI.
            </p>
            <h1 className="mt-2 ml-[-5px] text-[4.5em] text-font-black font-semibold leading-[75px]">
              Optimize energy, <br /> Maximize{" "}
              <span className="bg-gradient-to-r from-[#04B1FB] to-[#555F9B] bg-clip-text text-transparent">
                savings.
              </span>
            </h1>
            <p className="mt-10 text-[1.2em] w-2/3">
              Empower your energy decisions with AI! Our smart tool analyzes
              your electricity consumption, provides real-time insights, and
              helps you save money while reducing waste.
            </p>

            <div className="mt-10 flex gap-10">
              <button className="bg-cta-blue py-3 px-10 rounded-3xl text-gray-100 text-base font-semibold cursor-pointer">
                Get started
              </button>
              <button className="border-cta-blue border-3 py-3 px-10 rounded-3xl text-font-black text-base font-semibold cursor-pointer">
                Learn more
              </button>
            </div>

            <div className="mt-20 flex text-center divide-gray-400 > * divide-x-2 > * text-2xl">
              <div className="pr-5 py-5">
                <h2 className="text-2xl font-bold">98.25%</h2>
                <p className="text-gray-500 text-lg">Bill Prediction Rate</p>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-bold">97.94%</h2>
                <p className="text-gray-500 text-lg">Energy Consumption</p>
              </div>
              <div className="p-5">
                <h2 className="text-2xl font-bold">4.8/5</h2>
                <p className="text-gray-500 text-lg">User Satisfaction</p>
              </div>
            </div>
          </div>
          <div className="bg-[url(./assets/hero-img.png)] bg-center bg-cover bg-no-repeat w-2/3"></div>
        </div>
      </div>
    </>
  );
}

export default HeroPage;
