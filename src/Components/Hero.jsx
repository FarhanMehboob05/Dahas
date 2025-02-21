import React from "react";
// import bgImage from ".";
// import bgImage from "./ ecommerc.jpg"
export default function Hero() {
  return (
    <section
      className="relative h-[100vh]  backgroundimgset flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url()`,
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">70% Off</h1>
        <p className="text-xl mb-6">On All Products This Week Only!</p>
        <button className="bg-secondary text-primary px-8 py-3 rounded-lg text-lg font-bold hover:bg-opacity-90 transition-all">
          Shop Now
        </button>
      </div>
    </section>
  );
}
