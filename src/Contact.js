import React from 'react'
import './App.css';
import { FaCodepen, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {Link} from "react-router-dom";

const Contact = () => {
    return (
        <div id='contact' className='test4'>
            <h2>Let's Connect</h2>
            <br></br>
            <div className="wrapper">
                <div className="left">
                    <h4>Send a message</h4>
                    <div className='contact-form'>
                        <form action="https://formspree.io/f/xqkobzzj" method="POST">
                            <label for="fname">First Name</label>
                            <input type="text" id="fname" name="firstname" placeholder="Your first name.."></input>

                            <label for="lname">Last Name</label>
                            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>

                            <label for="country">Country</label>
                            <select id="country" name="country">
                                <option value="usa">USA</option>
                                <option value="nigeria">Nigeria</option>
                                <option value="australia">Australia</option>
                                <option value="canada">Canada</option>
                                <option value="switzerland">Switzerland</option>
                                <option value="norway">Norway</option>
                                <option value="hong kong">Hong Kong</option>
                                <option value="denmark">Denmark</option>
                                <option value="sweden">Sweden</option>
                                <option value="ireland">Ireland</option>
                                <option value="germany">Germany</option>
                                <option value="netherlands">Netherlands</option>
                                <option value="united kingdom">United Kingdom</option>
                                <option value="others">Others</option>
                            </select>

                            <label for="subject">Subject</label>
                            <textarea id="subject" name="subject" placeholder="Hi, please tell us more about your inquiry.."
                            style={{height:200}}></textarea>

                            <input type="submit" value="Submit"></input>
                        </form>
                    </div>
                </div>

                <div className="right">
                    <div className='side-bar-item'>
                        <div className="direct-contact-container">
                            <ul className="contact-list">
                                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Lagos, Nigeria</span></i></li>

                                <li className="list-item"><i className="fa fa-phone fa-2x"><span className="contact-text phone"><a href="tel:+234-815-718-3909" title="Give me a call">+234 (815) 718-3909</a></span></i>
                                </li>

                                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">keyzcharly@gmail.com</a></span></i></li>
                            </ul>

                            <hr></hr>

                            <ul className='contact-icons-bottom'>
                                <li>
                                <a href="https://github.com/Keyzcharly" target="_blank" rel="noreferrer" className="contact-icon"><FaGithub /></a>
                                </li>
                                <li>
                                <a href="https://codepen.io/Keyzcharly" target="_blank" rel="noreferrer" className="contact-icon"><FaCodepen /></a>
                                </li>
                                <li>
                                <a href="https://twitter.com/keyzcharly" target="_blank" rel="noreferrer" className="contact-icon"><FaTwitter /></a>
                                </li>
                                <li>
                                <a href="https://www.linkedin.com/in/charles-o-9836081b4" target="_blank" rel="noreferrer" className="contact-icon"><FaLinkedin /></a>
                                </li>
                            </ul>

                            <hr></hr>

                            <div className="copyright">&copy; 2023 VIRALWEB.COM ALL RIGHTS RESERVED</div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <br></br>
            <br></br>
        </div>
    );
}

export default Contact;