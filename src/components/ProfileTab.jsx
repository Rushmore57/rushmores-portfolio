import profileImage from "../assets/customer1.jpg"

const ProfileTab = () => {
    return(
        <>
        <div data-theme= "wireframe" className="avatar md:hidden ">
            <div className= " my-4 mx-auto w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={profileImage} />
            </div>
        </div>
        <div data-theme= "wireframe" className=" md:hidden">
            <h1 className="text-center text-2xl font-bold">Rushmore Simuunza</h1>
            <p className=" mb-4 text-center">Software Engeener</p>
            <div className="flex justify-center btn-accent">
                <a href="https://wa.me/026772906413">
                    <button  className="btn btn-wide btn-primary mb-4">
                        WhatsApp
                    </button>
                </a> 
            </div>
        </div>
        <div data-theme = "wireframe" className=" max-md:hidden">
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={profileImage} className="max-w-sm rounded-lg shadow-2xl " width={200} height={200} />
                <div>
                <h1 className="text-5xl font-bold">Rushmore Martin Simuunza</h1>
                <p className="py-6">
                    Welcome to my portfolio! I'm a web development specialist 
                    with expertise in both front-end and back-end technologies. 
                    Proficient in languages like HTML, CSS, JavaScript, Python, and Node.JS,
                    I excel in crafting dynamic and responsive web applications. 
                    Explore my projects to see how I leverage frameworks like React.js and Django
                    to deliver scalable and innovative solutions. With a focus on staying current
                    with industry trends, I bring a blend of creativity and technical proficiency to every project. 
                    Let's collaborate to bring your web development vision to life!
                </p>
                <a href="https://wa.me/026772906413">
                    <button  className="btn btn-wide btn-primary mb-4">
                        WhatsApp
                    </button>
                </a>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}
export default ProfileTab;