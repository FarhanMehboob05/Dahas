import React from "react";

export default function CategoriesSection({
  categoryMen,
  categoryMenEastern,
  categoryWomenFusion,
  categoryWomenEastern,
  categoryMenImg,
  categoryMenEasternImg,
  categoryWomenFusionImg,
  categoryWomenEasternImg,
}) {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <div className="relative w-full h-auto md:h-[65vh] rounded-lg overflow-hidden shadow-lg">
        <img
          src={categoryMenImg}
          alt="Categories Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
            {categoryMen}
          </h3>
        </div>
      </div>

      <div className="relative w-full h-auto md:h-[65vh] rounded-lg overflow-hidden shadow-lg">
        <img
          src={categoryMenEasternImg}
          alt="Categories Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
            {categoryMenEastern}
          </h3>
        </div>
      </div>

      <div className="relative w-full h-auto md:h-[65vh] rounded-lg overflow-hidden shadow-lg">
        <img
          src={categoryWomenFusionImg}
          alt="Categories Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
            {categoryWomenEastern}
          </h3>
        </div>
      </div>

      <div className="relative w-full h-auto md:h-[65vh] rounded-lg overflow-hidden shadow-lg">
        <img
          src={categoryWomenEasternImg}
          alt="Categories Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-bold text-white text-center p-4">
            {categoryWomenFusion}
          </h3>
        </div>
      </div>
    </section>
  );
}
