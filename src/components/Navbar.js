import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../imgs/logowhite.png';
import '../styling/Navbar.css';

function NavComponent() {
    return (
        <div className="Row">
            <div className="col-md-5 offset-md-2">
                <Navbar bg="clear" variant="light" sticky="top" expand="sm" collapseOnSelect>
                    <Navbar.Brand id="logo">
                        <img src={logo} alt="logo" width="75px" height="75px" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/About'>About Us</Nav.Link>
                            <Nav.Link href='/Contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    );
}
export default NavComponent;