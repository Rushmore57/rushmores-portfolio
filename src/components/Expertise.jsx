import design from "../assets/design.svg"
import maintenance from "../assets/maintenance.svg"
import optimization from "../assets/optimization.svg"
import schedule from "../assets/schedule.svg"
const Expertise = () => {
    return (
        <div className="p-8  max-sm:mb-4 max-sm:border-b max-sm:border-gray-300">
            <div>
                <h1 className="p-4 text-2xl font-bold tracking-wide text-primary-content">My Expertise </h1>
                <div className="flex p-4 ">
                    <div className="w-8 h-8 ">
                        <img src={design} alt="Design image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-2 w-full ">
                        <h1 className=" font-semibold">Responsive Design</h1>
                        <p className=" text-gray-600 py-2 text-sm">
                        A responsive design is a key factor to consider in modern web development. 
                        It ensures that websites and applications adapt seamlessly to different screen 
                        sizes and devices.
                        </p>
                    <hr className="my-4 border-t border-gray-400"/>
                    </div>
                </div>
                <div className="flex p-4 ">
                    <div className="w-8 h-8 ">
                        <img src={optimization} alt="Design image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-2 w-full">
                        <h1 className=" font-semibold">Data Analysis</h1>
                        <p className=" text-gray-600 py-2 text-sm"> 
                        "Informed decisions are the best decisions." 
                        I enjoy deriving valuable insights from raw information for 
                        the purpose of stratagic decision making.
                        </p>
                        <hr className="my-4 border-t border-gray-400"/>
                        
                    </div>
                </div>
                <div className="flex p-4 ">
                    <div className="w-8 h-8 ">
                        <img src={schedule} alt="Design image" className="w-full h-full object-cover"/>
                    </div>
                    <div className="px-2 w-full">
                        <h1 className=" font-semibold">Management</h1>
                        <p className=" text-gray-600 py-2 text-sm"> 
                        Time Management and work management is crucial for on time 
                        project delivery.
                        </p>
                        <hr className="my-4 border-t border-gray-400"/>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Expertise;