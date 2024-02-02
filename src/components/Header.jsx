import customer1 from "../assets/customer1.jpg"
const Header = () => {
    return(
        <div data-theme = "lemonade" className="relative bg-cover bg-center h-96">
            <img className="absolute inset-0 w-full h-full object-cover" src={customer1} alt="Header background image"/>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-4">
                    <h1 className=" tracking-wider text-white text-4xl font-bold">
                        <span className=" text-4xl font-bold text-secondary">R</span>ushmore
                        S<span className="text-4xl font-bold text-secondary">i</span>muunza</h1>
                    <p className=" tracking-wider text-secondary text-lg font-semibold">Software Developer</p>
                </div>
            </div>
        </div>

    )
}
export default Header