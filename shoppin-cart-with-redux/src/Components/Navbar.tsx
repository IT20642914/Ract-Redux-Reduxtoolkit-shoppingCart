//rafce

import { useNavigate } from "react-router-dom";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";


const Header = () => {
  const navigate = useNavigate();
//   const state = useSelector((state: any) => state.cart)
//   const IsLogin = useSelector((state: any) => state.login.isLoggedIn)
//   const username = useSelector((state: any) => state.login.username)
//   console.log("login state", IsLogin)
  function handleClick() {
    navigate('/login')
  }



//   const Handlechange = () => {
//     console.log("logout")
//     const dispatch = useDispatch();
//    // dispatch(setlogout());
//     handleClick();
    

//   }

  return (

    <nav className="navbar navbar-inverse navbar-fixed-top  navbar-expand-lg navbar-dark bg-dark py-3 shadow-sm">
      <div className="container-fluid">
        <a className="navbar-brand fw-bold fs-4" href="/">
          REDUX-TOOLKIT- FAKE-STORE
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="/store">
                store <span className="sr-only">(current)</span>
              </a>
            </li>

          </ul>
          <div className="buttons mx-auto">

            <ul>
     
              
                 < NavLink to="/cart" className="btn btn-outline-light mx-1">
                <i className="fa fa-shopping-cart mx-2" aria-hidden="true"></i> Cart
         
              </NavLink>



            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Header;
