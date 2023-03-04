import React, { Component } from "react";
import "./nav.css";
import logo from "./../../images/logo.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faBell, faCamera, faEllipsis, faGear, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";


export default class Nav extends Component {
  render() {
    return (
    
      <div className="nav">
        <div className="nav_logo">
          <img src={logo}></img>
        </div>
        <div className="navIcons">
        <FontAwesomeIcon icon={faHouse} style={{color:"white"}}></FontAwesomeIcon>
        </div>
        <div className="navIcons">
        <FontAwesomeIcon icon={faUser} style={{color:"white"}}></FontAwesomeIcon>
        </div>
        <div className="navIcons">
        <FontAwesomeIcon icon={faBell} style={{color:"white"}}></FontAwesomeIcon>
        </div>
        <div className="navIcons">
        <FontAwesomeIcon icon={faCamera} style={{color:"white"}}></FontAwesomeIcon>
        </div>
        <div className="navIcons">
        <FontAwesomeIcon icon={faEllipsis} style={{color:"white"}}></FontAwesomeIcon>
        </div>  
        <div className="navIcons">
        <FontAwesomeIcon icon={faGear} style={{color:"white"}}></FontAwesomeIcon>
        </div>  
      </div>
     
    );
  }
}
