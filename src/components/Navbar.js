import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar } from 'react-bootstrap';
import logo from '../imgs/logofullblack.png';
import '../styling/navbar.css';

function NavComponent() {
    return (
        <div className="Row">
            <div className="col-md-5 offset-md-1">
                <Navbar bg="clear" sticky="top" expand="sm" collapseOnSelect >
                    <Navbar.Brand id="logo">
                        <img src={logo} alt="logo" width="75px" height="75px" />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav style={{ fontWeight: "bold" }}>
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href='/About'>About Us</Nav.Link>
                            <Nav.Link href='/Contact'>Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </div >
    );
}
export default NavComponent;