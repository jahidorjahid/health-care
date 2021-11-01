import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-page">
      <header>
        <div className="d-flex justify-content-center align-items-center">
          <h2>ABOUT</h2>
        </div>
      </header>

      <section className="first-section text-center">
        <h2>We will Help you With</h2>
        <hr />
        <p>
          We will help you understand how to get, pay for, and use health
          insurance ... This is great because it means you can take care of any
          small health problem.
        </p>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_01.png" alt="" />
              <h5>Career & Business</h5>
              <p>
                Medical billers and coders perform a specialized role in today's
                healthcare practices. Job titles in this field include medical
                billing and coding specialist...
              </p>
            </div>
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_02.png" alt="" />
              <h5>Mental & Psysical Care</h5>
              <p>
                Mental health professionals should encourage patients to monitor
                and chart their own weight and should sensitize patients and
                their caregivers to the
              </p>
            </div>
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_03.png" alt="" />
              <h5>People & Relationships</h5>
              <p>
                As physicians, we often like to think that the doctor- patient
                relationship is the key to effective health care. In reality,
                while the doctor-patient ...
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="second-section">
        <div className="row">
          <div className="col-lg-6 p-custom">
            <div>
              <h2 className="section-title w-50">
                The Health Center National Hospital
              </h2>
              <p className="my-5">
                Health care quality and patient safety are deeply connected.
                Both are central to ODPHP’s mission and efforts to improve the
                health of all Americans.
              </p>
              <strong>Victoria Fernandez</strong>
              <span className="d-block">CARDIAC SURGERY</span>
            </div>
          </div>

          <div className="col-lg-6">
            <img
              className="img-fluid"
              src="/images/about/aboutus_img_02.jpg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
