
const Footer = () => {
  return (
    <footer id="contacts" className="bg-[#E6E6E6] pt-10 pb-[55px]">
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between pb-5 border-b border-[#CCCCCC]">
          <h2>Uzbekistan</h2>

          <div className="flex gap-x-5">
            <p className="px-5 py-2 rounded-[20px] bg-white">+(91) 033 30 03</p>
            <p className="px-5 py-2 rounded-[20px] bg-white">Toshkent sh. Sergeli 2-mavze, 5-metro bekati</p>
            <p className="px-5 py-2 rounded-[20px] bg-white">jetour.uzbekistan@gmail.com</p>
          </div>
        </div>
        <div className="flex justify-between pt-5">
          <button className="py-[10px] px-[173px] rounded-[30px] bg-[#333333] text-white hover:bg-orange-200 focus:bg-white focus:text-[#333333] focus:ring-2 ring-[#1A1A1A]">
            Facebook
          </button>
          <button className="py-[10px] px-[173px] rounded-[30px] bg-[#333333] text-white hover:bg-orange-200 focus:bg-white focus:text-[#333333] focus:ring-2 ring-[#1A1A1A]">
            Instagram
          </button>
          <button className="py-[10px] px-[173px] rounded-[30px] bg-[#333333] text-white hover:bg-orange-200 focus:bg-white focus:text-[#333333] focus:ring-2 ring-[#1A1A1A]">
            Telegram
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer