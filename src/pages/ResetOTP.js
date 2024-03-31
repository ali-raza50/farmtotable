import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function ResetOTP() {
  let navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const email = location.state?.email;
  // const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [timerCount, setTimerCount] = useState(60);
  const [otpInput, setOtpInput] = useState(["", "", "", ""]);
  const [disableResend, setDisableResend] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimerCount((prevCount) => {
        if (prevCount === 0) {
          clearInterval(interval);
          setDisableResend(false);
          return 60;
        }
        return prevCount - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleOtpInputChange = (index, value) => {
    const updatedOtpInput = [...otpInput];
    updatedOtpInput[index] = value;
    setOtpInput(updatedOtpInput);
  };

  const resendOTP = () => {
    if (disableResend) return;
    axios
      .post("http://localhost:8080/send_recovery_email", {
        OTP: otp,
        recipient_email: email,
      })
      .then(() => {
        setDisableResend(true);
        setTimerCount(60);
      })
      .catch(console.log);
  };

  const verifyOTP = () => {
    // const enteredOTP = otpInput.join("");
    // if (enteredOTP === otp) {
    //   // OTP is correct, navigate to the next page
    //   navigate("/resetPassword");
    //   return;
    // }
    navigate("/resetPassword", { state: { email: email } });
    // alert("The code you have entered is not correct, please try again.");
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-gray-50"
      style={{ minHeight: "100vh" }}
    >
      <div className="bg-white px-4 py-5 shadow-lg mx-auto w-100 max-w-lg rounded-3xl">
        <div className="d-flex flex-column justify-content-center text-center space-y-2">
          <div className="font-weight-bold fs-3">Email Verification</div>
          <div className="text-sm text-gray-400">
            We have sent a code to your email {email}
          </div>
        </div>

        <form>
          <div className="d-flex flex-column space-y-5">
            <div className="d-flex justify-content-between mx-auto w-100 max-w-md">
              {Array.from({ length: 4 }, (_, index) => (
                <div key={index} className="w-100">
                  <input
                    maxLength="1"
                    className="w-100 h-100 d-flex justify-content-center align-items-center text-center px-3 rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                    type="text"
                    value={otpInput[index]}
                    onChange={(e) =>
                      handleOtpInputChange(index, e.target.value)
                    }
                  />
                </div>
              ))}
            </div>

            <div className="d-flex flex-column space-y-2">
              <button
                onClick={verifyOTP}
                className="btn btn-primary"
                style={{ padding: "0.75rem 0", fontSize: "1rem" }}
              >
                Verify Account
              </button>

              <div className="d-flex flex-row justify-content-center align-items-center text-center text-sm text-gray-500">
                <span>Didn't receive code?</span>
                <button
                  onClick={resendOTP}
                  className={`btn ${disableResend ? "disabled" : ""}`}
                  style={{
                    color: disableResend ? "gray" : "blue",
                    cursor: disableResend ? "not-allowed" : "pointer",
                    textDecoration: disableResend ? "none" : "underline",
                    fontSize: "0.875rem",
                  }}
                >
                  {disableResend
                    ? `Resend OTP in ${timerCount}s`
                    : "Resend OTP"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
