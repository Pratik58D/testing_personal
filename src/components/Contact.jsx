import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section className="py-14 px-4">
      <h1 className="text-5xl font-bold text-center text-white my-20 transition-transform duration-500 transform hover:scale-105">
        CONTACT <span className="text-red-500">US</span>
      </h1>
      <div class="mt-6">
        <div class="grid sm:grid-cols-2 items-start gap-14 p-10 mx-auto max-w-6xl bg-slate-600 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md font-[sans-serif]">
          <div>
            <h1 class="text-white text-3xl font-extrabold">Let's Talk</h1>
            <p class="text-lg text-gray-300 mt-4">
              Need any help on devloping Webpages and mobile app reach us.
            </p>

            <div class="mt-12">
              <h2 class="text-white text-base font-bold">Email</h2>
              <ul class="mt-4">
                <li class="flex items-center">
                  <div class="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20px"
                      height="20px"
                      fill="#007bff"
                      viewBox="0 0 479.058 479.058"
                    >
                      <path
                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                        data-original="#000000"
                      />
                    </svg>
                  </div>
                  <a
                    href="javascript:void(0)"
                    class="text-blue-400 text-sm ml-4"
                  >
                    <small class="block text-xl">Mail</small>
                    <strong><a href="mailto:pratikdevkota58@gmail.com">pratikdevkota58@gmail.com</a></strong>
                  </a>
                </li>
              </ul>
            </div>

            <div class="mt-12">
              <h2 class="text-white text-base font-bold">Socials</h2>

              <div className="flex gap-4 pt-3 ">
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

          <form class="space-y-7">
            <input
              type="text"
              placeholder="Name"
              class="w-full text-gray-800 rounded-md py-4 px-4 border text-sm outline-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              class="w-full text-gray-800 rounded-md py-4 px-4 border text-sm outline-blue-500"
            />
            <input
              type="text"
              placeholder="Subject"
              class="w-full text-gray-800 rounded-md py-4 px-4 border text-sm outline-blue-500"
            />
            <textarea
              placeholder="Message"
              rows="6"
              class="w-full text-gray-800 rounded-md px-4 border text-sm pt-2.5 outline-blue-500"
            ></textarea>
            <button
              type="button"
              class="text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-4 py-3 w-full !mt-6"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
