
const Header = () => {
  return (
    <header className="w-full fixed top-0">
      <div className="container mx-auto px-5">
        <nav className="flex justify-between items-center h-[61px] border-b-2">
          <ul className="flex gap-x-8 items-center">
            <li>
              <a href="#" className="hover:text-green-700 duration-200">
                Models
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700 duration-200">
                About
                Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700 duration-200">
                Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-green-700 duration-200">
                Contacts
              </a>
            </li>
          </ul>

          <button className="px-[78px] pt-[9px] pb-[7px] bg-[#333333] rounded-[20px] text-white focus:ring-2 ring-[#333333] focus:text-[#333333] focus:bg-white hover:bg-orange-200 duration-200">
            Buyurtirish
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
