import React from 'react';
import { Link } from 'react-router';

const ContactInfo = () => (
    <div>
        <h3>Here is some more contact info</h3>
        <ul>
            <li>Lorem ipsum dolor sit amet, consectetur.</li>
            <li>Lorem ipsum dolor.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing..</li>
            <li>Lorem ipsum dolor sit amet.</li>
        </ul>
        <Link to="/contact" className="btn btn-success"> Hide More Contact</Link>
    </div>
);

export default ContactInfo;