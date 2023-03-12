import React from "react";
import "./Service.css";
import icon1 from "../../assets/images/service-image/icon1-white.png";
import icon2 from "../../assets/images/service-image/icon2-white.png";
import icon3 from "../../assets/images/service-image/icon3-white.png";
import icon4 from "../../assets/images/service-image/icon4-white.png";
import icon5 from "../../assets/images/service-image/icon5-white.png";
import icon6 from "../../assets/images/service-image/icon6-white.png";

const services = [
  {
    id: 1,
    name: "Advisor",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon1,
  },
  {
    id: 2,
    name: "Save Money",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon2,
  },
  {
    id: 3,
    name: "Secure Future",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon3,
  },
  {
    id: 4,
    name: "Business Services",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon4,
  },
  {
    id: 5,
    name: "Financial Services",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon5,
  },
  {
    id: 6,
    name: "Transport & Logistics",
    description: "Lorem ipsum dolor sit amet, Let it it floats back to you.",
    img: icon6,
  },
];
console.log(services);
const Service = () => {
  return (
    <>
      <div id="service" className="service_section">
        <div className="container pb-5">
          <div className="p-3">
            <h4 className="pt-5 fw-bold text-center">Our Services</h4>
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <hr className="w-25" />
          </div>
          <div className="row pb-5">
            {services.map((service) => (
              <div key={service.id} className="col-sm-12 col-md-4">
                <div class="service_card">
                  <img src={service.img} alt="" srcset="" />
                  <div class="card-body">
                    <h5 class="card-title">{service.name}</h5>
                    <p class="card-text">
                      {service.description}
                    </p>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
