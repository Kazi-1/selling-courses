import React from 'react';
import Highlights from './Highlights';
import './Training.css'

const trainings = [
    {
        img: 'https://www.mcfit.com/uploads/pics/McFIT_website_1600x550_Laufband_v2.jpg',
       
    },
    {
        img: 'https://www.mcfit.com/uploads/pics/McFIT_website_1600x550_Studio_v4.jpg',
      
    },
    {
        img: 'https://www.mcfit.com/uploads/pics/McFIT_website_1600x550_Freihanteln.jpg',
       
    },
    {
        img: 'https://www.mcfit.com/uploads/pics/McFIT_JK2020_Desktop_1600x555px_Functional-Training.jpg',
    },
   
]

const Training = () => {
    return (
        <div id="Training" className="container">
            <h1 className="text-info fw-bold my-5">TRAINING HIGHLIGHTS</h1>
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