"use client";

import { useEffect, useState } from "react";
import { textContent } from "~/content/textContent";
import { navigate } from "~/utils/utils";
type sectionID = "hero" | "contact";

type section = {
  id: sectionID;
  label: string;
};
const Navbar = () => {
  const { enterpriseName } = textContent;
  const { about, contact } = textContent.navbar;
  const [activeSection, setActiveSection] = useState<sectionID | null>(null);
  const sections: section[] = [
    { id: "hero", label: about },
    { id: "contact", label: contact },
  ];

  useEffect(() => {
    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id as sectionID);
        }
      });
    };

    const sections = document.querySelectorAll("section");
    // intersection observer api to indicate when the section is in view
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2, // percentage at which callback is triggered
    });

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Clean up the observer when the component unmounts
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="bg-primary-dark fixed top-0 z-10 flex w-full items-center justify-between p-8 px-4 text-lg font-extralight max-[375px]:text-sm lg:px-12">
      <span className="text-stroke text-secondary-dark cursor-pointer rounded-md text-xl font-semibold">
        {enterpriseName}
      </span>
      <span className="flex gap-4 lg:gap-8">
        {sections.map((section, key) => (
          <span
            key={key}
            className={`hover:text-secondary-medium cursor-pointer ${
              activeSection === section.id ? "active" : ""
            }`}
            onClick={() => navigate(section.id)}
          >
            {section.label}
          </span>
        ))}
      </span>
    </nav>
  );
};

export default Navbar;
