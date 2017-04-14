import React from "react";

import "./ThankYou.css";

import thanks from "../../assets/thanks.gif";

export default function ThankYou()  {
  return (
    <div className="thank-you">
      <img role="presentation" src={thanks}
      />
        <h3>Thank you for your Purchase!</h3>
    </div>
  )
}
