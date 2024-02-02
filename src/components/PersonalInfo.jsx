import { Cardinfo } from "../constants/elements";
import { Links } from "../constants/elements";
import profile from "../assets/customer1.jpg"

const PersonalInfo = () => {
    return (
        <div className="p-8 max-sm:mb-4 lg:border-r  lg:border-gray-300">
            <div>
                <h1 className="p-4 text-2xl font-bold tracking-wide text-primary-content">Personal Info </h1>
                <div className="p-4 flex justify-center">
                    <div className="avatar p-4">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src= {profile} />
                        </div>
                    </div>
                </div>
            </div>
            <div className=" px-4 py-2 flex">
                <h1 className=" text-primary-content font-semibold ">Birthdate : </h1>
                <p className="px-1 text-gray-600">17/10/2002</p>
            </div>
            <div className=" px-4 py-2 flex ">
                <h1 className=" text-primary-content font-semibold">Email : </h1>
                <p className="px-1 text-gray-600">rushmoresimuunza@gmail.com</p>
            </div>
            <div className=" px-4 py-2 flex">
                <h1 className=" text-primary-content font-semibold">Phone : </h1>
                <p className="px-1 text-gray-600">+(260)772-906-413</p>
            </div>
            <div className=" px-4 py-2 flex">
                <h1 className=" text-primary-content font-semibold">LinkedIn : </h1>
                <p className="px-1 text-gray-600">Rushmore Simuunza</p>
            </div>
            <div className=" px-4 py-2 flex">
                <h1 className=" text-primary-content font-semibold">Location : </h1>
                <p className="px-1 text-gray-600">Lusaka,Zambia</p>
            </div>
            <ul className="flex px-4 py-8">
                {Links.map((items,index) => (
                    <li className="w-5 mx-2" key={index}><a key={index+1} href={items.link}><img src={items.image} alt="link icon" className="w-full h-full object-cover" /></a></li>
                ))}
            </ul>
        </div>
    )
}
export default PersonalInfo;