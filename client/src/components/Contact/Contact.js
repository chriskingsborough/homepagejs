import React from 'react';
import './Contact.css';

class Contact extends React.Component {
    render() {
        return (
            <div className="container">
            <h1 align="center">Contact Me</h1>
            <p>
                To get in touch, shoot me an email at <a href="chrisdkingsborough@gmail.com">chrisdkingsborough@gmail.com</a>.
                You can also find me on <a href="https://twitter.com/cdkingsborough">Twitter</a>, <a href="https://www.instagram.com/thekingsbro/?hl=en">Instagram</a> or <a href="https://linkedin.com/in/chrisdkingsborough">LinkedIn</a>.
            </p>
            </div>
        )
    }
}

export default Contact;