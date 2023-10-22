import React from "react";
import { Image, Row } from "react-bootstrap";
import LatestPost1 from "../assets/body1/latestPosts/latestPost1.png";

const LatestPosts = () => {
  return (
    <>
      <div className="horizontalBreakLine">
        <fieldset>
          <legend>Latest Posts</legend>
        </fieldset>
      </div>
      
      <Row className="d-flex justify-content-between flex-wrap align-items-center latestPostRowMain">
        {[...Array(3)].map((item, i) => (
          <div className="singlePostBlock">
            <div className="imageBlock">
              <Image src={LatestPost1} fluid />
            </div>

            <div className="contentBlock">
              <div>{i === 0 ? "Hair" : i === 1 ? "MAKEUP" : "TIPS"}</div>
              <div>Vivamus placerat Luctus Neque nec Faucibus</div>
              <div>By Sarfraz Jasim - 29 July, 2023</div>
            </div>
          </div>
        ))}
      </Row>
    </>
  );
};

export default LatestPosts;
