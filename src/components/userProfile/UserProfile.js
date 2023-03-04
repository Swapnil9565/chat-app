import React, { Component } from "react";
import "./userProfile.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faEnvelope, faMessage, faPhone, faVideo } from "@fortawesome/free-solid-svg-icons";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2010/07/23/20/419247.jpg?quality=75&width=990&auto=webp&crop=324:430,smart" />
          </div>
          <h4>Mark Zukerbarg</h4>
          <p>CEO & Founder at Meta</p>
        <div className="icons">
          <div className="Icon">
            <FontAwesomeIcon icon={faPhone} style={{color:"white"}}></FontAwesomeIcon>

            </div>
            <div className="Icon">
            <FontAwesomeIcon icon={faMessage} style={{color:"white"}}></FontAwesomeIcon>

            </div>
            <div className="Icon">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"white"}}></FontAwesomeIcon>

            </div>
            <div className="Icon">

            <FontAwesomeIcon icon={faEllipsis} style={{color:"white"}}></FontAwesomeIcon>
            </div>
          </div>
        
        </div>

        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
