import React from "react";
import "../App.css";

function HeroPage() {
  return (
    <>
      <div className="relative">
        <div className="container h-auto bg-lightblue flex items-center pt-30 pb-160 lg:pb-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full px-15 lg:px-0">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <p className="text-cta-blue text-lg md:text-base ">
                Smart Energy Consumption using AI.
              </p>
              <h1 className="mt-2 text-4xl md:text-7xl text-font-black font-semibold leading-tight">
                Optimize energy, <br /> Maximize{" "}
                <span className="bg-gradient-to-r from-[#04B1FB] to-[#555F9B] bg-clip-text text-transparent">
                  savings.
                </span>
              </h1>
              <p className="mt-6 text-base md:text-xl w-full md:w-3/4">
                Empower your energy decisions with AI! Our smart tool analyzes
                your electricity consumption, provides real-time insights, and
                helps you save money while reducing waste.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                <button className="bg-cta-blue py-3 px-8 rounded-3xl text-gray-100 text-base font-semibold cursor-pointer">
                  Get started
                </button>
                <button className="border-cta-blue border-2 py-3 px-8 rounded-3xl text-font-black text-base font-semibold cursor-pointer">
                  Learn more
                </button>
              </div>

              {/* Stats Section */}
              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:divide-x divide-gray-400">
                <div className="px-4">
                  <h2 className="text-2xl font-bold">98.25%</h2>
                  <p className="text-gray-500 text-lg">Bill Prediction Rate</p>
                </div>
                <div className="px-4">
                  <h2 className="text-2xl font-bold">97.94%</h2>
                  <p className="text-gray-500 text-lg">
                    Energy Consumption Prediction Rate
                  </p>
                </div>
                <div className="px-4">
                  <h2 className="text-2xl font-bold">4.8/5</h2>
                  <p className="text-gray-500 text-lg">User Satisfaction</p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="w-full h-[300px] md:h-[500px] bg-[url(./assets/hero-img.png)] bg-center bg-cover bg-no-repeat hidden md:block"></div>
          </div>
        </div>

        <div className="absolute top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/3 bg-white bg-opacity-80 backdrop-blur-lg shadow-xl rounded-xl p-6 sm:p-10 w-full max-w-5xl border border-white/30 z-10">
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-font-black mb-6">
            What do we offer
          </h2>

          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { title: "Calculate Consumption Bill", icon: "🧮" },
              { title: "Predict Energy Consumption Bill", icon: "🎯" },
              { title: "Save Energy Recommendation", icon: "🌿" },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="text-4xl">{item.icon}</div>
                <h3 className="mt-4 text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-500 mt-2 text-sm sm:text-base">
                  Short description about this feature.
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="w-full bg-[#C6EEFC] h-screen">
          <div className="about-content container md:pt-40">
            <p className="text-center pt-30 text-2xl">About Section</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default HeroPage;
