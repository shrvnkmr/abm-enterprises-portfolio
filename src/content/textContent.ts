import { StaticImageData } from "next/image";
import img1 from "../../public/img1.jpeg";
import img2 from "../../public/img2.jpeg";
import img3 from "../../public/img3.jpeg";
import img4 from "../../public/img4.jpeg";
import img5 from "../../public/img5.jpeg";
import img6 from "../../public/img6.jpeg";
import img7 from "../../public/img7.jpeg";
import img8 from "../../public/img8.jpeg";
import img9 from "../../public/img9.jpeg";
import img10 from "../../public/img10.jpeg";
import img11 from "../../public/img11.jpeg";

interface Listing {
  img: StaticImageData;
  name?: string;
  description?: string;
}
type navSections = "About" | "Contact";
interface TextContent {
  enterpriseName: string;
  hero: {
    title: string;
    subTitle: string;
    CTA: string;
  };
  about: {
    description: string;
  };
  listings: {
    title: string;
    description: string;
    listing: Listing[];
  };
  contact: {
    title: string;
    description: string;
    name: string;
    tel: string;
    alternateTel: string;
    email: string;
    address: string;
  };
  navbar: {
    about: navSections;
    contact: navSections;
  };
  footer: {
    designedByText: string;
    devName: string;
    copyrightText: string;
    tel: string;
    alternateTel: string;
    whatsappURL: string;
    gmailURL: string;
  };
}

export const textContent: TextContent = {
  enterpriseName: "ABM Enterprises",
  hero: {
    title: "Your Trusted Guide in Real Estate Exploration.",
    subTitle:
      "Crafting Your Path to Property Success with Expertise and Dedication.",
    CTA: "Contact me",
  },
  about: {
    description:
      "Experienced realtor specializing in diverse property transactions. Whether you're seeking a dream home, fertile agricultural land, barren expanses for development, or prime sites for investment, I leverage my market insight to match your needs. Let's turn your property aspirations into reality.",
  },
  listings: {
    title: "Discover Listings",
    description:
      "Our curated listings showcase captivating properties for sale, offering panoramic views and a harmonious blend of modern elegance with rustic charm. Embrace sustainable luxury surrounded by lush coffee plantations. Explore the extraordinary – find your perfect coffee retreat. Welcome home.",
    listing: [
      {
        name: "img1",
        img: img1,
        description: "",
      },
      {
        name: "img2",
        img: img2,
        description: "",
      },
      {
        name: "img3",
        img: img3,
        description: "",
      },
      {
        name: "img4",
        img: img4,
        description: "",
      },
      {
        name: "img5",
        img: img5,
        description: "",
      },
      {
        name: "img6",
        img: img6,
        description: "",
      },
      {
        name: "img7",
        img: img7,
        description: "",
      },
      {
        name: "img8",
        img: img8,
        description: "",
      },
      {
        name: "img9",
        img: img9,
        description: "",
      },
      {
        name: "img10",
        img: img10,
        description: "",
      },
      {
        name: "img11",
        img: img11,
        description: "",
      },
    ],
  },
  contact: {
    title: "Get in touch",
    description:
      "Whether you're buying, selling, or investing, ABM Enterprises is here to guide you every step of the way. Let's embark on this exciting journey together and turn your real estate dreams into reality.",
    name: "AC Ashok",
    tel: "+91 9741213681 ,",
    alternateTel: "+91 9483844344",
    email: "ashokchengappa21@gmail.com",
    address: "Virajpet - Kodagu, Karnataka",
  },
  navbar: {
    about: "About",
    contact: "Contact",
  },
  footer: {
    designedByText: "Designed and built by",
    devName: "Shravan Kumar.",
    copyrightText: "© 2023 ABM Enterprises. All Rights Reserved.",
    tel: "Tel:919741213681",
    alternateTel: "Tel:919483844344",
    whatsappURL: "//api.whatsapp.com/send?phone=919741213681",
    gmailURL: "mailto:ashokchengappa21@gmail.com",
  },
};
