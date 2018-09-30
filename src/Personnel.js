import React, { Component } from "react";
import "./Personnel.css";
import background from "./newspapers.jpg";
import Nik from "./me.png";
import Nach from "./nachFix.png";
import Leib from "./leibFix.png";

class Personnel extends Component {
  render() {
    return (
      <div
        className="Personnel"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="personnelContainer">
          <div className="personnelCard">
            <h3>CTO</h3>
            <img alt='' className="headshot" src={Nik} />
            <p className="personnelCardBlurb">
              {" "}
              <strong>Nik Frank</strong> is the DIY master. He brings his vision
              into every project, even ones we haven't yet recognized as
              oppurtunities.<br /> Programming code since {"`"}99
            </p>
            <br />
            <ul className="skills">
              <li>Certified Genius</li>
              <li>Internet Physicist</li>
              <li>The Real Larry David</li>
            </ul>
          </div>

          <div className="personnelCard">
            <h3>COO</h3>
            <img alt='' className="headshot" src={Leib} />
            <p className="personnelCardBlurb">
              {" "}
              <strong>Leibel G</strong> is serious about being serious. Pixel
              perfect is where this guy starts in the morning. He can't be
              bribed, unless you have single malt. Or coffee.
            </p>
            <br />

            <ul className="skills">
              <li>Education Enthusiast</li>
              <li>Sales, Code Junkie</li>
              <li>Reality TV Contestant </li>
            </ul>
          </div>

          <div className="personnelCard">
            <h3>VP</h3>
            <img alt='' className="headshot" src={Nach} />
            <p className="personnelCardBlurb">
              <strong>Nachum England</strong> is a high level thinker who with a
              wide vewpoint. Well versed in traditional Jewish thought, as well
              as Eastern philosopy. This guy makes one mean smoothie.
            </p>
            <br />
            <ul className="skills">
              <li>CSS Perfectionist</li>
              <li>Marketing and Biz Dev</li>
              <li>Really Really Likes Tea</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Personnel;
