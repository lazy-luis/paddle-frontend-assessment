import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const ComingSoon = () => {
  const [firstName, firstNameState] = useState("");
  const [lastName, lastNameState] = useState("");
  const [email, emailState] = useState("");
  return (
    <>
      <Header />
      <div className="ComingSoon">
        <h1> SOMETHING AWESOME IS COMING SOON </h1>
        <h3>
          Your all-in-one affiliate marketing tracking software
          <span> track, automate</span> and <span>optimize</span> your campaigns
        </h3>
        <div className="CountdownTimer">
          <div className="CountdownBlock">
            <p> 7 </p>
            <label> Days </label>
          </div>
          <div className="CountdownBlock">
            <p> 24 </p>
            <label> Hours </label>
          </div>
          <div className="CountdownBlock">
            <p> 54 </p>
            <label> Minutes </label>
          </div>
          <div className="CountdownBlock">
            <p> 11 </p>
            <label> Seconds </label>
          </div>
        </div>
        <div className="WaitingList">
          <div className="WaitingListInputs">
            <input
              type={"text"}
              placeholder={"First Name..."}
              value={firstName}
              onInput={(e) => firstNameState(e.target.value)}
            />
            <input
              type={"text"}
              placeholder={"Last Name..."}
              value={lastName}
              onInput={(e) => lastNameState(e.target.value)}
            />
          </div>
          <div className="WaitingListMailBtn">
            <input
              type={"email"}
              placeholder={"Enter your email address..."}
              value={email}
              onInput={(e) => emailState(e.target.value)}
            />
            <button> JOIN OUR WAITING LIST </button>
          </div>
        </div>
      </div>
      <Footer ComingSoon={true} />
    </>
  );
};

export default ComingSoon;
