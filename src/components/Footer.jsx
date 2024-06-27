// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube, FaMapMarkerAlt } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { IoIosCall } from 'react-icons/io';
import { MdMessage } from 'react-icons/md';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container-footer">
                <div className="Food-zone">
                    <h2 className="Food"><b>Food zone</b></h2>
                    <p className="Para1"><b>The Recipe Master project is a comprehensive web application designed to help users discover, organize, and share their favorite recipes. Users can browse through a vast collection of recipes, save their favorites, and create custom meal plans.</b></p>
                    <div className="sign">
                        <a  className="ico-food"href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram size={24} /></a>
                        <a className="ico-food"  href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook size={24} /></a>
                        <a className="ico-food" href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><FiTwitter size={24} /></a>
                        <a className="ico-food" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin size={24} /></a>
                        <a className="ico-food" href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube size={24} /></a>
                    </div>
                </div>
                <div className="Our-menu">
                    <h3 className="Our"><b>Our menu</b></h3>
                    <ul className="menu">
                        <li>Chicken Burger</li>
                        <li>Brief Pizza</li>
                        <li>Fresh Vegetable</li>
                        <li>Sea Foods</li>
                        <li>Desserts</li>
                        <li>Cold Drinks</li>
                        <li>Discount</li>
                    </ul>
                </div>
                <div className="Useful-links">
                    <h3 className="Our"><b>Useful links</b></h3>
                    <ul className="menu">
                        <li>About Us</li>
                        <li>Restaurant</li>
                        <li>Our Chefs</li>
                        <li>Testimonials</li>
                        <li>Blogs</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="Contact-Us">
                    <h3 className="Our"><b>Contact Us</b></h3>
                    <div className="contact-item">
                        <IoIosCall size={24} />
                        <p className="pera">+44(0) 9865 124 765</p>
                    </div>
                    <div className="contact-item">
                        <MdMessage size={24} />
                        <p className="pera">info@yourdomain.com</p>
                    </div>
                    <div className="contact-item">
                        <FaMapMarkerAlt size={24} />
                        <p className="pera">11 Beaufor Count, UK</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

