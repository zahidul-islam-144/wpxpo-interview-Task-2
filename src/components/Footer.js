import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import { footerIcons, footerMenuItems1, topNavIcons } from "../utils/utils";
import footerImage from "../assets/body1/footer/footerImage.png"


const Footer = () => {
  return (
    <Container fluid>
      <Row className="footerRowMain">
        <div className="footerTop">
        {/* 1st */}
          <div>
            <div className="text-start">CATEGORIES</div>
            {
                footerMenuItems1.map((item)=> 
                <div>
                    <div>{item?.item}</div>
                    <div>({item?.number})</div>
                </div>)
            }
          </div>

        {/* 2nd */}
          <div>
            <div>POPULAR POST</div>
            {
                [...Array(3)].map(()=><div>
                <div>
                    <Image src={footerImage}/>
                </div>
                <div>
                    <p>Vivamus placerat Luctus Neque nec Faucibus</p>
                    <p>7 Days ago</p>
                </div>
            </div>)
            }
          </div>

        {/* 3rd */}
          <div>
            <div>GALLERY</div>
            <div>
               {
                [...Array(3)].map(()=> <div><Image src={footerImage}/></div>)
               }
            </div>
            <div>
               {
                [...Array(3)].map(()=> <div><Image src={footerImage}/></div>)
               }
            </div>
            <div></div>
          </div>
        </div>

        <div className="footerBottom">
          <div>
            <div>Blushlly</div>
            <div>
              <ul>
                {topNavIcons.map((item) => (
                  <li>{item?.itemName}</li>
                ))}
              </ul>
            </div>
          </div>
          {/*  */}
          <div>
              <div>
                <ul>
                    {footerIcons.map((icon) => (
                    <li>
                        <span>{icon?.icon}</span>
                    </li>
                    ))}
                </ul>
                <div className="copyRightText">© 2023 PostX. Designed By WPXPO</div>
              </div>
            </div>
        </div>
      </Row>
    </Container>
  );
};

export default Footer;
