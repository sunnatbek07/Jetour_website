import { Services } from "../../db";
import ServiceCard from "../../components/Ui/Card/ServiceCard";
import AQB from "../../assets/images/AQAB.png";
import Logo from "../../assets/images/logo.svg.png";

const Service = () => {
  return (
    <section id="service" className="pt-20 pb-[90px]">
      <div className="container mx-auto px-5">
        <div className="border-y pb-20 flex items-start justify-between gap-[147px]">
          <div className="pt-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="188" height="20" viewBox="0 0 188 20" fill="none">
              <path d="M14.1079 20C4.38069 20 0 17.5349 0 12.9767V12.7442H5.00158V12.9767C5.00158 15.8837 7.72657 17.1395 14.2459 17.1395C19.5924 17.1395 22.0069 16.2558 22.0069 14.2791C21.9724 12.3721 20.1788 11.8372 15.4876 11.3256L9.10632 10.6047C4.38069 10.093 1.03481 8.60465 1.03481 5.48837C1.03481 1.86046 5.34651 0 13.3145 0C21.8 0 26.1117 2.18605 26.1117 6.11628V6.34884H21.1446V6.11628C21.1446 3.90698 18.937 2.86046 13.3835 2.86046C8.45094 2.86046 6.03639 3.69767 6.03639 5.37209C6.03639 6.93023 8.34746 7.65116 11.9693 8.02326L18.4541 8.72093C23.8006 9.25581 26.974 10.6279 26.974 14.0465C26.974 18.2558 23.1452 20 14.1079 20Z" fill="#666666" />
              <path d="M32.3108 19.7674V0.232558H55.1456V3.18605H37.1744V8.53488H53.9728V11.4651H37.1744V16.814H55.1456V19.7674H32.3108Z" fill="#666666" />
              <path d="M82.744 19.7674C82.3301 19.4419 82.3301 18.6279 82.3301 18.0233V15.4186C82.3301 13.1628 80.1225 12.4419 76.7766 12.4419H65.7732V19.7674H60.9096V0.232558H76.9146C83.6064 0.232558 87.2282 2.32558 87.2282 6.25581C87.2282 8.7907 85.469 10.4186 82.5371 10.9302C85.469 11.3953 87.2282 13.0233 87.2282 15.3256V18.0233C87.2282 18.6279 87.2282 19.4419 87.6421 19.7674H82.744ZM65.7732 9.48837H76.7766C80.088 9.48837 82.2266 8.93023 82.2266 6.23256C82.2266 3.97674 80.2605 3.18605 76.5007 3.18605H65.7732V9.48837Z" fill="#666666" />
              <path d="M101.774 19.7674L89.8044 0.232558H95.013L105.016 16.9302L105.327 16.3721L114.95 0.232558H120.124L108.19 19.7674H101.774Z" fill="#666666" />
              <path d="M122.2 19.7674V0.232558H127.215V19.7674H122.2Z" fill="#666666" />
              <path d="M145.312 20C135.309 20 129.997 15.4419 129.997 9.95349C129.997 4.53488 135.343 0 145.346 0C154.246 0 159.351 3.69767 159.903 7.93023L159.972 8.37209H154.936L154.867 7.93023C154.556 5.37209 151.314 2.97674 145.381 2.97674C138.172 2.97674 134.998 6.27907 134.998 10C134.998 13.7674 138.172 17.0233 145.346 17.0233C151.417 17.0233 154.556 14.6047 154.867 12.0233L154.936 11.5814H159.972L159.903 12.0233C159.351 16.2791 154.28 20 145.312 20Z" fill="#666666" />
              <path d="M165.165 19.7674V0.232558H188V3.18605H170.029V8.53488H186.827V11.4651H170.029V16.814H188V19.7674H165.165Z" fill="#666666" />
            </svg>
          </div>
          <div className="">
            {
              Services?.map((item, index) => {
                return (
                  <ServiceCard
                    case={item}
                    key={index}
                  />
                )
              })
            }
          </div>
        </div>

        <div className="mt-[90px] flex items-center justify-between">
          <img src={AQB} alt="Car interior" />
          <div>
            <img src={Logo} alt="Logo" className="w-[458px] h-[42px]" />
            <div className="flex flex-col gap-y-3 mt-[67px]">
              <input type="text" className="px-5 py-3 bg-[#E6E6E6] rounded-xl w-full" placeholder="Name" />
              <input type="tel" name="phone" id="phone" className="px-5 py-3 bg-[#E6E6E6] rounded-xl w-full" placeholder="Phone" />
              <button className="py-3 w-full rounded-xl bg-[#0D0D0D] focus:ring-2 hover:bg-orange-200 ring-[#1A1A1A] text-white focus:text-[#1A1A1A] focus:bg-white">Yuborish</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service;