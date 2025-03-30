import React from 'react';
import "./footer.css";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai';
// import axios from "axios";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">MERN Stack Bloging Web Page</h1>

            <ul className="footer__list">
                <li>
                    <a href="#home" className="footer__link">Home</a>
                </li>
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Contact</a>
                </li>
                <li>
                    <a href="#write" className="footer__link">Write</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://www.instagram.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class=""><AiFillInstagram /></i>
                </a>
                <a href="https://www.linkedin.com/in/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class=""><AiFillLinkedin /></i>
                </a>
                <a href="https://www.github.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class=""><AiFillGithub /></i>
                </a>
                <a href="https://www.twitter.com/aakash22raj" className="footer__social-link" target='_blank'>
                    <i class=""><AiFillTwitterCircle /></i>
                </a>
                <a href="https://www.youtube.com/" className="footer__social-link" target='_blank'>
                    <i class=""><AiFillYoutube /></i>
                </a>
            </div>

            <span className="footer__copy">
                &#169; Crypticalcoder. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer