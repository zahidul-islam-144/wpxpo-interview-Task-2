import React from "react";
import { CarouselCaption, Carousel, Image } from "react-bootstrap";
import bannerImage from "../assets/banner/bannerImage.png";
import { AiOutlineArrowRight } from "react-icons/ai";

const Banner = () => {
  return (
    <Carousel data-bs-theme="dark">
      {[...Array(3)].map(() => (
        <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src={bannerImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="captionBlock">
              <div className="contentSegment segment1">
                <p>SKIN</p>
              </div>
              <div className="contentSegment segment2">
                Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat
              </div>
              <div className="contentSegment segment3">
                By Sarfraz Jasim - 29 July, 2023
              </div>
              <div className="contentSegment segment4">
                <p>
                  Continue Reading
                  <span>
                    &nbsp;&nbsp;
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
      {/* <Carousel.Item>
          <img
            className="d-block w-100 bannerImage"
            src={bannerImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <div className="captionBlock">
              <div className="contentSegment segment1">
                <p>SKIN</p>
              </div>
              <div className="contentSegment segment2">
                Six Hyaluronic Serums For Glowing Summer Skin Vivamus Placerat
              </div>
              <div className="contentSegment segment3">
                By Sarfraz Jasim - 29 July, 2023
              </div>
              <div className="contentSegment segment4">
                <p>
                  Continue Reading
                  <span>
                    &nbsp;&nbsp;
                    <AiOutlineArrowRight />
                  </span>
                </p>
              </div>
            </div>
          </Carousel.Caption>
        </Carousel.Item> */}
    </Carousel>
  );
};

export default Banner;
