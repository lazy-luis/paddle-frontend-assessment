import React from "react";
import { Link } from "react-router-dom";
import { HiArrowNarrowRight } from "react-icons/hi";

const GotAQuestion = () => {
  return (
    <div className="GotAQuestion">
      <div className="GotAQuestionContent">
        <h2> Got a Question? </h2>
        <p>
          See how Metricks can help your business grow with best Affiliate
          Marketing Tracking Software.
        </p>
        <Link to={"/comingsoon"}>
          <span>Contact Us</span> <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  );
};

export default GotAQuestion;
