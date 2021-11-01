import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <img
            src="/images/hero-img/hero.png"
            alt=""
            className="img-fluid"
            style={{ height: "100%" }}
          />
        </div>
        <section className="container py-5 text-center">
          <h2 className="section-title mt-3">What to Expect From Us</h2>
          <hr />
          <p className="w-50 mx-auto">
            Changes in the healthcare industry usually occur at the legislative
            level, but once enacted these changes have a direct impact on
            facility operations and the use of resources.
          </p>

          <div className="row my-5 mb-3">
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-1.png" alt="" />
              <h5 className="sub-title">Calf Muscle Injury</h5>
              <p>
                A pulled calf muscle occurs when the muscles in the back of your
                lower leg. this injury can complete tearing of the muscle.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-2.png" alt="" />
              <h5 className="sub-title">Ankle Sprain</h5>
              <p>
                A sprained ankle is an injury that occurs when you roll, twist
                or turn your ankle in an awkward way. This can stretch or tear
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-3.png" alt="" />
              <h5 className="sub-title">Dancing Injuries</h5>
              <p>
                Hip injuries: snapping hip syndrome, hip impingement, labral
                tears, hip flexor tendonitis, hip bursitis .
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/h8-custom-icon-4.png" alt="" />
              <h5 className="sub-title">Cerebral Palsy</h5>
              <p>
                Cerebral palsy is a group of disorders that affect movement and
                muscle tone or posture. It's caused by damage ...
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
                  Assessment tests for jobs, also known as pre-employment tests,
                  help hiring managers determine whether a candidate has the
                  skills, work style, knowledge or personality to succeed in a
                  job.
                </p>
                <button className="btn btn-custom mt-4">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        <section className="container py-5 text-center why-us">
          <h2 className="section-title mt-3">Why Choose Us</h2>
          <hr />
          <p className="w-50 mx-auto">
            We’ve been established for over 30 years providing private
            healthcare and supporting local businesses and families
          </p>

          <div className="row my-5 mb-3">
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-2.png" alt="" />
              <h5 className="sub-title">Anonymity</h5>
              <p>
                In health sector, trust is considered important because it
                indirectly influences the quality of health care through patient
                satisfaction
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-3.png" alt="" />
              <h5 className="sub-title">Availability</h5>
              <p>
                Availability – the sufficient supply and appropriate stock of
                health workers, with the competencies and skill‐mix to match the
                health needs of the population.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-4.png" alt="" />
              <h5 className="sub-title">Convenient Place</h5>
              <p>
                Flow diagram of systematic review to identify included studies.
                All financial values were converted to Great Britain pounds
                using a currency conversion
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <img src="/images/why-us/h8-img-5.png" alt="" />
              <h5 className="sub-title">Experience</h5>
              <p>
                Patient experience encompasses the range of interactions that
                patients have with the health care system, including their care
                from health plans, and from ...
              </p>
            </div>
          </div>
        </section>
        <section className="our-news py-5">
          <div className="text-center">
            <h2 className="section-title mt-3">Our News</h2>
            <hr />
            <p className="w-50 mx-auto">
              Medical news and health news headlines posted throughout the day,
              every day.
            </p>
          </div>
          <div className="container my-5">
            <div className="row gy-5 card-deck">
              <div className="col-md-4">
                <div className="card overflow-hidden rounded shadow">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <span className="date">MAY 25, 2018</span>{" "}
                    <span className="category">Cardiology</span>
                    <a href="/" className="card-title">
                      Grown by Nature
                    </a>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <a href="/" className="text-muted read-more">
                        Ream More &gt;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden rounded shadow">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <span className="date">MAY 25, 2018</span>{" "}
                    <span className="category">Cardiology</span>
                    <a href="/" className="card-title">
                      Grown by Nature
                    </a>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <a href="/" className="text-muted read-more">
                        Ream More &gt;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card overflow-hidden rounded shadow">
                  <div className="overflow-hidden">
                    <img
                      className="img-fluid"
                      src="https://housemed.qodeinteractive.com/wp-content/uploads/2018/05/blog-post-img-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="card-body">
                    <span className="date">MAY 25, 2018</span>{" "}
                    <span className="category">Cardiology</span>
                    <a href="/" className="card-title">
                      Grown by Nature
                    </a>
                    <p className="card-text">
                      This is a longer card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <p className="card-text">
                      <a href="/" className="text-muted read-more">
                        Ream More &gt;
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
