import React from "react";
import { Bone } from "lucide-react";

const Restaurants = ({data}) => {

  return (
    <>
    
          <div
            className="restaurantsItem p-2 md:p-3 lg:p-4 rounded-[20.885px] border-[0.653px] border-[solid] border-[#E8E8E8] bg-[#FFF] [box-shadow:2px_4px_20px_0px_rgba(0,_0,_0,_0.12)] flex flex-col gap-[15px] md:gap-[20px] lg:gap-[26.11px]"
          >
            <div className="h-[196.09px] self-stretch [aspect-ratio:251.20/196.09] rounded-[16px] w-full overflow-hidden relative">
              <img
                src={data.img}
                alt={data.alt}
                className="w-full h-full object-cover"
              />
              <button className="flex w-[40px] h-[40px] p-[11.429px] justify-center items-center gap-[7.143px] rounded-[20px] border-[0.714px] border-[solid] border-[#E8E8E8] bg-[#FFF] absolute right-[27.2px] top-[27.818px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                >
                  <path
                    d="M16.2201 4.14682C13.9854 2.77605 12.035 3.32845 10.8633 4.20837C10.3828 4.56916 10.1426 4.74955 10.0013 4.74955C9.85997 4.74955 9.6198 4.56916 9.1393 4.20837C7.96765 3.32845 6.01721 2.77605 3.7825 4.14682C0.849693 5.94581 0.186068 11.8808 6.95091 16.8879C8.2394 17.8415 8.88364 18.3184 10.0013 18.3184C11.119 18.3184 11.7632 17.8415 13.0517 16.8879C19.8166 11.8808 19.1529 5.94581 16.2201 4.14682Z"
                    stroke="#757575"
                    stroke-width="1.07143"
                    stroke-linecap="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-[8px] md:gap-[10px]">
              <h3 className="text-[#2F2F2F] font-noto text-[20px] not-italic font-semibold leading-[26.4px] tracking-[-0.4px]">
                {data.title}
              </h3>
              <div className="flex items-center justify-between gap-2">
                <p className="flex items-center gap-2 text-[#757575] font-nunito text-[12px] not-italic font-normal leading-[164%]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        d="M9.13736 10.7278C10.4494 10.7278 11.513 9.66424 11.513 8.35221C11.513 7.04017 10.4494 5.97656 9.13736 5.97656C7.82533 5.97656 6.76172 7.04017 6.76172 8.35221C6.76172 9.66424 7.82533 10.7278 9.13736 10.7278Z"
                        stroke="#757575"
                        stroke-width="0.978974"
                      />
                      <path
                        d="M2.75906 6.96703C4.25906 0.373102 14.0281 0.380716 15.5205 6.97465C16.3962 10.8427 13.9901 14.1168 11.8809 16.1422C10.3505 17.6194 7.92913 17.6194 6.39105 16.1422C4.28952 14.1168 1.88342 10.8351 2.75906 6.96703Z"
                        stroke="#757575"
                        stroke-width="0.978974"
                      />
                    </svg>
                  </span>
                  {data.location}
                </p>
                <div className="ratings area flex items-center gap-2">
                  <div className="flex items-center gap-[6px]">
                  {[...Array(5)].map((_, i) => (
              <Bone
                key={i}
                className={`size-4 ${
                  i < Math.floor(data.ratings) ? "fill-[#FFBF0B]" : "fill-transparent"
                } text-[#FFBF0B]`}
              />
            ))}
                  </div>
                  <p className="text-[#757575] font-nunito text-[12px] not-italic font-normal leading-[164%]">
                    {data.ratings}
                  </p>
                </div>
              </div>
            </div>
          </div>
    </>
  );
};

export default Restaurants;
