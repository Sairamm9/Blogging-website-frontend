import React from 'react'
import "./about.css";

const About = () => {
  return (
    <section className="section-p1">
        <div>
            <h2>Who We Are</h2>
            <p>Lorm ipsu, dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labolis. Ut enim ad mini</p>
            <address title=''>Create stunning images with as much or as little control as you like thanks to a choice of Basic and Creative modes</address>
            <br /><br />
            <marquee bgcolor="#ccc" loop="-1" scrollamount="5" width="100%">Create stunning image with as much or as little control as you like thanks to a choice of Basic and Creative modes.
            </marquee>
        </div>
    </section>
  )
}

export default About