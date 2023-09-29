import { useState, useEffect } from "react";
import { FaShoppingCart } from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { MdModeNight, MdLightMode } from "react-icons/md"
const Navbar = () => {
  const [mode, setMode] = useState(false);

  const { cart } = useSelector((state) => state);

  function changeMode() {
    setMode(!mode);
  }
  useEffect(() => {
    if (mode) {

      document.getElementsByClassName("darkMode").innerHTML = "dark";


      document.body.classList.add("active");
    }
    else {
      document.getElementsByClassName("darkMode").innerHTML = "light";

      document.body.classList.remove("active");
    }


  })

  return (
    <div >
      <nav className="flex justify-between items-center h-20 max-w-6xl mx-auto">

        <NavLink to="/">
          <div className="ml-5">
            <img src="../logo.png" className="h-14" />
          </div>
        </NavLink>

        <div className="flex items-center justify-evenly font-medium text-slate-100 mr-5 space-x-6">
          <div className="w-[50px] h-5 rounded-md text-center pb-2">

            <button onClick={changeMode}>
              {
                mode ? <MdLightMode /> : <MdModeNight />
              }
            </button>

          </div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                <span
                  className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white"
                >{cart.length}</span>
              }

            </div>
          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
