import email from "../assets/email-1.svg"
import address from "../assets/address.svg"
import phone from "../assets/smart-phone.svg"

const Footer = () => {
    return (
        <div>
            <div className="p-4">
                <div>
                    <h1 className="p-2 font-semibold text-xl">Get In Touch</h1>
                    <div className=" p-4 flex">
                        <div className="w-8 h-8">
                            <img src={phone} alt="phone-icon" className="w-full h-full object-cover" />
                        </div>
                        <div className="px-2 w-full">
                            <h1>Phone </h1>
                            <p>+(260)-772-906-413</p>
                        </div>
                    </div>
                    <div className="p-4 flex">
                        <div className="w-8 h-8">
                            <img src={address} alt="Address-icon" className="w-full h-full object-cover" />
                        </div>
                        <div className="px-2 w-full">
                            <h1>Address </h1>
                            <p>Lusaka,Avondale</p>
                        </div>
                    </div>
                    <div className="p-4 flex">
                        <div className="w-8 h-8">
                            <img src={email} alt="phone-icon" className="w-full h-full object-cover" />
                        </div>
                        <div className="px-2 w-full">
                            <h1>Email </h1>
                            <p>rushmoresimuunza@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <div data-theme = "dim" className="p-4">
                <p className="md:px-16">ⓒ2024 created with ♥ by <span className="text-primary">Rushmore simuunza</span></p>
            </div>
        </div>
    )
}
export default Footer