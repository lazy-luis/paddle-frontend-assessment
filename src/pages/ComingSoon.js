import React, { useState } from "react";
import Header from "../components/Header";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

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
      <footer className="ComingSoonFoot">
        <div className="ComingSoonFooter"></div>
        <div className="AllFooter">
          <div className="FooterSocials">
            <BsYoutube />
            <FaFacebookSquare />
            <FaLinkedin />
            <RiInstagramFill />
            <FaTwitterSquare />
          </div>
          <div className="FooterLegal">
            <Link to={"#"}> Terms of services </Link>
            <Link to={"#"}> Privacy policy </Link>
          </div>
          <div className="FooterCopy">
            <p> Copyright 2021 @ Peddle Technologies. All Rights Reserved. </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ComingSoon;
