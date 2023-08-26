import { LOGO_URL } from "../utils/constants";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName="Login"
  const [btnName, setBtnName] = useState("LOGIN");
const onlineStatus=useOnlineStatus();
const {loggedInUser}=useContext(UserContext);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="w-36 " />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online Status: {onlineStatus?"🟢":"🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
            </li>
          <li className="px-4">
          <Link to="/about">About Us</Link>
          </li>
          <li className="px-4"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to="/grocerry">Grocerry</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName==="LOGIN"
              ? setBtnName("LOGOUT")
              : setBtnName("LOGIN");
            }}
          >
            {loggedInUser}
          </button>

        </ul>
      </div>
    </div>
  );
};

export default Header;
