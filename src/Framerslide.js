import React from 'react'
import {motion} from 'framer-motion'
import {useRef, useEffect, useState} from 'react'
import images from './images'
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Framerslide = () => {

    const [width, setWidth] = useState(0);
    const carousel = useRef();

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }, [])

    return (
        <div className='test2' id='projects'> 
            <h2>Some of Our Projects</h2>
            <br></br>
            <span style={{display: 'flex', justifyContent: 'right', marginRight: '10%'}}>
                <FaArrowCircleLeft style={{marginRight: 5}}/>
                <h4>drag to view more</h4>
                <FaArrowCircleRight style={{marginLeft: 5}}/>
            </span>
            <motion.div ref={carousel} className='carousel' whileTap={{cursor: 'grabbing'}}>
                <motion.div drag='x' dragConstraints={{right: 0, left: -width}} className='inner-carousel'>
                    {images.map(singleImage => {
                        const {id, image, title, url} = singleImage;
                        return (
                            <motion.div className='item' key={id}>
                                <img src={image} alt='title' />
                               <h4><a target='_blank' style={{color: 'black', textAlign: 'center', padding: 40}} href={url}>{title}</a></h4>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Framerslide;