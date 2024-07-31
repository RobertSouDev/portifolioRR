import React from 'react';

function CardMain({ title, subtitle, img }) {
  return (
    <div className="w-full my-20 flex justify-center">
      <div 
        className="relative border-solid border-2 border-gray-400 w-[80%] h-[30rem]"
        style={{
          backgroundImage: `url(${img})`, // Usando a prop img para definir a imagem de fundo
          backgroundSize: 'cover', // Cobrir toda a área
          backgroundPosition: 'center', // Centralizar a imagem
        }}
      >
        <div className="flex justify-center items-center flex-col absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 ease-in-out">
          <h1 className='text-6xl'>{title}</h1>
          <p>{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export default CardMain;
