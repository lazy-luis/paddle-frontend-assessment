import React from "react";
import Footer from "../components/Footer";
import GotAQuestion from "../components/GotAQuestion";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="AboutPage">
        <div className="AboutHeader">
          <div className="AboutHeaderBackBlur">
            <div className="AboutHeaderBackBlurContent">
              <h4> ABOUT US </h4>
              <h5>
                Built for Saas <br /> and E-commerce
              </h5>
              <p>
                Our tools are easy to set up and use with a user friendly
                dashboard that enables you to set up, launch, automate and
                manage multi-affiliate campaigns in 5 minutes.
              </p>
            </div>
          </div>
        </div>
        <div className="AboutContent">
          <h6>
            Metricks was developed because just like you, we needed a product
            that could give us <span>good value.</span>
          </h6>
          <div className="AboutContentFlex">
            <div className="AboutContentFlexContent">
              <h4> WHY US? </h4>
              <p>
                We pride ourselves in our ability to innovate and create
                world-class tools that provide reliable and efficient
                touchpoints between advertisers and affiliates.
              </p>
            </div>
            <div className="AboutContentFlexContent">
              <h4> GROWING WITH YOU </h4>
              <p>
                Leveraging the best technology, we have developed an all-in-one
                affiliate marketing tracking software, a genius tool to help you
                track, automate and optimize your influencer campaigns, all from
                one dashboard.
              </p>
              <p>
                Our team of experts are constantly brainstorming, testing and
                developing new solutions with only one thing in mind - your
                business growth. Your success is our success and by giving you
                the tools you need to scale, we grow as well.
              </p>
            </div>
          </div>
          <GotAQuestion />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
