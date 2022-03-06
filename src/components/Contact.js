import NavComponent from "./Navbar";
import { useState } from 'react';
import { send } from 'emailjs-com';
import Footer from "./Footer";
import '../styling/contact.css';
function Contact() {
    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();

        if (toSend.fromName === '' && toSend.message === '' && toSend.reply_to === '') {
            document.getElementById('noInfo').style.display = "block";
        } else if (toSend.from_name === '') {
            document.getElementById('noName').style.display = "block";
        } else if (toSend.message === '') {
            document.getElementById('noMessage').style.display = "block";
        } else if (toSend.reply_to === '') {
            document.getElementById('noEmail').style.display = "block";
        } else {
            send(
                'service_nrvurka',
                'template_xybggwf',
                toSend,
                'l6OMx-xwhYtTURrfb'
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text);
                    document.getElementById('success').style.display = "block";
                })
                .catch((err) => {
                    console.log('FAILED...', err);
                });

        }
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
            <div className="d-flex justify-content-center">
                <h5>Want to find out how YourURLS can bring your aspirations to life? Lets talk.</h5>
            </div>
            <div className="container" style={{ height: "70.7vh" }}>
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
                        <div className="alert alert-danger" id='noInfo' role="alert" style={{ display: "none" }}>
                            <a href='/Contact' className='close' data-dismiss='alert' aria-label='close'>&times; </a>
                            &nbsp;Please fill out all fields.
                        </div>
                        <div className="alert alert-danger" id='noName' role="alert" style={{ display: "none" }}>
                            <a href='/Contact' className='close' data-dismiss='alert' aria-label='close'>&times;</a>
                            Please enter your name.
                        </div>
                        <div className="alert alert-danger" id='noEmail' role="alert" style={{ display: "none" }}>
                            <a href='/Contact' className='close' data-dismiss='alert' aria-label='close'>&times;</a>
                            Please enter your email address.
                        </div>
                        <div className="alert alert-danger" id='noMessage' role="alert" style={{ display: "none" }}>
                            <a href='/Contact' className='close' data-dismiss='alert' aria-label='close'>&times;</a>
                            Please enter your inquiry.
                        </div>
                        <div className="alert alert-success" id='success' role="alert" style={{ display: "none" }}>
                            <a href='/Contact' className='close' data-dismiss='alert' aria-label='close'>&times;</a>
                            Message sent.
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
export default Contact;