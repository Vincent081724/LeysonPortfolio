import { useState, useEffect } from "react";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Certification from "./Certification";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";

import FbIcon from "/fb.png";
import InstagramIcon from "/vite.svg";
import ServicesUi from "/ServicesUi.svg";

export default function MainPage() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;
      case "Services":
        return <Services />;
      case "Certification":
        return <Certification />;
      case "Portfolio":
        return <Portfolio />;
      case "Testimonials":
        return <Testimonials />;
      case "CaseStudies":
        return <CaseStudies />;
      default:
        return <Home />;
    }
  };

  const navLinks = [
    { name: "Home" },
    { name: "About" },
    { name: "Services" },
    { name: "Certification" },
    { name: "Portfolio" },
    { name: "Testimonials" },
    { name: "Case Studies" },
  ];

  const navLinksIcons = [
    {
      name: "Facebook",
      image: FbIcon,
    },
    {
      name: "Instagram",
      image: InstagramIcon,
    },
  ];

  return (
    <div className="h-full w-full">
      <nav className="fix top-0 w-full z-50 transistion-all duration-300 bg-slate-950/20 border-b backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between item-center h-14 sm:h-16 md:h-20 lg:h-24">
            <div className="flex item-center group cursor-pointer">
              <div>
                <img
                  src="/logo.png"
                  alt="CodeFlow"
                  className="w-8 h-20 sm:w-10 sm:h-22"
                />
              </div>
            </div>
            {/* Nav List */}
            <div className="flex place-items-center lg:space-x-10  ">
              {navLinks.map((link) => (
                <a
                  className="text-base font-medium tracking-widest px-2 text-white hover:text-red-500 transition-colors duration-200"
                  onClick={() => setActiveSection(link.name)}
                >
                  {link.name}
                </a>
              ))}

              {navLinksIcons.map((linkIcon) => (
                <a
                  className="text-base font-medium tracking-widest px-2 text-white hover:text-red-500 transition-colors duration-200"
                  // onClick={() => setActiveSection(link.name)}
                >
                  <img
                    src={linkIcon.image}
                    alt="CodeFlow"
                    className="w-[35px] h-[35px] lg:w-[24px] lg:h-[24px]"
                  />
                </a>
              ))}
              {/* <a
                onClick={() => setActiveSection("#home")}
                // href="#home"
                className="hover:text-red-500 font-medium font-serif"
              >
                Home
              </a>
              <a
                onClick={() => setActiveSection("#about")}
                // href="#about"
                className="hover:text-red-500 font-medium font-serif"
              >
                About
              </a>
              <a
                href="#certificate"
                className="hover:text-red-500 font-medium font-serif"
              >
                Certificate
              </a>
              <a
                href="#portfolio"
                className="hover:text-red-500 font-medium font-serif"
              >
                Portfolio
              </a>
              <a
                href="#testimonial"
                className="hover:text-red-500 font-medium font-serif"
              >
                Testimonials
              </a>
              <a
                href="#case"
                className="hover:text-red-500 font-medium font-serif"
              >
                Case Studies
              </a> */}
            </div>
          </div>
        </div>
      </nav>

      <div className="min-h-0 ">
        <div className="min-h-0">{renderContent()}</div>
      </div>
    </div>
  );
}
