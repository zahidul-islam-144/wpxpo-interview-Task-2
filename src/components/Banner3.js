import React from "react";
import { Image, Row } from "react-bootstrap";
import banner3Image from "../assets/body1/banner3/banner3Image.png";
import { headerIcons } from "../utils/utils";

const Banner3 = () => {
  return (
    <>
      <Row className="banner3_RowMain mt-5">
        <div>
          <div className="imageBlock">
            <Image src={banner3Image} fluid />
          </div>
          <div className="contentBlock">
            <div>Morbi Porttitor</div>
            <div>
              Onvallis porttitor ligula leo a lectus. Donec id venenatis magna.
              Vivamus placerat luctus neque nec faucibus. Aliquam Gravida eu
              Tortor vitae tempor. . Mauris condimentum scelerisque ante nec
              ultricies. Vivamus tincidunt nibh velit!
            </div>
            <div>
              <div>
                <ul>
                    {headerIcons.map((icon) => (
                    <li>
                        <span>{icon?.icon}</span>
                    </li>
                    ))}
                </ul>
                <div className="postNum">(85 Posts)</div>
              </div>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Banner3;
