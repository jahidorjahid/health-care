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
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Aenean commodo ligula.
        </p>
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_01.png" alt="" />
              <h5>Career & Business</h5>
              <p>
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                ulm hedi corper turet suscipit lobortis nisl
              </p>
            </div>
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_02.png" alt="" />
              <h5>Career & Business</h5>
              <p>
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                ulm hedi corper turet suscipit lobortis nisl
              </p>
            </div>
            <div className="col-lg-4 card-custom">
              <img src="/images/about/aboutus_icon_img_03.png" alt="" />
              <h5>Career & Business</h5>
              <p>
                Ut wisi enim ad minim veniam, quis laore nostrud exerci tation
                ulm hedi corper turet suscipit lobortis nisl
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
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
                Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
                ullamcorper ultricies.
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
