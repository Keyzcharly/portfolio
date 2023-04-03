import React from 'react'
import bootstrap from './assets/bootstrap.svg'
import css from './assets/css-3.svg'
import html from './assets/html-5.svg'
import javascript from './assets/javascript.svg'
import jquery from './assets/jquery.svg'
import react from './assets/react.svg'
import redux from './assets/redux.svg'

const Flexbox = () => {
    return (
       <>
       <div className="container">
            <div className="flexbox">
                <img className="center" src={bootstrap} alt="bootstrap" />
                <img className="center" src={css} alt="css" />
                <img className="center" src={html} alt="html" />
                <img className="center" src={javascript} alt="javascript" />
                <img className="center" src={jquery} alt="jquery" />
                <img className="center" src={react} alt="react" />
                <img className="center" src={redux} alt="redux" />
            </div>
        </div>
   </> 
    );
}

export default Flexbox