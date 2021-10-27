import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <section className="container py-5 text-center">
          <h2 className="section-title mt-3">What to Expect From Us</h2>
          <hr />
          <p className="w-50 mx-auto">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet voluptates repudiandae sint et
            molestiae non recusandae aliquetenean
          </p>

          <div className="row my-5 mb-3">
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-1.png" alt="" />
              <h5 className="sub-title">Calf Muscle Injury</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-2.png" alt="" />
              <h5 className="sub-title">Ankle Sprain</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-3.png" alt="" />
              <h5 className="sub-title">Dancing Injuries</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-4.png" alt="" />
              <h5 className="sub-title">Cerebral Palsy</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
          </div>
        </section>
        <section className="container-fluid">
          <div className="row">
            <div className="col-md-6 px-0">
              <img
                src="/images/hero-img/h8-img-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-6 d-flex align-items-center bg-color py-5">
              <div className="mx-auto w-50">
                <h2 className="section-title text-white">
                  What Does Your Next Assessment Involve?
                </h2>
                <p className="my-4">
                  Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat duis autem vel eum iriure augue duis
                  dolore.
                </p>
                <button className="btn btn-custom mt-4">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 text-center why-us">
          <h2 className="fw-bold section-title mt-3">Why Choose Us</h2>
          <hr />
          <p className="w-50 mx-auto">
            Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet voluptates repudiandae sint et
            molestiae non recusandae aliquetenean
          </p>

          <div className="row my-5 mb-3">
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-2.png" alt="" />
              <h5 className="sub-title">Anonymity</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-3.png" alt="" />
              <h5 className="sub-title">Availability</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-4.png" alt="" />
              <h5 className="sub-title">Convenient Place</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-5.png" alt="" />
              <h5 className="sub-title">Experience</h5>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
