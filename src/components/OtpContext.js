import React, { createContext, useState } from "react";

const OtpContext = createContext();

const OtpProvider = ({ children }) => {
  const [otpData, setOtpData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const setOtpInfo = (data) => {
    setOtpData(data);
  };

  return (
    <OtpContext.Provider value={{ otpData, setOtpInfo }}>
      {children}
    </OtpContext.Provider>
  );
};

export { OtpContext, OtpProvider };
