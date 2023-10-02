import Logo from "../../components/Ui/Icons/Logo";
import PlayIcon from "../../components/Ui/Icons/PlayIcon";

const Intro = () => {
  return (
    <section id="intro">
      <div className="container mx-auto px-5">
        <div className="flex items-center mt-[163px] gap-[97px]">
          <Logo />
          <PlayIcon />
        </div>
        <div className="flex items-center justify-between mt-[119px]">
          <h3 className="text-[48px] text-[#999999] leading-[56px]">
            <strong className="text-[#1A1A1A]">JETOUR</strong> yuqori didLI insonlar uchun
          </h3>

          <div className="p-[12px] bg-[#E6E6E6] rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="41" viewBox="0 0 41 41" fill="none">
              <path d="M1.61525 39.3848L38.3848 2.61522M38.3848 2.61522H1.61525M38.3848 2.61522V39.3848" stroke="#1A1A1A" strokeWidth="4" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro;