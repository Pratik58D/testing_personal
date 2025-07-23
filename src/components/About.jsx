import React from "react";

const About = () => {
  const aboutList = [
    {
      percentage: "60%",
      title: "React",
      content:
        "Building interactive UIs with reusable components using React library.",
    },
    {
      percentage: "30%",
      title: "MERN",
      content:
        "Full-stack development using MongoDB, Express, React, and Node.js.",
    },
    {
      percentage: "40%",
      title: "Data Science",
      content:
        "Analyzing and interpreting complex data to inform decision-making.",
    },
    {
      percentage: "70%",
      title: "Python",
      content:
        "Writing efficient code for data processing, automation, and scripting.",
    },
  ];

  return (
    <>
      <div className="w-screen overflow-x-hidden flex flex-col items-center pt-20 ">
        <h1 className="text-5xl transition-transform duration-500 transform hover:scale-105">
          About
          <span className="text-red-400 pl-5">Me</span>
        </h1>

        <div
          className="w-full flex flex-col items-center 
        lg:flex-row lg:justify-center gap-10 pt-10 md:pt-24"
        >
          {/* left side about section */}
          <div
            className="flex flex-col gap-5 w-[70%] 
          lg:grid lg:w-[40%] lg:grid-cols-2 lg:gap-x-10 lg:gap-y-10"
          >
            {aboutList.map((item, index) => (
              <div
                key={index}
                className="bg-slate-600 rounded-2xl 
              flex flex-col gap-5 items-center p-12
              hover:bg-red-400 shadow-lg hover:-translate-y-3 duration-500"
              >
                <div className="text-blue-950 font-semibold text-3xl border-x-8 border-gray-800 rounded-full p-5   ">
                  {item.percentage}
                </div>
                <h3 className="text-white text-[1.5rem] font-bold pt-4">
                  {item.title}
                </h3>
                <p className="text-slate-300">{item.content}</p>
              </div>
            ))}
          </div>
          {/* right-side about section */}
          <div className="w-[70%] lg:w-[40%]  text-[1.2rem] text-justify">
            <p className="text-slate-300 ">
              "I am a MERN developer and a computer engineering student with a
              strong background in C, C++, Python, and VB.NET. Passionate about
              building dynamic web applications and solving complex problems
              through technology. I continually seek to enhance my skills and
              stay updated with the latest industry trends
            </p>

            <div className="p-4  text-white mt-14">
              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Full Name :</h2>
                <span className="text-gray-300">Pratik Devkota</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />

              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Age :</h2>
                <span className="text-gray-300">23 years</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />

              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Language :</h2>
                <span className="text-gray-300">Nepali, English, Hindi</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />

              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Phone No :</h2>
                <span className="text-gray-300">+977 9876543210</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />


              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Email :</h2>
                <span className="text-gray-300">pratikdevkota666@gmail.com</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />


              <div className="flex justify-between p-2">
                <h2 className="font-semibold">Address :</h2>
                <span className="text-gray-300">Birendranagar, - 10 - Surkhet, Nepal.</span>
              </div>
              <hr className="border-dotted border-red-500 my-2" />

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
