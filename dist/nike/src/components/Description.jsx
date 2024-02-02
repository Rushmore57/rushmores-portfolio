import IntroCom from "./introCom";
import PersonalInfo from "./PersonalInfo";
import Expertise from "./Expertise";
const Description = () => {
    return (
        <div className=" lg:border-b border-gray-300  lg:grid  lg:grid-cols-3 ">
            <IntroCom/>
            <PersonalInfo/>
            <Expertise/>
        </div>
    )
}
export default Description