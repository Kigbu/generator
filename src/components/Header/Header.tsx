import React from "react";
import useGlobalData from "../../core/hooks/useGlobalData";

const Header = () => {
  const { configData } = useGlobalData();

  return (
    <header
      id="header-sticky"
      className="header-transparent sticky-bar header-green"
    >
      <div className="header-area">
        <div className="container">
          <div className="position-relative">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-2">
                <div className="logo">
                  <a href="/">
                    <img
                      src={configData?.logoUrl}
                      style={{ width: "50px", height: "auto" }}
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-xl-8 col-lg-8 position-static">
                <div className="main-menu text-center">
                  <nav id="mobile-menu">
                    <ul>
                      <li>
                        <a href="/">Home</a>
                      </li>
                      <li>
                        <a href="/generate-rrr">Generate RRR</a>
                      </li>
                      <li>
                        <a href="/payment-status">Check Payment Status</a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="mobile-menu"></div>
              </div>
              <div className="col-xl-2 col-lg-2 d-none d-lg-block">
                <div className="header-btn text-right">
                  <a href="/login" className="x-btn btn-border">
                    Sign In
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
