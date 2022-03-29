import React from 'react';
import Highlights from './Highlights';
import './Training.css'

const trainings = [
    {
        img: 'https://www.freecodecamp.org/static/Shawn-bf42c7b909dae3111d18a21870ee6ca5.png',
        description: "It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons"
       
    },
    {
        img: 'https://www.freecodecamp.org/static/Sarah-45de0e53b7b2520ebbac35c454b9748a.png',
        description: "Future Learning was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge"
      
    },
    {
        img: 'https://www.freecodecamp.org/static/Emma-5a662db9bcf55809a1fefb2ea17634bc.png',
        description: "I've always struggled with learning JavaScript. I've taken many courses but Future Learning course was the one which stuck."
       
    },
    {
        img: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/02/client-objections-freelancing.jpg',
        description: "Studying JavaScript as well as data structures and algorithms on Future Learning gave me the skills and confidence I needed"
       
    }
]

const Training = () => {
    return (
        <div id="Training" className="container">
            <h1 className="text-info fw-bold my-5">What Our Clients Say About Us</h1>
            <div className="training-container ">
                {
                    trainings.map(training => <Highlights
                        key={training.name}
                        training={training}
                    >
                    </Highlights>)
                }
            </div>
        </div>
    );
};

export default Training;