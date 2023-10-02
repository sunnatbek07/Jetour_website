
const Service = ({ case: { title} }) => {
    return (
        <div className="flex items-center justify-between gap-[115px] py-6 border-y">
            <div className="flex items-center gap-6">
                <div className="w-5 h-5 rounded-full bg-[#333333]"></div>
                <p>{title}</p>
            </div>
            <div className="p-3 rounded-lg bg-[#E6E6E6]">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                    <path d="M1.68627 24.3137L24.3137 1.68629M24.3137 1.68629H1.68627M24.3137 1.68629V24.3137" stroke="#1A1A1A" stroke-width="2" />
                </svg>
            </div>
        </div>
    )
}

export default Service