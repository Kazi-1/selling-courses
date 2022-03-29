import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    // const {service} = props;
    const { id, name, description, img } = service;
    return (
        <div id="services" className="service pb-3">
            <img width="100" src={img} alt="" />
            <h3>{name}</h3>
            <p className="px-3">{description}</p>
            <Link to={`/detail/${id}`}>
                <button className="btn btn-warning">Learn More</button>
            </Link>
        </div>
    );
};

export default Service;