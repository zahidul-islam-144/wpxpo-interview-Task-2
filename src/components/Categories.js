import React from "react";
import { Image, Row } from "react-bootstrap";
import singleCategoryImage from '../assets/body1/categories/singleCategoryImage.png';

const Categories = () => {
  return (
    <>
      <Row className="d-flex justify-content-between flex-wrap align-items-center categoryRowMain">
        {[...Array(5)].map(() => (
          <div className="singleCategory">
            <Image src={singleCategoryImage} thumbnail />
          </div>
        ))}
      </Row>
    </>
  );
};

export default Categories;
