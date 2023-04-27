import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Qzone from '../Qzone/Qzone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <h4>Login With</h4>
            <div>
                <Button className='mb-2 w-100' variant="outline-primary"><FaGoogle className='' /> Login with Google</Button>
                <Button className='mb-4 w-100' variant="outline-secondary"> <FaGithub> </FaGithub> Login With Github</Button>
            </div>
            <div>
                <h4>Find Us On</h4>
                <ListGroup className='text-start gap-3 '>
                    <Button className='border border-primary rounded' variant="outline-primary"><FaFacebook /> Facebook</Button>
                    <Button className='border border-primary rounded' variant="outline-primary"><FaTwitter /> Twitter</Button>
                    <Button className='border border-primary rounded' variant="outline-danger" ><FaInstagram /> Instagram</Button>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div className="card text-bg-dark mt-5">
                <img src={bg} className="card-img" alt="..."/>
                    <div className="card-img-overlay">
                        <h2 className="card-title fs-1 mt-5 mb-5">Create an Amazing Newspaper</h2>
                        <p className="card-text fs-5">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                        <button className='btn btn-danger w-50 h-10 py-3 mt-5  fw-bolder'>Learn More</button>
                    </div>
            </div>
        </div>
    );
};

export default RightNav;