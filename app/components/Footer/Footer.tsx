import { ImGithub } from "react-icons/im";
import { SiVercel } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { BsStackOverflow, BsLinkedin } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="rounded-lg shadow bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <a href="#" className="flex items-center mb-4 sm:mb-0">
              <Image
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8 mr-3 w-auto"
                alt="My Website Logo"
                width={32}
                height={32}
                loading="lazy"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-primary-light">
                Antonio Paturzo
              </span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-primary-light">
              <li>
                <a href="#aboutme" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="mr-4 hover:underline md:mr-6">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Fun Stuff
                </a>
              </li>
              <li>
                <a href="#contactme" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 sm:mx-auto border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Antonio Paturzo
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a href="#" className="text-gray-500 hover:text-white">
                <ImGithub className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">My Github Page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <BsStackOverflow className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">My StackOverflow page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <BsLinkedin className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">My Linkedin Page</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <TbBrandNextjs className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Created with Next.Js</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-white">
                <SiVercel className="w-5 h-5" aria-hidden="true" />
                <span className="sr-only">Deployed with Vercel</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
