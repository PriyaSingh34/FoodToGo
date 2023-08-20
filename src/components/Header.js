import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  // let btnName="Login"
  const [btnName, setBtnName] = useState("LOGIN");
const onlineStatus=useOnlineStatus();
  return (
    <div className="header">
      <div className="logo-container">
        <img src={LOGO_URL} alt="" className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus?"🟢":"🔴"}</li>
          <li>
            <Link to="/">Home</Link>
            </li>
          <li>
          <Link to="/about">About Us</Link>
          </li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/grocerry">Grocerry</Link></li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btnName==="LOGIN"
              ? setBtnName("LOGOUT")
              : setBtnName("LOGIN");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
