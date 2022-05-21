import React from "react";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="FooterSocials">
        <a href="https://youtube.com">
          <BsYoutube />
        </a>
        <a href="https://facebook.com">
          <FaFacebookSquare />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com">
          <RiInstagramFill />
        </a>
        <a href="htps://twitter.com">
          <FaTwitterSquare />
        </a>
      </div>
      <div className="FooterLegal">
        <Link to={"#"}> Terms of services </Link>
        <Link to={"#"}> Privacy policy </Link>
      </div>
      <div className="FooterCopy">
        <p> Copyright 2021 @ Peddle Technologies. All Rights Reserved. </p>
      </div>
    </footer>
  );
};

export default Footer;
