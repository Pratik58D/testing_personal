import React from "react";

const Service = () => {
  return (
    <section className="pb-12 pt-20 dark:bg-dark lg:pb-[90px] lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20">
              <h1 class="text-5xl font-bold text-center mb-12 transition-transform duration-500 transform hover:scale-105">
                Our <span className="text-red-500">Services</span>
              </h1>
              <h2 className="mb-3 text-2xl font-semibold leading-[1.2] text-dark dark:text-gray-300 sm:text-3xl md:text-3xl">
                What We Offer
              </h2>
              <p className="text-body-color text-xl text-gray-400">
                WE offer you computer realted solutions like:
              </p>
            </div>
          </div>
        </div>

        <div class="container mx-auto p-6">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div class="service-card bg-gray-700 rounded-lg shadow-lg p-6 text-center
            hover:bg-red-500 hover:-translate-x-3 hover:-translate-y-3 duration-500">
              <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🌐
              </div>
              <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Web Development
              </h3>
              <p class="text-gray-400">
                Creating responsive and interactive websites.
              </p>
            </div>
            <div class="service-card bg-gray-700 rounded-lg shadow-lg p-6 text-center
            hover:bg-red-500 hover:-translate-x-3 hover:-translate-y-3 duration-500">
              <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🔍
              </div>
              <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Data science 
              </h3>
              <p class="text-gray-400">
                Can be handy on Data Science Fields
              </p>
            </div>
            <div class="service-card bg-gray-700 rounded-lg shadow-lg p-6 text-center
            hover:bg-red-500 hover:-translate-x-3 hover:-translate-y-3 duration-500">
              <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🐍
              </div>
              <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Python Developer
              </h3>
              <p class="text-gray-400">
                Devloping python realted Project. Handy on AI.
              </p>
            </div>
            <div class="service-card bg-gray-700 rounded-lg shadow-lg p-6 text-center
            hover:bg-red-500 hover:-translate-x-3 hover:-translate-y-3 duration-500">
              <div class="text-5xl mb-4 transition-transform duration-300 transform hover:scale-110">
                🧑‍🏫
              </div>
              <h3 class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500">
                Teaching Assitance
              </h3>
              <p class="text-gray-400">
                Have experience on C ,C++ , Javascript,VB.net,Python
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details }) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/3">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg dark:bg-dark-2 md:px-7 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark dark:text-white">
            {title}
          </h4>
          <p className="text-body-color dark:text-dark-6">{details}</p>
        </div>
      </div>
    </>
  );
};
