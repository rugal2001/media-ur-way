import { Button } from "@/components/button";
import { Avatar, Drawer, Burger } from "@mantine/core";
import { useState, useEffect } from "react";

const Header = () => {
  const [opened, setOpened] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
              className="relative font-semibold text-gray-600 transition-all duration-300 cursor-pointer hover:text-[#568ed9] py-2 border-b border-gray-100"
              onClick={() => scrollToSection(item.sectionId)}
            >
              {item.name}
            </div>
          ))}

          <Button
            onClick={() => setOpened(false)}
            className="px-6 py-2.5 mt-4 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-[#568ed9] to-[#3a7bce] rounded-lg shadow-lg hover:shadow-[#a7c5ed]/50 hover:translate-y-[-2px] border-none w-full"
          >
            Contact Us
          </Button>
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
          <h3 className="text-lg font-bold text-transparent bg-gray-800 sm:text-xl bg-clip-text">
            Media Your Way
          </h3>
        </div>

        {/* Desktop navigation */}
        {!isMobile && (
          <div className="items-center hidden gap-8 md:flex">
            {menuItems.map((item, index) => (
              <div
                key={index}
                className="relative font-semibold text-gray-600 transition-all duration-300 cursor-pointer hover:text-[#568ed9] group"
                onClick={() => scrollToSection(item.sectionId)}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#568ed9] transition-all duration-300 group-hover:w-full"></span>
              </div>
            ))}
          </div>
        )}

        {/* Desktop button */}
        {!isMobile ? (
          <Button className="hidden md:block px-6 py-2.5 font-semibold text-white transition-all duration-300 transform bg-gradient-to-r from-[#568ed9] to-[#3a7bce] rounded-lg shadow-lg hover:shadow-[#a7c5ed]/50 hover:translate-y-[-2px] border-none">
            Contact Us
          </Button>
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
