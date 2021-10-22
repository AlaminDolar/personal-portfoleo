import React from 'react';

import { Container } from 'react-bootstrap';




const AboutUs = () => {
   
    return (
        
        <Container className="p-5 ">
           
            <h2 className="fw-bold bg-success ">About Us</h2>
            <p>Practice makes perfect.To become a better developer,you need to practice coding your program language.Many online programming courses offer free tutorials with videos and lectures. However, those can only take you so far.Coding challenges will give you a better experience since you apply your knowledge to the real thing.

             </p>
            <h2 className="fw-bold bg-danger">Our Mission</h2>
            <p>Code powers our digital world. Every website, smartphone app, computer programme, calculator and even microwave relies on code in order to operate. This makes coders the architects and builders of the digital age. Our mission to involved huge number of student with IT sector and create their good skills.</p>
        </Container>
    );
};

export default AboutUs;