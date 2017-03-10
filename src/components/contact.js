import React from 'react';
import { Link } from 'react-router';

const Contact = (props) => (
    <div>
        <h2>Contact Us</h2>
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorem maiores, sed tempora voluptas
            voluptates.
        </div>
        <div>Ad aspernatur corporis deserunt eius impedit, iste magni nemo placeat quae, quo quod tempora, vel.</div>
        <div>Animi at culpa, facilis fuga laboriosam libero maiores natus necessitatibus nesciunt, nostrum quos
            reprehenderit ullam?
        </div>
        <div>Architecto delectus doloremque hic ipsa iste molestias mollitia necessitatibus nobis numquam pariatur
            quisquam, unde veritatis.
        </div>
        <div>Alias aut autem dicta eligendi magnam mollitia obcaecati possimus quia reprehenderit repudiandae? Ab
            aliquid, commodi?
        </div>
        <div>A at dolore ipsam officia placeat repellendus? Aliquam facere laborum minima nostrum ratione tempora
            totam!
        </div>
        <div>Adipisci amet cum eos est exercitationem hic ipsum nostrum nulla, obcaecati pariatur praesentium provident
            sapiente!
        </div>
        <Link to="/contact/contact-info" className="btn btn-primary">See more contact</Link>
        { props.children }
    </div>
);

export default Contact;