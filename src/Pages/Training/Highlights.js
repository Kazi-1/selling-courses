import React from 'react';
import './Highlights.css'

const Highlights = (props) => {
    const {img} = props.training;
    return (
        <div className="highlights">
            <img src={img} alt="" />
        </div>
    );
};

export default Highlights;