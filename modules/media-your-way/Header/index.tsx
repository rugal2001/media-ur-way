import { Button } from "@/components/button";
import { Avatar, Drawer, Burger } from "@mantine/core";
import { useState, useEffect } from "react";
import { FiPhone } from "react-icons/fi";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle responsive detection
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Add resize listener
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Observer to detect which section is in view
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const menuItems = [
    { name: "Home", sectionId: "home" },
    { name: "Services", sectionId: "services" },
    { name: "Formations", sectionId: "formations" },
    { name: "Temoignages", sectionId: "temoignages" },
    { name: "FAQ", sectionId: "faq" },
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpened(false);
    }
  };

  const callPhoneNumber = () => {
    const telLink = `tel:0646585820`;
    window.open(telLink, "_blank");
  };

  return (
    <>
      {/* Mobile drawer navigation */}
      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        title="Menu"
        padding="xl"
        size="lg"
        position="right"
      >
        <div className="flex flex-col gap-6 mt-4">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative font-semibold transition-all duration-300 cursor-pointer py-2 border-b border-gray-100 ${
                activeSection === item.sectionId
                  ? "text-[#568ed9] font-bold"
                  : "text-gray-600 hover:text-[#568ed9]"
              }`}
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.name}
            </div>
          ))}

          <a
            onClick={callPhoneNumber}
            className="px-6 py-2.5 mt-4 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-[#568ed9] to-[#3a7bce] rounded-lg shadow-lg hover:shadow-[#a7c5ed]/50 hover:translate-y-[-2px] border-none w-full cursor-pointer"
          >
            Contact Us
          </a>
        </div>
      </Drawer>

      <div className="py-4 sm:py-5 border-b-[1px] border-gray-200 flex justify-between px-4 sm:px-12 items-center shadow-sm sticky top-0 backdrop-blur-lg z-50 bg-white/80">
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="bg-white rounded-md shadow-md">
            <Avatar
              size={isMobile ? 30 : 35}
              radius={50}
              src="https://screendy-cdn.fra1.digitaloceanspaces.com/platfrom-v2/_files/file_1745411414616_media-ur-way__1_-removebg-preview-removebg-preview2.png"
            />
          </div>
          <h3 className="text-lg font-bold text-transparent bg-gray-800 md:text-lg bg-clip-text">
            Media Your Way
          </h3>
        </div>

        {/* Desktop navigation */}
        {!isMobile && (
          <div className="items-center hidden gap-8 md:flex">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className={`relative font-semibold transition-all duration-300 cursor-pointer group ${
                  activeSection === item.sectionId
                    ? "text-[#568ed9]"
                    : "text-gray-600 hover:text-[#568ed9]"
                }`}
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#568ed9] transition-all duration-300 ${
                    activeSection === item.sectionId
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </div>
            ))}
          </div>
        )}

        {/* Desktop button */}
        {!isMobile ? (
          <a
            onClick={callPhoneNumber}
            className="hidden md:flex items-center gap-2 px-6 py-2.5 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-[#568ed9] to-[#3a7bce] rounded-lg shadow-md hover:shadow-xl hover:shadow-[#a7c5ed]/40 hover:translate-y-[-2px] border-none cursor-pointer group"
          >
            <FiPhone className="w-4 h-4 transition-transform group-hover:rotate-12" />
            <span>Contactez-nous</span>
            <span className="absolute inset-0 w-full h-full transition-opacity duration-300 rounded-lg opacity-0 bg-white/10 group-hover:opacity-100"></span>
          </a>
        ) : (
          <Burger
            opened={opened}
            onClick={() => setOpened(!opened)}
            color="#568ed9"
            size="sm"
          />
        )}
      </div>
    </>
  );
};

export default Header;
