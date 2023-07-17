import React from "react";
import { Helmet } from "react-helmet";
import shape1 from "../../assets/img/shape/shape1.png";
import shape2 from "../../assets/img/shape/shape2.png";
import shape3 from "../../assets/img/shape/shape3.png";
import shape4 from "../../assets/img/shape/shape4.png";
import shape5 from "../../assets/img/shape/shape5.png";
import shape6 from "../../assets/img/shape/shape6.png";
import sliderImage from "../../assets/img/slider/slider-image.png";
import icon from "../../assets/img/icon/icon.png";
import icon2 from "../../assets/img/icon/icon2.png";
import icon3 from "../../assets/img/icon/icon3.png";
import shapeS1 from "../../assets/img/shape/shape-s-1.png";
import shapeS2 from "../../assets/img/shape/shape-s-2.png";
import useGlobalData from "../../core/hooks/useGlobalData";
import { Link } from "react-router-dom";

const Home = () => {
  const { configData } = useGlobalData();
  return (
    <>
      <Helmet>
        <title>Flopay | Homepage</title>
        <meta name="description" content="#" />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="slider-area fix">
          <div className="shape-slider">
            <img className="shape shape-1 " src={shape1} alt="" />
            <img className="shape shape-2  " src={shape2} alt="" />
            <img className="shape shape-3 " src={shape3} alt="" />
            <img className="shape shape-4 " src={shape4} alt="" />
            <img className="shape shape-5 " src={shape5} alt="" />
            <img className="shape shape-6 " src={shape6} alt="" />
          </div>
          <div className="single-slider slider-height header-bg d-flex align-items-center">
            <div className="container">
              <div className="row">
                <div className="col-xl-5 col-lg-6">
                  <div className="slider-text">
                    <h2 className="wow fadeInUp animated" data-wow-delay="0.4s">
                      <span>{configData?.heroTitle}</span>
                    </h2>
                    <p className="wow fadeInUp animated" data-wow-delay="0.9s">
                      Pay your tax for greater development
                    </p>
                    <Link to="/generate-rrr">
                      <button
                        type="button"
                        className="x-btn btn-success green-btn wow fadeInUp animated"
                        data-wow-delay="1.5s"
                      >
                        Generate RRR
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 offset-xl-1">
                  <div
                    className="slider-img  mt-50 wow fadeInRight animated"
                    data-wow-duration="2.5s"
                  >
                    <img src={sliderImage} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="how-work-area pos-relative pt-150 pb-120">
          <div className="shape-section">
            <img className="shape shape-s-1 " src={shapeS1} alt="" />
            <img className="shape shape-s-2 " src={shapeS2} alt="" />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 offset-xl-3">
                <div className="section-title text-center mb-70">
                  <h2>Features</h2>
                  <p>Start making payments seamlessly</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4">
                <div className="how-work mb-30">
                  <div className="how-work-icon">
                    <img src={icon} alt="" />
                  </div>
                  <div className="how-work-text">
                    <h3>Generate RRR</h3>
                    <p>
                      Generate RRR number to make payment to the all revenue
                      service in yobe state
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="how-work mb-30">
                  <div className="how-work-icon">
                    <img src={icon2} alt="" />
                  </div>
                  <div className="how-work-text">
                    <h3>Make Payments</h3>
                    <p>
                      Multiple payment methods available for you to choose your
                      preferred payment option.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="how-work mb-30">
                  <div className="how-work-icon">
                    <img src={icon3} alt="" />
                  </div>
                  <div className="how-work-text">
                    <h3>Check Payment Status</h3>
                    <p>Check your payment status to verify your payment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
