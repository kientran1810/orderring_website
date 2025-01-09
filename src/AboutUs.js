import {useState} from 'react';
import './AboutUs.css';

function AboutUs(){
    return (
      <>
        <h2 className="text-4xl font-bold text-blue-500">Hehe</h2>
        <section className="introSection grid grid-cols-12">
            <section className="brandStatementArea col-span-6">
                <p className="brandStatement text-4xl m-4">"Brewing Passion, Inspiring Values, Perfecting Every Cup."</p>
            </section>
            <section className="productPicArea col-span-5">
                <img src="/aha_logo/aha_logo_brown.png" alt="Art Coffee Picture" className="productPic"/>
            </section>
            <section className="followSocialArea col-span-1">
                <h2 className='followSocial'>Follow Us</h2>
            </section>
        </section>
      </>);
}

export default AboutUs;