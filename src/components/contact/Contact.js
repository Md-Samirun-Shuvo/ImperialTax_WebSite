import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jb96gwt",
        "template_p88uf3w",
        form.current,
        "IJ2Of9QNiSZnaNawL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact_container pb-5" id="contact">
      <div className="container pb-5">
        <h4 className="text-center pt-5">Contact with us</h4>
        <div className="d-flex justify-content-center align-items-center">
          <hr className="w-25" />
        </div>
        <div className="row pb-5 mt-2">
          <div className="col-sm-12 col-md-6 py-2">
            <div className="p-1">
              <h4 className="py-3">Request a Call Back</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adi pisi cing elit, sed
                do eiusmod tempor exercitationemut.
              </p>
              <p>
                For Investment: Neque porro quisquam est, qui dolorem ipsum quia
                dolor sit amet, consectetur, adipis civelit sed quia non qui
                dolorem or phone +11 987 654 3210 ipsum quia dolor sit amet,
                consectetur.
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 py-2">
            <div className="p-1">
              <form ref={form} onSubmit={sendEmail}>
                <div class="mb-3">
                  <input
                    name="name"
                    type="text"
                    class="form-control"
                    placeholder="Your Name"
                  />
                </div>
                <div class="mb-3">
                  <input
                    name="email"
                    type="email"
                    class="form-control"
                    placeholder="Your Email"
                  />
                </div>
                <div class="mb-3">
                  <input
                    name="phone"
                    type="text"
                    class=" form-control"
                    placeholder="Your Number"
                  />
                </div>
                <div>
                  <select
                    name="discussTopic"
                    class="form-select"
                    aria-label="Default select example"
                  >
                    <option value="">I would like to discuss:</option>
                    <option value="Finance Trading">Finance Trading</option>
                    <option value="Stock Trading">Stock Trading</option>
                    <option value="Retirement">Retirement</option>
                    <option value="other">other</option>
                  </select>
                </div>
                <button type="submit" class="btn btn-primary mt-3 px-5">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
