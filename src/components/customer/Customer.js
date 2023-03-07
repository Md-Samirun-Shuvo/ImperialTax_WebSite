import React from "react";
import "./Customer.css";

const Customer = () => {
  return (
    <div className="customer_container">
      <div className="container">
        <div class="row py-2">
          <div className="text-center py-1">
            <h4 className="pt-2 fw-bold">HAPPY CUSTOMERS</h4>
            <div className="d-flex justify-content-center align-items-center">
              <hr className="w-25"/>
            </div>
            <p className="p-3">
              LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADI PISI CING ELIT, SED DO
              EIUSMOD TEMPOR EXERCITATIONEMUT LABORE.
            </p>
          </div>
          <div class="col-sm-12 col-md-6 py-1">
            <div class="testimonial-content">
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor exercitationemut labore Love life’s sweetest.
              </p>
            </div>
            <div class="testimonials-author">
              <div>
                <img
                  src="https://imperialtax.ca/wp-content/uploads/2016/07/review-author-img.png"
                  class="img-circle wp-post-image"
                  alt=""
                />
              </div>
              <div className="ps-2">
                <h3>Mark</h3>
                <h6>(Sales Agent)</h6>
              </div>
              <div class="text-right">
                <ul class="rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </ul>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6 py-1">
            <div class="testimonial-content">
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor exercitationemut labore Love life’s sweetest.
              </p>
            </div>
            <div class="testimonials-author">
              <div>
                <img
                  src="https://imperialtax.ca/wp-content/uploads/2016/07/review-author-img.png"
                  class="img-circle wp-post-image"
                  alt=""
                />
              </div>
              <div className="ps-2">
                <h3>Mark</h3>
                <h6>(Sales Agent)</h6>
              </div>
              <div class="text-right">
                <ul class="rating">
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
