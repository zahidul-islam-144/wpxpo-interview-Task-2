import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import LatestPost1 from "../assets/body1/latestPosts/latestPost1.png";
import popularpostB1 from "../assets/body1/popularPost/popularPostB1.png";
import popularpostB2 from "../assets/body1/popularPost/popularPostB2.png";

const PopularPost = () => {
  return (
    <Row className="d-flex justify-content-between flex-wrap align-items-center popularPostRowMain">
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

      <div className="popularPostBottom mt-5">
        {[...Array(2)].map((item, i) => (
          <div className="singlePost">
            <div className="imageBlock">
              <Image src={popularpostB1} fluid />
            </div>

            <div className="contentBlock">
              <div>{i === 0 ? "Skin" : i === 1 ? "TIPS" : ""}</div>
              <div>Vivamus placerat Luctus Neque nec Faucibus</div>
              <div>By Sarfraz Jasim - 29 July, 2023</div>
            </div>
          </div>
        ))}
      </div>
    </Row>
  );
};

export default PopularPost;
