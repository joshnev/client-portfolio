/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import Image from 'next/image';
import Trophy from '../public/images/modal/trophy.png';
import { AiFillFire } from 'react-icons/ai';

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex md:flex-col justify-center items-center font-[poppins]">
      <div className="flex gap-5">
        <button
          type="button"
          className="bg-blue-500 text-white active:bg-slate-500 hover:bg-slate-500 flex justify-center items-center gap-2 font-bold px-6 h-12 rounded-lg shadow hover:shadow-xlg outline-none focus:outline-none"
          onClick={() => setShowModal(true)}
        >
          Open 1st <AiFillFire className="text-xl" />
        </button>
      </div>
      {/* 1st popup */}
      {showModal ? (
        <div className="mt-10 flex justify-center items-center flex-col rounded-lg shadow-xl h-auto p-2">
          <Image src={Trophy} width={100} height={100} objectFit="contain" />
          <h2 className="text-base mt-2 mx-4 text-gray-400 font-semibold text-center">
            May your life be filled with success and achiements.
            Congratulations!
          </h2>
          <button
            className="my-5 w-auto px-8 h-10 bg-red-500 text-white rounded-md shadow hover:shadow-lg font-semibold"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
