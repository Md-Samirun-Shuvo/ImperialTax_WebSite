import React from "react";
import "./WelcomeImperialTax.css";
import imperialVideo from "../../assets/video/imperialtax.mp4";
import vedioPoster from "../../assets/video/video-thumb.jpg";

const WelcomeImperialTax = () => {
  // const srcVedio = "https://streamable.com/e0dvcy";
  return (
    <div className="welcomeImperialTax_container">
    
      <div className="container">
        <div className="row py-5">
          <h4 className="text-center">Imperial Tax</h4>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="w-25" />
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            <h4 className="mt-4 py-5">Welcome to Imperial Tax</h4>
            <p className="pt-3">
              Imperial provides you peace of mind providing best accounting,
              auditing, income tax and consultation services year-round either
              physical or virtual.
            </p>
            <p>
              We are specialized in minimizing your personal taxes and corporate
              tax liabilities and professionally defending your income tax,
              payroll and HST related CRA audit to save your hard-earned money.
            </p>
            <button type="submit" class="btn btn-primary mt-4">
              Read More..
            </button>
          </div>
          <div className="col-sm-12 col-md-6 p-3">
            {/* <video
              className="vedio"
              poster={vedioPoster}
              src={srcVedio}
              controls
            ></video> */}
            <video
              className="vedio"
              poster={vedioPoster}
              src={imperialVideo}
              controls
            ></video>
            {/* <iframe className="vedio" src={srcVedio}></iframe> */}
          </div>
        </div>
        <div className="count_section">
          <div className="pt-5">
            <h1 className="text-center pt-5">Helping Small Businesses</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed do
              eiusmod tempor exercitationemut labore.
            </p>
          </div>
          <div className="row py-5">
            <div class="col-md-3 col-xs-6">
              <div class="text-center">
                <h1 class="text-primary fw-bold">30</h1>
                <h6 class="">Employees</h6>
              </div>
            </div>
            <div class="col-md-3 col-xs-6">
              <div class="text-center">
                <h1 class="text-primary fw-bold">2</h1>
                <h6 class="">Location</h6>
              </div>
            </div>
            <div class="col-md-3 col-xs-6">
              <div class="text-center">
                <h1 class="text-primary fw-bold">100</h1>
                <h6 class="">% Satisfaction</h6>
              </div>
            </div>
            <div class="col-md-3 col-xs-6">
              <div class="text-center">
                <h1 class="text-primary fw-bold">114</h1>
                <h6 class="">Happy Customers</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeImperialTax;
