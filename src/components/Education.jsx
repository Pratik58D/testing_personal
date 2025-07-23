import React from "react";

const Education = () => {
  return (
    <section className="py-14 px-4 ">
      <h2 className="text-5xl font-bold text-center text-white my-20 transition-transform duration-500 transform hover:scale-105">
        Educ<span className="text-red-500">ation</span></h2>
      <div className="max-w-screen-lg
       mx-auto flex flex-wrap relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-500 h-full"></div>
        
        <div className=" w-full md:w-1/2 pl-8 pr-10 text-right relative mb-12">
          <div className=" bg-blue-600 h-6 w-6 rounded-full absolute left-full  transform -translate-x-1/2 "></div>
          <div className=" text-white text-xl font-bold mb-4 mt-10">2017-2019</div>
          <div className=" bg-gray-800 border-4 border-blue-600 p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-2xl font-medium mb-4">High School</h3>
            <p className="text-gray-400 text-lg">Studied in South Asian Scholars Academy with B+.</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 pl-10 pr-8 mt-48 text-left relative ">
          <div className=" text-white text-xl font-bold mb-4">2019 till now</div>
          <div className=" bg-gray-800 border-4 border-blue-600 p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-2xl font-medium mb-4">University</h3>
            <p className="text-gray-400 text-lg">Studied in Mid West University with a grade of 3.5.</p>
          </div>
        </div>
        
        <div className="w-full md:w-1/2 pl-8 pr-10 text-right relative mb-12">
          <div className=" text-white text-xl font-bold mb-4">2024 Febraury</div>
          <div className=" bg-gray-800 border-4 border-blue-600 p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-2xl font-medium mb-4">Bootcamp</h3>
            <p className="text-gray-400 text-lg">On Data Science and AI from Presidential for 15days.</p>
          </div>
        </div>
        
        <div className=" w-full md:w-1/2 pl-10 pr-8 text-left relative mb-12 mt-48">
          <div className=" text-white text-xl font-bold mb-4">2024 June-September</div>
          <div className=" bg-gray-800 border-4 border-blue-600 p-8 rounded-3xl shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300">
            <h3 className="text-white text-2xl font-medium mb-4">Internship</h3>
            <p className="text-gray-400 text-lg">Internship from Skill Spark on MERN STACK.</p>

          </div>
          <div className=" bg-blue-600 h-6 w-6 rounded-full absolute left-0  transform -translate-x-1/2 translate-y-7 "></div>


        </div>
      </div>
    </section>
  );
};

export default Education;
