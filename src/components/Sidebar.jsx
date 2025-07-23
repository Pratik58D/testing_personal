import React, { useState } from "react";
import CancelIcon from "@mui/icons-material/cancel";
import { Link, Routes, Route } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Sidebar = () => {
  // State to manage visibility of the sidebar
  const [isVisible, setIsVisible] = useState(true);

  // Handler to toggle the sidebar visibility
  const handleCancel = () => {
    setIsVisible(false);
  };

  const handleLinkClick = (sectionId) => {
    setIsVisible(false);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className="fixed inset-0 z-50 overflow-auto bg-gray-800 bg-opacity-50 flex
     justify-end items-start "
        >
          <div
            className=" w-[30%] lg:w-[20%] flex flex-col pb-10 bg-gray-600 h-screen
            overflow-y-hidden  md:overflow-x-hidden"
          >
            <CancelIcon
              onClick={handleCancel}
              className="text-white absolute top-4 right-4 cursor-pointer"
              sx={{ fontSize: 40 }}
            />

            <ul className="flex flex-col justify-center h-full ">
              <li className="py-4 px-10 lg:py-5 lg:pl-32 hover:bg-gray-800 hover:text-red-500 duration-500">
                <Link
                  onClick={() => handleLinkClick("about")}
                  className="text-3xl  "
                >
                  About
                </Link>
              </li>
              <li className="py-4 px-10 lg:py-5 lg:pl-32 hover:bg-gray-800 hover:text-red-500 duration-500">
                <Link
                  onClick={() => handleLinkClick("education")}
                  className="text-3xl  "
                >
                  Education
                </Link>
              </li>
              <li className="py-4 px-10 lg:py-5 lg:pl-32 hover:bg-gray-800 hover:text-red-500 duration-500">
                <Link
                  onClick={() => handleLinkClick("experience")}
                  className="text-3xl  "
                >
                  Experience
                </Link>
              </li>
              <li className="py-4 px-10 lg:py-5 lg:pl-32 hover:bg-gray-800 hover:text-red-500 duration-500">
                <Link
                  onClick={() => handleLinkClick("services")}
                  className="text-3xl  "
                >
                  Services
                </Link>
              </li>
              <li className="py-4 px-10 lg:py-5 lg:pl-32 hover:bg-gray-800 hover:text-red-500 duration-500">
                <Link
                  onClick={() => handleLinkClick("contact")}
                  className="text-3xl "
                >
                  Contact
                </Link>
              </li>
            </ul>
            <div className="flex gap-4 w-full justify-center ">
              <Link
                to="https://www.facebook.com/Pratik.Devkota.2058/"
                target="_blank"
              >
                <FacebookIcon
                  sx={{
                    fontSize: 40,
                    "&:hover": { color: "blue" },
                  }}
                />
              </Link>
              <Link
                to="https://www.facebook.com/Pratik.Devkota.2058/"
                target="_blank"
              >
                <InstagramIcon
                  sx={{
                    fontSize: 40,
                    "&:hover": { color: "red" },
                  }}
                />
              </Link>
              <Link
                to="https://www.linkedin.com/in/pratik-devkota2058/"
                target="_blank"
              >
                <LinkedInIcon
                  sx={{
                    fontSize: 40,
                    "&:hover": { color: "skyblue" },
                  }}
                />
              </Link>
              <Link to="https://github.com/Pratik58D" target="_blank">
                <GitHubIcon
                  sx={{
                    fontSize: 40,
                    "&:hover": { color: "purple" },
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
