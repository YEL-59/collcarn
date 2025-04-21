import React from 'react'

const MarketItem = ({data}) => {
  return (
    <>
          <div
            className="marketItemContent p-2 md:p-3 lg:p-4 rounded-[20.885px] border-[0.653px] border-[solid] border-[#E8E8E8] bg-[#FFF] [box-shadow:2px_4px_20px_0px_rgba(0,_0,_0,_0.12)] flex flex-col gap-[15px] md:gap-[20px] lg:gap-[26.11px]"
          >
            <div className="h-[196.09px] self-stretch [aspect-ratio:251.20/196.09] rounded-[16px] w-full overflow-hidden relative">
              <img
                src={data.img}
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
            <div className="flex flex-col gap-[8px] md:gap-[10px] lg:gap-[26px]">
              
              <div className="flex items-center justify-between gap-2">
              <h3 className="text-[#2F2F2F] font-noto text-[20px] not-italic font-semibold leading-[26.4px] tracking-[-0.4px]">
                {data.title}
              </h3>
              <h2 className='text-[#EA8A00] text-right font-noto text-[20px] not-italic font-semibold leading-[132%] self-stretch'>{data.price}</h2>
              </div>
              <button className="text-[#FFF] font-nunito text-[16px] not-italic font-bold leading-[164%] flex w-full px-[24px] py-[6px] md:py-[8px] lg:py-[10px] justify-center items-center gap-[6.526px] rounded-[99px] bg-[linear-gradient(91deg,_#FF9F2C_0%,_#EA8A00_100%)] [box-shadow:0px_4px_7px_0px_rgba(254,_143,_8,_0.20)] mx-auto">Get It Now</button>
            </div>
          </div>
    </>
  )
}

export default MarketItem