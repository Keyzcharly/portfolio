import React from 'react'
import FirstSlide from './FirstSlide';

const Main = () => {
    return (
        <div id='main' className='test1'>
            <div className="card-left">
                <h1>Ready to go Viral?</h1>
                <h3>Front-End developer Portfolio</h3>
                <p>Professional Enterprise Level Applications using Industry Standards and Best Practices. 70% of small-to-mid-sized businesses are investing more into their digital presence, Why shouldn't you? Click Now for a Free Consultation.
                </p>
                <a href='#contact'><button>Start Free Now</button></a>
            </div>
            <div className="card-right">
                <FirstSlide />
            </div>
        </div>
    );
}

export default Main;