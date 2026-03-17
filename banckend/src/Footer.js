//import React from "react";

const Footer = () => {
  return (
    <footer className="text-muted pt-4 pb-3" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="container">

      
        <div className="footer-top pt-5 pb-4" style={{ borderBottom: "1px solid #ddd" }}>
          <div className="row">

           
            <div className="col-md-3">
              <img src="/assets/logo.png" alt="ShreeVest Logo" style={{ width: "140px", marginBottom: "10px" }} />
              <p className="small">© 2026 ShreeVest Fintech Pvt. Ltd.</p>
              <p className="small">All rights reserved.</p>
            </div>

           
            <div className="col-md-2">
              <h6 className="fw-bold">Account</h6>
              <a href="#">Open account</a>
              <a href="#">Minor account</a>
              <a href="#">Portfolio</a>
              <a href="#">Fund transfer</a>
              <a href="#">MTF</a>
            </div>

            
            <div className="col-md-2">
              <h6 className="fw-bold">Support</h6>
              <a href="#">Contact us</a>
              <a href="#">Help center</a>
              <a href="#">File complaint</a>
              <a href="#">Track status</a>
              <a href="#">Downloads</a>
            </div>

            
            <div className="col-md-2">
              <h6 className="fw-bold">Company</h6>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Blog</a>
              <a href="#">Open source</a>
              <a href="#">Referral</a>
            </div>

            
            <div className="col-md-3">
              <h6 className="fw-bold">Quick links</h6>
              <a href="#">Market basics</a>
              <a href="#">Financial terms</a>
              <a href="#">Investment tips</a>
              <a href="#">Calculators</a>
              <a href="#">Learning hub</a>
            </div>

          </div>
        </div>

        
        <p className="small mt-3">
          ShreeVest Fintech Pvt. Ltd.: A simulation-based financial learning platform designed for educational purposes only.
          This platform does not facilitate real trading or investment. Users are provided with virtual funds to practice investing in a risk-free environment.
        </p>

        <p className="small">
          This platform is intended for users below 18 years of age to learn financial concepts and investment strategies.
          All data, including stock prices and performance, may be simulated or delayed.
        </p>

        <p className="small">
          For queries: <a href="mailto:support@shreevest.com">support@shreevest.com</a>
        </p>

        <p className="small">
          © 2026 ShreeVest Fintech Pvt. Ltd. |
          <a href="#"> Terms & Conditions</a> |
          <a href="#"> Privacy Policy</a> |
          <a href="#"> Disclaimer</a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;