import React, { useState, useEffect } from 'react';
import slidedata from './slidedata';
function FirstSlide() {
  const [people, setPeople] = useState(slidedata);
  const [index, setIndex] = useState(0);

  useEffect(() => { // making the slider dynamic
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }

    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {  // clearing the interval
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);

    return () => clearInterval(slider);
  }, [index]);

  return (
    <div className='section-center'>

      {people.map((person, personIndex) => {
        const {id, image, name} = person;
        //more stuff
        let position = 'nextSlide'; // add css class to all slide except active/last

        if (personIndex === index) {
          position = 'activeSlide';
        }

        if (personIndex === index - 1 || (index === 0 && personIndex === people.length - 1)) {
          position = 'lastSlide';
        }

        return (
          <article className={position} key={id}>
            <img src={image} alt={name} className='person-img' />
          </article>
        );
      })}
    </div>
  );
}

export default FirstSlide;
