import 'bootstrap/dist/css/bootstrap.css';
import { BsFillPinMapFill, BsTelephone } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import logo from '../imgs/logofullwhite.png';

function Footer() {
    return (

        <footer className='bg-dark text-white pt-1 pb-1'>
            <div className='container text-center text-md-left'>
                <div className='row text-center text-md-left'>
                    <div className='col-md-3 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <img src={logo} alt="logo" width="50 px" height="50px" />
                    </div>
                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <BsTelephone />
                        <p>647-807-5226</p>
                    </div>
                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mt-3'>
                        <AiTwotoneMail />
                        <p>yoururlsca@gmail.com</p>
                    </div>
                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mt-3'>
                        <BsFillPinMapFill />
                        <p>Mississauga, ON</p>
                    </div>
                </div>
            </div>

        </footer>

    );
}
export default Footer;