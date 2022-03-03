import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../imgs/logowhite.png';

function Footer() {
    return (
        <div className="Row">
            <div>
                <Navbar bg="dark" variant="dark" sticky="bottom" expand="sm" collapseOnSelect>
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
export default Footer;