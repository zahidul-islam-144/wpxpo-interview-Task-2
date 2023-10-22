import React from "react";
import { Container, Image, Row } from "react-bootstrap";


const Add = ({mode, src}) => {
  return (
    <>
      <Row className={`addRowMain ${mode === 2 ? 'add2':''}`}>
        <Image src={src} />
      </Row>
    </>
  );
};

export default Add;
