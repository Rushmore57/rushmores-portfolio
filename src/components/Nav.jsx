import { NavLinks } from "../constants/elements";
const Nav = () => {
  return (
    <div data-theme = "lemonade" className="navbar shadow-lg bg-base-100 sticky z-10 top-0">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" title="list" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {NavLinks.map((items,index) => (
            <li key={index}className="p-2 text-primary font-semibold ">{items.title}</li>
          ))}
          </ul>
        </div>
        <div className=" max-sm:hidden">
          <a className=" btn btn-ghost text-xl">Portfolio</a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        {NavLinks.map((items,index) => (
            <li key={index}className="  cursor-pointer p-2 text-primary-content font-semibold ">{items.title}</li>
          ))}
        </ul>
      </div>
      <div className="navbar-end max-sm:hidden">
        <a className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Print Resume</a>
      </div>
      <dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Error!</h3>
    <p className="py-4">This feature is currently unavailable.</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  )
}

export default Nav;