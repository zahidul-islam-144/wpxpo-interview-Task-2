import React, { useState } from "react";
import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { headerIcons } from "../utils/utils";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";

const TopHeader = () => {
  const [enableMobBar, setEnableMobBar] = useState(false);

  return (
    <Navbar data-bs-theme="light">
      <Container className="border-bottom pt-3 pb-3">
        <Navbar.Brand href="#home" className="header_block_left">
          Welcome here!
        </Navbar.Brand>

        <div
          onClick={() => setEnableMobBar(!enableMobBar)}
          className="mobBarIcon_block"
        >
          {enableMobBar ? (
            <GrClose className="closeMobBar" />
          ) : (
            <GiHamburgerMenu className="burger_menu" />
          )}
        </div>

        <Nav
          className={`header_block_rigth ${
            enableMobBar ? "header_block_right_mobile" : ""
          } me-0`}
        >
          <ul>
            {headerIcons.map((icon) => (
              <li>
                <span>{icon?.icon}</span>
              </li>
            ))}
          </ul>
          <div className="subscribe">Subscribe</div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default TopHeader;
