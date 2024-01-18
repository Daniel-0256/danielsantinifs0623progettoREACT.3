import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { HouseFill, BookFill } from "react-bootstrap-icons";

function MyNavbar() {
  return (
    <>
      <Navbar id="navbar" className="d-flex flex-column">
        <Container className="d-flex flex-column justify-content-start align-items-start" id="containerNav">
          <Navbar.Brand href="#home"><img src="./assets/logo/Spotify_Logo.png" className="m-3 me-5" alt="logo" id="logo"/></Navbar.Brand>
          <Nav className="d-flex flex-column">
            <Nav.Link className="text-light" href=""><HouseFill color="white" size={24} className="m-2"/>Home</Nav.Link>
            <Nav.Link className="text-light" href=""><BookFill color="white" size={24} className="m-2"/>Your Library</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              id="search"
              type="text"
              placeholder="Search"
              className="mt-2 ms-3"
            />
            <Button id="buttonSearch" className="mt-2 " type="submit">GO</Button>
          </Form>
        </Container>
        <Container className="d-flex flex-column">
        <Button id="signUp" className="mb-3">Sign Up</Button>
        <Button id="login" className="mt-2 mb-4">Login</Button>
        <div className="d-flex" id="cookie">
          <a href="" className="text-light">Cookie Policy</a>
          <p className="text-light me-2 ms-2">|</p>
          <a href="" className="text-light">Privacy</a>
        </div>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
