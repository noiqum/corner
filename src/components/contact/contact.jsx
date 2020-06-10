import React, { Component } from "react";
import ContactImage from "../../css/images/contact-sm.jpg";

export class contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contact__frame">
          <img className="comtact__image" src={ContactImage} alt="shop_image" />
          <div className="contact__info">
            <p>Corner</p>
            <p>
              Beacontree Heath, 481 Wood Ln, Dagenham RM10 7RA, United Kingdom
            </p>
            <p>+442089841630</p>
            <p>Open Mon-Fri 9AM-8PM Sat 11AM-4PM</p>
          </div>
        </div>
      </div>
    );
  }
}

export default contact;
