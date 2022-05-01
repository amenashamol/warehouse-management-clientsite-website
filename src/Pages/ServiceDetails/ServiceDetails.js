import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const {serviceId}=useParams()
    return (
        <div className='service-details'>
            <h2>
                servicedetails:{serviceId}
            </h2>
            <div>
            <Link to='/cheackout'>
            <button className='btn btn-primary'>proceed cheackout</button>
            </Link>
            </div>
            
        </div>
    );
};

export default ServiceDetails;