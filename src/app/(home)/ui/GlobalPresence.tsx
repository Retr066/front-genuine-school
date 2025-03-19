import Image from 'next/image'
import React from 'react'

export default function GlobalPresence() {
  return (
    <div className='flex flex-col-reverse md:flex-row  md:h-[60%] bg-white rounded-2xl overflow-hidden'>

      <div className="flex flex-col gap-4 md:w-4/12 md:py-6  md:pl-12 md:pr-4">
        <h3 className='text-5xl text-primary font-semibold hidden md:block'>Somos del mundo</h3>
        <div className='flex  flex-col '>
          <p className='bg-tertiary font-medium p-4 text-white'>
            Colombia, Ecuador, Perú, México, Panamá, Costa Rica, Chile, Argentina, Estados Unidos, Emiratos Árabes, Brasil, República Dominicana, Irlanda, Canadá, España, Portugal, China, Italia.
          </p>
          <p className='bg-secondary font-medium p-4 text-primary'>
            Estados Unidos, Colombia, Perú, Brasil, Chile, México, Venezuela.
          </p>
          <p className='bg-quaternary font-medium p-4 text-white'>
            Colombia, Sudáfrica, Filipinas, Chile, México, Singapur.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:w-8/12">
        <div className="flex justify-around flex-col md:flex-row  gap-4 w-full px-6 pt-6">
          <h3 className='text-4xl md:text-5xl text-primary font-semibold block md:hidden'>Somos del mundo</h3>
          <div className="flex flex-col md:flex-row justify-center items-center  border-3  border-tertiary rounded-lg  py-4 md:px-8 md:py-1">
            <p className='text-3xl  font-bold text-tertiary'>
              + 400&nbsp; 
            </p>
            <span className='text-2xl font-bold text-tertiary'>Estudiantes</span>
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center  border-3  border-secondary rounded-lg py-4 md:px-8 md:py-1">
            <p className='text-3xl font-bold text-secondary'>
              + 28&nbsp;
            </p>
            <span className='text-2xl font-bold text-secondary'>Staff</span>
          </div>
          <div className="flex flex-col md:flex-row  justify-center items-center  border-3  border-quaternary rounded-lg py-4 md:px-8 md:py-1">
            <p className='text-3xl font-bold text-quaternary'>
              + 44&nbsp;
            </p>
            <span className='text-2xl font-bold text-quaternary'>Profesores</span>
          </div>
        </div>
        <div >
          <Image
            src='/imgs/world-map.png'
            alt='Ubicación de la empresa'
            className='w-full h-full object-contain'
            width={800}
            height={400}
          />
        </div>
      </div>
    </div>
  )
}
