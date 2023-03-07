import React from "react";
import "./TopBar.css";

const TopBar = () => {
  return (
    <>
      <div className="topBar_section">
      <div className="container">
        <div className="topBar_container">
          <div className="yearOfExperience">
            <span>We have over 15 years of experience</span>
          </div>
          <div className="phoneContact">
            <span>
              <i class="bi bi-telephone"></i> +1 (416) 505-6518
            </span>
          </div>
          <div className="officeLocation">
            <span>
              <i class="bi bi-geo-alt"></i> 786 South Park Avenue, Canada
            </span>
          </div>
          <div className="serviceHours">
            <span>
              <i class="bi bi-alarm"></i> Mon to Fri 08:00 - 16:30
            </span>
          </div>
        </div>
        <div className="leftClipPath"></div>
        <div className="rightClipPath">asdf</div>
      </div>
      </div>
    </>
  );
};

export default TopBar;
