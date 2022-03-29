import React from 'react';
import './Highlights.css'

const Highlights = (props) => {
    const {img, description} = props.training;
    return (
        <div className="highlights">
            <img src={img} alt="" />
            <p>{description}</p>
        </div>
    );
};

export default Highlights;