import { ImGithub } from "react-icons/im";
import { SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsStackOverflow, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3 w-auto"
                alt="My Website Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-amber-600">
                Antonio Paturzo
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <a
                  href="#aboutme"
                  className="text-amber-600 mr-4 hover:underline md:mr-6 "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-amber-600 mr-4 hover:underline md:mr-6"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/funstuff"
                  className="text-amber-600 mr-4 hover:underline md:mr-6 "
                >
                  Fun Stuff
                </a>
              </li>
              <li>
                <a href="#contactme" className="text-amber-600 hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Antonio Paturzo
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <ImGithub className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">My Github Page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <BsStackOverflow className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">My StackOverflow page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <BsLinkedin className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Twitter page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <TbBrandNextjs className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">GitHub account</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <SiVercel className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Dribbble account</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
