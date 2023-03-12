import React from "react";
import "./Footer.css";
import footerImg from "../../assets/images/footer-image/colorfull-row.jpg";
const Footer = () => {
  return (
    <>
    <div>
      <img src={footerImg} alt="" srcset="" />
    </div>
      <div className="footer_container">
      <div className="footer_top_container">
        <div className="footer_top_social_icon">
          <i class="bi bi-facebook"></i>
          <i class="bi bi-twitter"></i>
          <i class="bi bi-google"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-linkedin"></i>
        </div>
        <div className="footer_top_copyright">
          <p>Coyright © 2022 imperialtax. All rights reserved.</p>
        </div>
      </div>
      <div className="footer_botom_container">
          <p>
            Made with <i class="bi bi-heart"></i> by{" "}
            <a href="#">Designed by </a>
            <a href="#">AppTheos</a>
          </p>
        </div>
    </div>
    </>
  );
};

export default Footer;
