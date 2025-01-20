import {useState} from 'react';
import '../App.css'; 
import './AboutUs.css';
import './ReviewBox.js';
import resources from '../resources/en.json';
import ReviewBox from './ReviewBox.js';

function AboutUs(){
    const reviews =[
        {
            title: "Classic Brew - A Perfect Start to the Day",
            content: "A cup of coffee is the best way to kickstart my mornings. The rich, bold flavor of freshly brewed coffee fills me with energy and warmth, making it the perfect companion for my busy day ahead. Whether I prefer a dark roast or a light blend, there's just something magical about that first sip!",
            rating: 5,
            userName: "John Dan"
        },
        {
            title: "Great Coffee!",
            content: "The coffee here is amazing. I love the rich flavor and the ambiance of the cafe.",
            rating: 5,
            userName: "John Doe"
        },
        {
            title: "Nice Place",
            content: "A nice place to relax and enjoy a cup of coffee. The staff is friendly and the service is good.",
            rating: 4,
            userName: "Jane Smith"
          }
    ]
    return (
      <>
        <section className="brandIntroSection grid grid-cols-12 m-4">
            <section className="brandStatementArea col-span-6">
                <p className="statement brandStatement text-4xl m-4">{resources.brandStatement}</p>
                <button className='button-primary centerButton'>Order Now</button>
            </section>
            <section className="productPicArea col-span-5">
                <img src="/aha_logo/aha_logo_brown.png" alt="Art Coffee Picture" className="productPic"/>
            </section>
            <section className="followSocialArea col-span-1">
                <h2 className='followSocial'>Follow Us</h2>
            </section>
        </section>
        <section>
            <div className="ingridientSection grid grid-cols-12 m-4">
                <section className='coffeePicSec col-span-5 m-4'>
                    <img src='/ingredient_pics/coffee_beans_pic.png' alt='Coffee Beans Picture' className="border-solid border-2 rounded-lg shadow-lg w-full"></img>
                </section>
                <section className='coffeeStatSec col-span-7 ml-2'>
                    <h1 className='text-4xl m-4 statement font-bold'>Coffee</h1>
                    <p className='text-2xl m-4 statement coffeeStatement'>
                        {resources.coffeeStatement}
                    </p>
                </section>
            </div>
            {/* tea section */}
            <div className="ingridientSection grid grid-cols-12 m-4">
                <section className='coffeeStatSec col-span-7 mr-2'>
                    <h1 className='text-4xl m-4 statement font-bold'>Tea</h1>
                    <p className='text-2xl m-4 statement coffeeStatement'>
                        {resources.teaStatement}
                    </p>
                </section>
                <section className='coffeePicSec col-span-5 m-4'>
                    <img src='/ingredient_pics/tea.png' alt='A Cup of Tea Picture' className="border-solid border-2 rounded-lg shadow-lg w-full"></img>
                </section>
            </div>
            {/* ice cream section */}
            <div className="ingridientSection grid grid-cols-12 m-4">
                <section className='coffeePicSec col-span-5 m-4'>
                    <img src='/ingredient_pics/ice_cream.png' alt='An Ice Cream Picture' className="border-solid border-2 rounded-lg shadow-lg w-full"></img>
                </section>
                <section className='coffeeStatSec col-span-7 ml-2'>
                    <h1 className='text-4xl m-4 statement font-bold'>{resources.ice_cream}</h1>
                    <p className='text-2xl m-4 statement coffeeStatement'>
                        {resources.iceCreamStatement}
                    </p>
                </section>
            </div>
        </section>

        <button className='button-primary justify-self-center m-4'>Menu</button>
        {/* review section */}
        <section className='reviewSecIntro'>
            <h1 className='statement text-2xl m-4'>{resources.reviews}</h1>
            <h1 className='statement text-5xl m-4'>{resources.reviewTitle}</h1>
            <h1 className='reviewIntro statement text-2xl m-4'>{resources.reviewIntro}</h1>
        </section> 
        <section>
            <div className='reviewSec section-primary'>
            {reviews.map((reviewer, index) => 
            (<ReviewBox
                key={index}
                title={reviewer.title} 
                content={reviewer.content}
                ratings={reviewer.rating}
                userName={reviewer.userName}
                />
            ))}
            </div>
            <div className='flex flex-row m-10-20-10 p-4 justify-center'>
                <button className='button-secondary reviewButton'>Review</button>
                <button className='button-tertiary reviewButton'>More</button>
            </div>
        </section>
        <section className='contactSec section-primary'>
            <div className='contactTitle text-3xl'>{resources.contactSection}</div>
            <div className='grid grid-cols-12'>
                <div className="col-span-6 bg-black m-7">
                    <img src="/map.png" className=' mapImage'></img>
                </div>
                <div className="col-span-6 m-7">
                    <div className='text-2xl mb-4 font-bold'>{resources.addressSectionTitle}</div>
                    <div className="text-lg">{resources.addressLine1}</div>
                    <div className="text-lg">{resources.addressLine2}</div>
                    <div className="text-lg">{resources.addressLine3}</div>
                    <div className="text-lg">{resources.addressLine4}</div>
                </div>
            </div>
            <div className="text-lg m-4 text-center text-stone-500">{resources.copyRight}</div>
        </section>
        
      </>);
}

export default AboutUs;