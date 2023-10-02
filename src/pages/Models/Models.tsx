import Card from "../../components/Ui/Card/Card";
import { Info } from "../../db";

const Models = () => {
  return (
    <section id="models" className="pt-[96px] pb-[60px]">
      <div className="container mx-auto px-5">
        <div className="pb-5 border-b">
          <svg xmlns="http://www.w3.org/2000/svg" width="208" height="20" viewBox="0 0 208 20" fill="none">
            <path d="M0 19.7674V0.232558H6.09588L17.8633 14.8372L29.6306 0.232558H35.6879V19.7674H30.4023V5.7907L19.1364 19.7674H16.5901L5.32425 5.7907V19.7674H0Z" fill="#666666" />
            <path d="M58.6448 20C47.8034 20 41.7075 15.4186 41.7075 9.97674C41.7075 4.58139 47.8034 0 58.6448 0C69.4863 0 75.5821 4.58139 75.5821 9.97674C75.5821 15.4186 69.4863 20 58.6448 20ZM47.3019 9.97674C47.3019 13.7209 50.7356 17.0233 58.6448 17.0233C66.5541 17.0233 69.9878 13.7209 69.9878 9.97674C69.9878 6.30232 66.5541 2.97674 58.6448 2.97674C50.7356 2.97674 47.3019 6.30232 47.3019 9.97674Z" fill="#666666" />
            <path d="M81.5713 19.7674V0.232558H97.2354C106.726 0.232558 112.552 3.34884 112.552 10C112.552 16.6047 106.688 19.7674 97.2354 19.7674H81.5713ZM87.0113 16.814H97.274C103.91 16.814 106.958 14.5814 106.958 10C106.958 5.4186 103.91 3.18605 97.274 3.18605H87.0113V16.814Z" fill="#666666" />
            <path d="M118.683 19.7674V0.232558H144.224V3.18605H124.123V8.53488H142.913V11.4651H124.123V16.814H144.224V19.7674H118.683Z" fill="#666666" />
            <path d="M150.671 19.7674V0.232558H156.111V16.814H176.135V19.7674H150.671Z" fill="#666666" />
            <path d="M193.609 20C182.729 20 177.829 17.5349 177.829 12.9767V12.7442H183.424V12.9767C183.424 15.8837 186.472 17.1395 193.763 17.1395C199.744 17.1395 202.444 16.2558 202.444 14.2791C202.406 12.3721 200.399 11.8372 195.152 11.3256L188.015 10.6047C182.729 10.093 178.987 8.60465 178.987 5.48837C178.987 1.86046 183.809 0 192.722 0C202.213 0 207.035 2.18605 207.035 6.11628V6.34884H201.48V6.11628C201.48 3.90698 199.011 2.86046 192.799 2.86046C187.282 2.86046 184.581 3.69767 184.581 5.37209C184.581 6.93023 187.166 7.65116 191.217 8.02326L198.47 8.72093C204.451 9.25581 208 10.6279 208 14.0465C208 18.2558 203.717 20 193.609 20Z" fill="#666666" />
          </svg>
        </div>

        <div className="mb-11">
          {
            Info?.map((item, index) => {
              return (
                <Card
                  case={item}
                  key={index}
                />
              )
            })
          }
        </div>

        <div className="flex justify-end relative">
          <div className="grid place-content-center w-[200px] h-[200px] rounded-full bg-[#F0F0F0] absolute right-[96px] hover:right-[4px] duration-500 cursor-pointer">
            <p className="pb-4 border-b mb-4">Discover</p>
            <div className="p-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="41" height="32" viewBox="0 0 41 32" fill="none">
                <path d="M0 16H40M40 16L39.2623 15.953C30.8452 15.4172 24.2926 8.43412 24.2926 0V0M40 16L39.2623 16.047C30.8452 16.5828 24.2926 23.5659 24.2926 32V32" stroke="#1A1A1A" stroke-width="3" />
              </svg>
            </div>
          </div>
          <div className="w-[200px] h-[200px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192" fill="none">
              <circle cx="96" cy="96" r="95.5" fill="#FAFAFA" stroke="#999999" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Models;