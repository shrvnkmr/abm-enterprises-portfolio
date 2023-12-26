"use client";

import Image from "next/image";
import coffee from "../../public/estate-hero.jpg";
import { textContent } from "~/content/textContent";
import { navigate } from "~/utils/utils";

const Hero = () => {
  const { enterpriseName, hero } = textContent;
  const { title, subTitle, CTA } = hero;

  return (
    <section
      id="hero"
      className="mt-20 flex flex-col justify-between pb-8 lg:mt-[5.75rem] lg:flex-row lg:pb-0"
    >
      <div className="order-1 mx-auto lg:order-2">
        <Image
          src={coffee}
          alt="Real Estate Image"
          width={600}
          className="lg:w-[90rem]"
        />
      </div>
      <div className="order-2 flex flex-col justify-center gap-8 px-8 lg:order-1">
        <h1 className="text-5xl leading-[4rem]">
          {title} <span className="text-secondary-dark">{enterpriseName}</span>
        </h1>
        <p className="text-lg font-thin">{subTitle}</p>
        <button
          className="bg-primary-dark mx-auto w-44 rounded-md p-4"
          onClick={() => navigate("contact")}
        >
          {CTA}
        </button>
      </div>
    </section>
  );
};

export default Hero;
