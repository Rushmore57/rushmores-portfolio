import { Cardinfo } from "../constants/elements"
const Skills = () => {
    return (
        <div className=" sm:mt-10 md:px-6  max-sm:px-4 lg:mt-0 md:mt-10 lg:py-28">
        <div className=" lg:shadow-lg px-4 border border-gray-300 ">
        <h1 className="px-4 py-8 text-2xl font-bold tracking-wide text-primary-content">Skills</h1>

            <div className="">
            {Cardinfo.map((Item,index) => (
                <div key={index} className="py-2">
                    <h1 key={index+1}>{Item.name}</h1>
                    <progress key={index+2} className="progress progress-primary w-full" value={Item.skill} max="100"></progress>
                </div>
            ))}
            </div>
        </div>
        <div className=" lg:shadow-lg mt-10 px-4 border border-gray-300">
            <h1 className="px-4 py-8 text-2xl font-bold tracking-wide text-primary-content">Languages</h1>
            <div className="py-4">
                <h1>English</h1>
                <progress className="progress progress-primary w-full" value={95} max="100"></progress>
                <h1>Bemba</h1>
                <progress className="progress progress-primary w-full" value={85} max="100"></progress>
                <h1>Nyanja</h1>
                <progress className="progress progress-primary w-full" value={70} max="100"></progress>
                <h1>Lozi</h1>
                <progress className="progress progress-primary w-full" value={65} max="100"></progress>
            </div>
        </div>
        </div>
    )
}
export default Skills