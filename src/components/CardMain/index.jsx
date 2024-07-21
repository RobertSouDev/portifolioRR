import React from 'react';

function CardMain() {
  return (
    <div className="w-full my-20 flex justify-center">
      <div className="relative border-solid border-2 border-gray-400 w-[80%] h-[30rem]">
        <div className="flex justify-center items-center flex-col absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <h1 className='text-6xl'>teste</h1>
          <p>teste</p>
        </div>
      </div>

    </div>
  );
}

export default CardMain;
