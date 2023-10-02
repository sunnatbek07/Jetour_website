import { FC } from "react";
import Car from "../../../assets/images/x90-zilong.png";

const Card: FC = ({ case: { image, speed, title, description } }) => {
  return (
    <>
      <div className="flex items-center gap-[132px] py-10 border-y">
        <div className="w-[650px] h-[400px] grid place-content-center rounded-xl bg-[#E6E6E6]">
          <img src={image} alt="Car image" />
        </div>
        <div className="">
          <h5 className="text-lg text-[#E6E6E6] mb-[240px]">{speed}</h5>
          <h4 className="text-2xl text-[#1A1A1A] uppercase">{title}</h4>
          <div className="flex items-center gap-6">
            <p className="text-base text-[#666666]">
              {description}
            </p>
            <div className="p-[12px] rounded-lg bg-[#E6E6E6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M0 11H20M20 11L10 1M20 11L10 21" stroke="#1A1A1A" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card