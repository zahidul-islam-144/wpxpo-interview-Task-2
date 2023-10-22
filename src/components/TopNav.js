import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { topNavIcons } from "../utils/utils";
import { BsSearch } from "react-icons/bs";

function TopNav() {
  return (
    <Navbar expand="lg">
      <Container className="pt-2 pb-2">
        <Navbar.Brand href="#home" className="topNav_left">
          Blushlly
        </Navbar.Brand>
        <Nav className="topNav_menu_block me-auto me-lg-0">
          <ul>
            {topNavIcons.map((item) => (
              <li>{item?.itemName}</li>
            ))}
          </ul>
        </Nav>

        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className=""
            aria-label="Search"
          />
          <Button variant="outline-success">
            <BsSearch />
          </Button>
        </Form>
      </Container>
    </Navbar>
  );
}

export default TopNav;
