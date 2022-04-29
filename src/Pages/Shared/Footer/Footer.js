import React from 'react';

const Footer = () => {
    const today=new Date()
    const year =today.getFullYear()
    return (
        <div className='bg-info'>
            <footer className='text-center mt-5 p-2' style={{height:"100px"}}>
                <p><small style={{color:"blue"}}>copyright @ {year} </small></p>
                <p style={{color:'red'}}> By Online-IT-Service</p>
            </footer>
        </div>
    );
};

export default Footer;