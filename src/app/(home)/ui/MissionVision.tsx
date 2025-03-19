"use client";
import Image from 'next/image'
import React from 'react'
import { Element } from 'react-scroll'
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
export default function MissionVision() {
  return (
    <Element name='mission-vision'>
      <section className='md:h-[calc(100vh-2rem)] flex my-5 flex-col justify-start items-center bg-gradient-to-t from-white from-60% to-quinary rounded-2xl'>
        <Image src='/imgs/jet-pack.png' alt='Mission Vision'
          className='w-3xl h-lg hidden md:block'
          width={600}
          height={400}
        />
        <h2 className='text-3xl md:text-5xl font-semibold text-primary text-start md:text-center px-8 py-4 md:px-4 '>
          Nuestra misión en el mundo y lo que soñamos
          para tus hijos
          
        </h2>
        <div className='block w-full h-full p-4 md:hidden'>
          <LiteYouTubeEmbed
            id='0IlUVfWThdo'
            iframeClass='w-full h-full'
            title='Manifesto | Genuine Digital School'
            playlist={false}
            cookie={false}
          />
        </div>
        <div className='flex flex-col md:flex-row  gap-4  px-4 md:x-10 lg:px-20 py-4'>
          <div className='flex flex-col p-4 md:px-4 md:pb-12 md:pt-4 gap-y-3 border-2 border-primary  rounded-2xl md:w-1/2'>
            <Image
              src='/imgs/cohete-icon.png'
              alt='Cohete'
              className="w-20 h-full"
              width={60}
              height={40}
            />
            <h3 className='text-2xl font-bold text-primary'>
              Nuestra misión
            </h3>
            <p className='text-lg/tight text-primary'>
              Educar, empoderar y conectar a nuestros estudiantes mediante experiencias de aprendizaje remoto que trasciendan las fronteras geográficas e idiomáticas.
            </p>
          </div>
          <div className='flex flex-col px-4 pb-12 pt-4 gap-y-3 border-2 border-primary p-4 rounded-2xl md:w-1/2'>
            <Image
              src='/imgs/eye-icon.png'
              alt='Ojo'
              className='w-20 h-full'
              width={60}
              height={40}
            />
            <h3 className='text-2xl font-bold text-primary'>
              Nuestra visión
            </h3>
            <p className='text-lg/tight text-primary'>
              Visualizamos un mundo donde miles de jóvenes y niños usen sus habilidades para transformar sus comunidades y regiones por medio del emprendimiento, la tecnología y la innovación.
            </p>
          </div>
          <div className='flex '>
            <Image src='/imgs/jet-pack.png' alt='Mission Vision'
              className='w-3xl h-lg block md:hidden'
              width={600}
              height={400}
            />
          </div>
        </div>
      </section>
    </Element>
  )
}
