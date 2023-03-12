import React from "react";
import "./About.css";
import aboutImg from "../../assets/images/Aboutimage/about-img.jpg";
const About = () => {
  return (
    <>
      <div id="about">
        <div className="about_section">
          <div className="container">
            <div className="p-3">
              <h4 className="pt-5 fw-bold text-center">About Us</h4>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <hr className="w-25" />
            </div>

            <div className="row">
              <h4 className="p-3">Company overview</h4>
              <div className="col-sm-12 col-md-6">
                <p className="p-2">
                  {" "}
                  Company overview With constant changes in accounting
                  practices, business and tax regulations; Imperial Tax &
                  Accounting Services established with experienced and qualified
                  professionals in 2020 to help Canadian individuals, sole
                  proprietors, business corporations and non-profit
                  organizations with quality professional services. Imperial Tax
                  & Accounting Services is a professional accounting firm,
                  proudly providing excellent service to individual &
                  self-employed clients, small & medium size corporations and
                  non-profit organizations since inception. Our experienced team
                  members are committed to provide outstanding services as well
                  as maintain a positive and cooperative relationship with all
                  level of clients to meet their accounting and taxation needs
                  and expectations maintaining numerous Canadian business and
                  tax regulations. We also provide consultation services for
                  business planning to start-up new business, remodelling of
                  existing business, expansion of existing business, etc. with
                  utmost client’s satisfaction. Imperial Tax & Accounting
                  Services believe, every client’s scenario is different but we
                  stand behind our clients and provide our services to best fit
                  client’s needs and make them satisfied. We handle any client’s
                  concerns and address them with appropriate solutions.
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="about_right_content">
                  <img className="img-fluid" src={aboutImg} alt="" srcset="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="history_section">
          <div className="container">
            <div className="row">
              <div className="p-3">
                <h4 className="pt-2">Company history</h4>
                <p className="pt-2">
                  IT IS PLEASURE, BUT BECAUSE THOSE WHO DO NOT KNOW HOW TO
                  PURSUE PLEASURE RATIONALLY ENCOUNTER CONSEQUENCES THAT ARE
                  EXTREMELY PAINFUL. NOR AGAIN IS THERE ANYONE WHO LOVES OR
                  PURSUES OR DESIRES TO OBTAIN PAIN OF ITSELF.
                </p>
              </div>
              <div class="accordion pb-5" id="accordionExample">
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingOne">
                    <button
                      class="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      “In 1999”
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    class="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>start with a small Business</strong> It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout The
                      point of using Lorem Ipsum.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      “In 2005”
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>First Recognition</strong> It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout The
                      point of using Lorem Ipsum.
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header" id="headingThree">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      “In 2016”
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    class="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample"
                  >
                    <div class="accordion-body">
                      <strong>World Most Popular Firm</strong> It is a long
                      established fact that a reader will be distracted by the
                      readable content of a page when looking at its layout The
                      point of using Lorem Ipsum.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
