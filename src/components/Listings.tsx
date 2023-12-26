"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { textContent } from "~/content/textContent";
import Image from "next/image";

const Listings = () => {
  const { title, description, listing } = textContent.listings;
  return (
    <section id="listings" className="flex flex-col justify-center gap-12 p-12">
      <div className="flex flex-col justify-center gap-4">
        <h3 className="m-auto text-xl font-semibold">{title}</h3>
        <h3 className="text-md m-auto px-8 font-extralight">{description}</h3>
      </div>
      <div className="m-auto px-8">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {listing.map((item, key) => (
              <CarouselItem key={key} className="lg:basis-1/3">
                <Image
                  src={item.img}
                  alt="Estate Image"
                  width={600}
                  height={600}
                  className=" max-h-40 object-cover md:max-h-80"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-transparent" />
          <CarouselNext className="bg-transparent" />
        </Carousel>
      </div>
    </section>
  );
};

export default Listings;
