import React from "react";

const Footer = () => {
  return (
    <footer className="footer-bg footerBg">
      <div className="copyright-area">
        <div className="container">
          <div className="copyright-border">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="copyright">
                  <p>Copyright © 2023 Flopay. All rights reserved</p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="footer-menu text-left text-md-right">
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
