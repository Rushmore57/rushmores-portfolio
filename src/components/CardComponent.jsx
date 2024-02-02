import { Cardinfo } from "../constants/elements";
import Stats from "./Stats";
import Cards from "./Cards";

const CardComponent = () => {
    return (
        <>
        <h1 data-theme= "autumn" className=" md:text-center md:text-4xl  text-2xl py-4 px-2 font-bold  ">My Stack</h1>
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-3 ">
        {Cardinfo.map((items,index) => (<Cards stats ={<Stats duration={items.duration} date= {items.date} projects= {items.projects} skill= {items.skill+"%"} level= {items.level} key={index}/>}
         name={items.name} key={index} image={items.logo}/>))}
        </div>
        </>
    )
}
export default CardComponent