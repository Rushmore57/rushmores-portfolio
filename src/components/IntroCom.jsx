const IntroCom = () => {
    return (
        <div className="p-8 max-sm:mb-4  lg:border-r border-gray-300">
            <div>
                <h1 className="p-4 text-2xl font-bold tracking-wide text-primary-content">What I Do </h1>
                <h1 className="p-4 text-primary-content font-semibold">
                I am a seasoned Software Developer with a focus on Web Development. 
                Additionally, I excel as a data analyst, proficient in the interpretation and 
                utilization of data to inform strategic decision-making. 
                My adeptness extends to building and maintaining robust software systems, 
                ensuring seamless functionality and optimal performance.
                </h1>
                <p className="py-2 px-4 text-gray-600 text-sm">
                I specialize in developing responsive user interfaces and high-speed web applications, 
                proficient in both front-end and back-end technologies.
                </p>
                <div className="p-4">
                    <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="btn btn-accent btn-md btn-outline">Print Resume</button>
                </div>
            </div>
            <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Error!</h3>
    <p className="py-4">This feature is currently unavailable.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className=" btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
        </div>
    )
}
export default IntroCom;