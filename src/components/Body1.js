import React from "react";
import { Container } from "react-bootstrap";
import Categories from "./Categories";
import LatestPosts from "./LatestPosts";
import Banner2 from "./Banner2";
import Add from "./Add";
import PopularPost from "./PopularPost";
import Banner3 from "./Banner3";
import Add1 from "../assets/body1/add/Add1.png";
import Add2 from "../assets/body1/add/Add2.png";
import RandomPosts from "./RandomPosts";

const Body1 = () => {
  return (
    <>
      <Container className="mt-5 mb-5">
        <Categories/>
        <LatestPosts/>
        <Banner2/>
        <Add mode={1} src={Add1}/>
        <PopularPost/>
        <Banner3/>
        <Add mode={2} src={Add2}/>
        <RandomPosts/>
      </Container>
    </>
  );
};

export default Body1;

// { [...Array(8)].map(()=> <Col sm={12} md={6} lg={3}>1 of 1</Col>)}
