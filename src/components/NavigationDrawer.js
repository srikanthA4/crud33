import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home"; // Importing Home Component
import Adduser from "./Adduser"; // Importing AddUser Component
import Profiles from "./Profiles"; // Importing Profile Component
import Edituser from "./Edituser"; // Importing EditUser Component
import Teacherlist from "./Teacherlist"; // Importing Teacherlist Component
import Studentlist from "./Studentlist"; // Importing Studentlist Component

const NavigationDrawer = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand>Admin Dashboard</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/adduser">
                  Add User
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link className="nav-link" to="/profiles">
                  User Profiles
                </Link>
              </Nav.Link>
              <NavDropdown
                style={{ marginTop: 8 }}
                title="User Type"
                id="collasible-nav-dropdown"
              >
                <Nav.Link>
                  <Link className="nav-link" to="/type=student">
                    Student
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link className="nav-link" to="/type=teacher">
                    Teacher
                  </Link>
                </Nav.Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="workspace">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/type=teacher" element={<Teacherlist />}></Route>
          <Route path="/type=student" element={<Studentlist />}></Route>
          <Route path="/adduser" element={<Adduser />}></Route>
          <Route path="/profiles" element={<Profiles />}></Route>
          <Route exact path="/Edit/:id" element={<Edituser />}></Route>
        </Routes>
      </Container>
    </>
  );
};
export default NavigationDrawer;
