import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";
import { NavLink } from "react-router-dom";
import fitmax2 from '../../assets/images/fItmax2.svg'
// import { color, style } from "@mui/system";


export default function Header() {


  const logo = fitmax2
  return (
    <>
      <MDBNavbar light bgColor="light" style={{padding:"0px"}} > 
        <MDBContainer fluid style={{flexDirection:"column", backgroundColor:"#142738", paddingTop:"10px"}}>
          <MDBNavbarBrand href="/">
            <img
              src={logo}
              height="100%"
              width={"300px"}
              alt=""
            />
          </MDBNavbarBrand>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="Fitness"
                style={{color: "white"}}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Fitness
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="Workouts"
                style={{color: "white"}}
                className={({ isActive }) =>
                  isActive ? "nav-link active" : "nav-link"
                }
              >
                Workouts
              </NavLink>
            </li>
          </ul>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}
