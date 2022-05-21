import React from "react";
import { FiArrowRight } from "react-icons/fi";

const Contact = ({ contactChange }) => {
  return (
    <div className="ContactBlurBack">
      <div className="ContactForm">
        <button onClick={() => contactChange(false)}>
          <FiArrowRight />
        </button>
        <h3>
          Hey, we are still in the works,
          <br /> but you can send us a message
        </h3>
        <form>
          <label> First name </label>
          <input type={"text"} placeholder={"Enter your First name"} />
          <label> Last name </label>
          <input type={"text"} placeholder={"Enter your last name"} />
          <label> Email address </label>
          <input type={"email"} placeholder={"Enter your email address"} />
          <label> Tell us what you need help with: </label>
          <textarea
            type={"text"}
            placeholder={'Enter a topic, like " channel problem... "'}
            rows={4}
          ></textarea>
          <button type={"button"}>SEND NOW</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
