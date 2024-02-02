
const Cards = (props) => {
    return (
        <div className="max-sm:p-4 p-4">
        <div data-theme= "bumblebee" className="card ronded-md w-full bg-base-100 shadow-xl  ">
            <figure className="px-10 pt-10">
                <img src={props.image} alt="logo" width={100} height={100} />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className=" text-primary card-title" >{props.name}</h2>
                <div className=" flex justify-center card-actions w-full">
                    {props.stats}  
                </div>
            </div>
        </div>
        </div>
    )
}
export default Cards