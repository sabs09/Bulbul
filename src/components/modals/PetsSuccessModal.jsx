import React, { useState } from 'react';
import petImage from '../../assets/pets sukses.png';

const PetsSuccessModal = ({ title, buttonText }) => {
  const [isVisible, setIsVisible] = useState(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white py-6 px-20 rounded shadow-md flex flex-col items-center">
        <img src={petImage} alt="Pet" className="w-40 mb-4" />
        <p className="text-xl text-primary">{title}</p>
        <div className="mt-4 flex justify-center space-x-4">
          <button className="btn bg-tertiary hover:bg-tertiary/80 text-white rounded px-6 py-2">{buttonText}</button>
        </div>
      </div>
    </div>
  );
};

export default PetsSuccessModal;
