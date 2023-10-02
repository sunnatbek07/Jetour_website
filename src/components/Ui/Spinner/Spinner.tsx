import "./style.scss";

const Spinner = () => {
    return (
        <div className="w-full min-h-screen absolute top-0 left-0 grid place-content-center bg-[rgba(0,0,0,0.2)]">
            <span className="loader"></span>
        </div>
    )
}

export default Spinner;