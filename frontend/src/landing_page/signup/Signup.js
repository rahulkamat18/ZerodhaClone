import React from "react";

function Signup() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <img
            src="/images/signup.png"
            alt="Signup"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-6 p-5">
          <h1 className="mb-5">Signup now</h1>
          <p className="text-muted">
            Or track your existing application.
          </p>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Your 10 digit mobile number"
              />
            </div>
            <p className="text-muted fs-6">
              You will receive an OTP on your number
            </p>
            <button
              type="submit"
              className="btn btn-primary"
              style={{ width: "100%", padding: "15px" }}
            >
              Continue
            </button>
          </form>
          <p className="text-center mt-3">
            <a href="#" style={{ textDecoration: "none" }}>
              Want to open an NRI account?
            </a>
          </p>
        </div>
      </div>
      <div className="text-center p-5">
        <p className="text-muted">
          I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN.
        </p>
        <p className="text-muted">
          If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the offline forms. For help, <a href="#">click here</a>.
        </p>
      </div>
    </div>
  );
}

export default Signup;