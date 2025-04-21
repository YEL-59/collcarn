import Menuicon1 from "@/assets/svg/menuicon1";
import Menuicon2 from "@/assets/svg/menuicon2";
import RightArrow from "@/assets/svg/rightarraw";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Link } from "react-router";

const navItems = [
  {
    title: "Pet Friendly Restaurants",
    href: "/restaurants/pet-friendly",
    icon: <Menuicon1 />,
  },
  {
    title: "FurryToon Insights",
    href: "/restaurants/vegan",
    icon: <Menuicon2 />,
  },
  {
    title: "PawTaIk Forum",
    href: "/restaurants/outdoor",
    icon: <Menuicon1 />,
  },
  {
    title: "PawExchange",
    href: "/restaurants/late-night",
    icon: <Menuicon1 />,
  },
  {
    title: "Pet Adoption",
    href: "/restaurants/outdoor",
    icon: <Menuicon1 />,
  },
  {
    title: "Pawrent Recommends",
    href: "/restaurants/late-night",
    icon: <Menuicon1 />,
  },
];

const sliderImages = [
  "/assets/banner.png",
  "/assets/banner.png",
  "/assets/banner.png",
];

const Hero = () => {
  return (
    <div className="container mx-auto grid grid-cols-12 mt-5 gap-4">
      {/* Sidebar */}
      <div className="col-span-3 bg-white border rounded-xl p-4 shadow-md">
        <ul className="space-y-1">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center justify-between gap-4 p-3 hover:bg-gray-100 rounded transition-all duration-200 border-b"
              >
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 bg-[#f0f3ed] rounded-full flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-md font-medium">{item.title}</span>
                </div>
                <RightArrow />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content with Carousel */}
      <div className="col-span-9 bg-white p-0 rounded-xl shadow-md overflow-hidden relative">
        <Carousel className="w-full h-[500px]">
          <CarouselContent>
            {sliderImages.map((img, index) => (
              <CarouselItem key={index} className="relative h-[500px]">
                <img
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
            {sliderImages.map((_, index) => (
              <span
                key={index}
                className="w-3 h-3 bg-white/70 rounded-full border border-gray-300"
              ></span>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Hero;
