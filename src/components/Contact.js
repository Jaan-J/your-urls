import NavComponent from "./Navbar";
import { useState } from 'react';
import { send } from 'emailjs-com';
import { BsFillPinMapFill } from "react-icons/bs";
import Footer from "./Footer";
import '../styling/Contact.css';
function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_nrvurka',
            'template_xybggwf',
            toSend,
            'l6OMx-xwhYtTURrfb'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <NavComponent />
            <div className="d-flex justify-content-center">
                <h1>Lets get started!</h1>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-6">
                        <form onSubmit={onSubmit}>
                            <input
                                type='text'
                                name='from_name'
                                placeholder='Enter your name'
                                value={toSend.from_name}
                                onChange={handleChange}
                                id='fromName'
                            />
                            <input
                                type='text'
                                name='reply_to'
                                placeholder='Enter a valid email'
                                value={toSend.reply_to}
                                onChange={handleChange}
                                id='fromEmail'
                            />
                            <input
                                type='text'
                                name='message'
                                placeholder='What is your inquiry?'
                                value={toSend.message}
                                onChange={handleChange}
                                id='message'
                            />
                            <button type="submit" className="btn btn-outline-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;