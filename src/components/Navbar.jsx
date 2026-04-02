
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = ( {card}) => {

  
  return (
    <div className="navbar w-[90%] mx-auto">
      <div className="navbar-start">
        <div className="flex items-center justify-center gap-1 font-bold text-xl">
          <img className="w-10 h-10 object-cover rounded-xl" src="/public/image.png" /> Car Rental 
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className="relative">
          <div className="text-red-500 text-3xl"><FaCartArrowDown /></div>
          <p className="bg-green-400 rounded-full flex items-center justify-center absolute w-4 h-4 -top-3 left-4"><span className="text-xs font-bold">{card.length}</span></p>
        </div>
        <a className="btn bg-red-500 rounded-full text-white"> Get in Touch</a>
      </div>

      
    </div>
  );
};

export default Navbar;
