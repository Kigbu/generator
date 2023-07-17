import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PreLoader from "./components/Preloader/PreLoader";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import GenerateRrr from "./pages/GenerateRrr/GenerateRrr";
import PaymentStatus from "./pages/PaymentStatus/PaymentStatus";
import Footer from "./components/Footer/Footer";
import useCachedResources from "./core/hooks/useCacheResource";
import GlobalContext from "./core/context/global-context";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const { isLoadingComplete, configData, setConfigData } = useCachedResources();

  return (
    <>
      <GlobalContext.Provider value={{ configData, setConfigData }}>
        <Router>
          <Helmet></Helmet>
          <PreLoader />

          {!isLoadingComplete ? (
            <div>
              <ClipLoader
                color={"#ffffff"}
                loading={true}
                cssOverride={override}
                size={50}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/generate-rrr" element={<GenerateRrr />} />
                <Route path="/payment-status" element={<PaymentStatus />} />
              </Routes>
              <Footer />
            </>
          )}

          <Helmet>
            <script src="./assets/js/vendor/modernizr-3.5.0.min.js" />
            <script src="./assets/js/vendor/jquery-1.12.4.min.js" />
            <script src="./assets/js/popper.min.js" />
            <script src="./assets/js/bootstrap.min.js" />
            <script src="./assets/js/owl.carousel.min.js" />
            <script src="./assets/js/isotope.pkgd.min.js" />
            <script src="./assets/js/one-page-nav-min.js" />
            <script src="./assets/js/slick.min.js" />
            <script src="./assets/js/jquery.meanmenu.min.js" />
            <script src="./assets/js/ajax-form.js" />
            <script src="./assets/js/wow.min.js" />
            <script src="./assets/js/aos.js" />
            <script src="./assets/js/jquery.scrollUp.min.js" />
            <script src="./assets/js/imagesloaded.pkgd.min.js" />
            <script src="./assets/js/jquery.magnific-popup.min.js" />
            <script src="./assets/js/plugins.js" />
            <script src="./assets/js/main.js" />
          </Helmet>
        </Router>
      </GlobalContext.Provider>
    </>
  );
}

export default App;

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};
