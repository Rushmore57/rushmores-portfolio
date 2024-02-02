import ResumeOccup from "./ResumeOccup";
import Skills from "./Skills";
import EducationComp from "./EducationComp";
const ResumeContainer = () => {
    return (
        <div className="md:w-full flex justify-center max-sm:mt-8 ">
            <div className="sm:p-4 lg:w-full lg:grid lg:grid-cols-3">
            <ResumeOccup/>
            {/* <EducationComp/> */}
            <EducationComp/>
            <Skills/>
            </div>
        </div>
    )
}
export default ResumeContainer;