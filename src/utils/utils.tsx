type sectionID = "hero" | "contact";

const scrollToSection = (section: sectionID) => {
  const selectedItem = document?.getElementById(section);
  if (selectedItem) {
    const yOffset = -80; // scroll above the top by 60 pixels
    window.scrollTo({
      top: selectedItem.offsetTop + yOffset,
      behavior: "smooth",
    });
  }
};

export const navigate = (id: sectionID) => {
  scrollToSection(id);
};
