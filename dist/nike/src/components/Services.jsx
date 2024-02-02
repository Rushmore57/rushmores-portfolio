import WebDev from "./webDev"
import NetworkDesign from "./NetworkDesign"
import UiDesign from "./UiDesign"
import DatabaseDesign from "./DatabaseDesign"

const Services = () => {
    return (
        <div className="w-full flex justify-center max-sm:mb-16 max-sm:mt-8">
            <div className="sm:p-4 w-full lg:grid lg:grid-cols-3">
                <WebDev/>
                <NetworkDesign/>
                <UiDesign/>
            </div>
        </div>
    )
}
export default Services