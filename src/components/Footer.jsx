import React from "react";

const Footer = () => {
  return (
    <>
      <footer class="bg-gray-800 shadow ">
        <div class="w-full mx-auto max-w-screen-xl p-6 md:flex md:items-center md:justify-between">
          <span class="text-lg text-gray-500 sm:text-center dark:text-gray-400 hover:text-red-500">
            © 2023{" "}
            <a href="https://www.facebook.com/Pratik.Devkota.2058/" class="hover:underline">
              Pratik Devkota
            </a>
            . All Rights Reserved.
          </span>
          <ul class="flex flex-wrap items-center mt-3 text-lg font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
            <li>
              <a href="#" class="hover:underline hover:text-red-500 me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-red-500 me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-red-500 me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" class="hover:underline hover:text-red-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
