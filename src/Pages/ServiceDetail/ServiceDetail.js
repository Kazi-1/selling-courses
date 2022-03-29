import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('../services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])


    const detail = services.find(item => item.id === Number(serviceId));

    return (
        <div>
            <img width="50%" src={detail?.img} alt="" />
            <h2>this is service details of {serviceId}</h2>
            <h2>length: {services.length}</h2>
            <h2>{detail?.name}</h2>
            <h2>{detail?.price}</h2>
            <h2>{detail?.description}</h2>
        </div>
    );
};

export default ServiceDetails;