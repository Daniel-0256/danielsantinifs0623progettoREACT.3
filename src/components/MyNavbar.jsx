import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { HouseFill, BookFill } from "react-bootstrap-icons";

function MyNavbar() {
  /* const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    setSearchValue(inputValue);
  }; */

  return (
    <>
      <Navbar id="navbar" className="d-flex flex-column p-1">
        <Container className="d-flex flex-column justify-content-start align-items-start p-0" id="containerNav">
          <Navbar.Brand href="#home"><img src="./assets/logo/Spotify_Logo.png" className="m-3 me-5" alt="logo" id="logo"/></Navbar.Brand>
          <Nav className="d-flex flex-column">
            <Link to="/CardAlbum" className="nav-link text-light" href=""><HouseFill color="white" size={24} className="m-2"/>Home</Link>
            <Nav.Link className="text-light" href=""><BookFill color="white" size={24} className="m-2"/>Your Library</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              id="search"
              type="text"
              placeholder="Search"
              className="mt-2 ms-3"
              /* value={inputValue}
              onChange={handleInputChange} */
            />
            <Button id="buttonSearch" className="mt-2 " type="submit" /* onClick={handleSearch} */>GO</Button>
          </Form>
        </Container>
        <Container className="d-flex flex-column p-0">
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
