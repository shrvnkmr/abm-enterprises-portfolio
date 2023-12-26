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
    <section
      id="listings"
      className="md:p-12 flex flex-col justify-center gap-12 p-8"
    >
      <div className="flex flex-col justify-center gap-4">
        <h3 className="m-auto text-xl font-semibold">{title}</h3>
        <h3 className="text-md m-auto px-0 font-extralight md:px-8">
          {description}
        </h3>
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
                  className="max-h-40 object-cover md:min-h-80"
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
