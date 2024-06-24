import React from 'react';
import serviceImage from '../../assets/service.png';
import { MdOutlineStar } from "react-icons/md";
import { Link } from 'react-router-dom';

const dataServices = [
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
  { image: serviceImage, title: 'K and P Clinic', address: 'Jl. Wonorejo III No.65, Wonorejo, Kec. Tegalsari, Kota SBY, Jawa Timur 60263', review: 4.8 },
];

const ServiceRecommendations = () => {
  return (
    <div className="carousel w-full gap-5">
      {dataServices.map((item, index) => (
        <div key={index} className='min-w-60 card border overflow-hidden bg-white'>
          <div>
            <img src={item.image} alt="pet" />
          </div>
          <div className='p-5 space-y-5 text-black'>
            <h4 className='text-lg font-semibold'>{item.title}</h4>
            <small>{item.address}</small>
            <div className='flex gap-2 items-center'>
              <Link to={'/service/1'}>
              <button className='btn btn-sm bg-tertiary hover:bg-tertiary/80 text-white'>Review</button>
              </Link>
              <MdOutlineStar className='text-tertiary' />
              <MdOutlineStar className='text-tertiary' />
              <MdOutlineStar className='text-tertiary' />
              <MdOutlineStar className='text-tertiary' />
              <span>{item.review}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceRecommendations;
