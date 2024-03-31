import React from "react";
import OtpTimer from "otp-timer";

const Timer = ({ seconds, minutes }) => {
  const handleClick = () => {
    //desired function to be performed on clicking resend button
    console.log("hangle");
  };
  return (
    <div>
      <OtpTimer seconds={seconds} minutes={minutes} />
    </div>
  );
};

export default Timer;
