import Image from 'next/image'
import React from 'react'

export default function CompanyLocation() {
  return (
    <div className='flex flex-col md:flex-row md:h-[40%] bg-white rounded-2xl overflow-hidden'>
      <div className='flex flex-col md:w-1/2 px-12 py-8 gap-2'>
        <h2 className='text-4xl font-semibold text-primary text-start hidden md:block'>
          De Estados Unidos para
          el mundo
        </h2>
        <p className='text-lg/tight text-primary  text-justify hidden md:block'>
          Nuestro colegio digital privado está constituido y registrado en Estados Unidos ante el&nbsp;
          <span className='font-bold'>
            Florida Department of Education con el código 8822.
          </span>
        </p>
        <h2 className='text-3xl md:text-4xl font-semibold text-primary text-start block md:hidden'>
          ¿Quiénes somos?
        </h2>
        <p className='text-lg/tight text-primary  text-justify block md:hidden'>
          Somos un colegio virtual privado estadounidense constituido y registrado en el estado de&nbsp;
          <span className='font-bold'>
            La Florida con el código 8822.
          </span>
        </p>
        <div className="flex flex-col md:flex-row items-center">
          <p className='text-lg/tight text-primary md:block hidden'>
            Conoce el nuestro aquí
          </p>
          <p className='text-lg/tight text-primary md:hidden block mt-6'>
            Consulta el registro legal aquí
          </p>
          <button className='text-xl bg-primary text-white p-2 rounded-lg m-4 px-4 hover:bg-blue-950 transition-colors duration-300 cursor-pointer'>
            Registro Legal
          </button>
        </div>
      </div>
      <div className="flex flex-col px-10 py-4 mb-15 mx-4 rounded-2xl gap-4 md:hidden justify-center items-center bg-[#D5ADFB] ">
        <p className='text-xl text-primary text-center font-medium'>
          Mira como encontrar el
          registro legal de Genuine
        </p>
        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.5 0C9.47212 0 0.5 8.97212 0.5 20C0.5 31.0279 9.47212 40 20.5 40C31.5279 40 40.5 31.0279 40.5 20C40.5 8.97212 31.5279 0 20.5 0ZM27.6894 20.8942L16.6846 27.5423C16.5269 27.6368 16.3468 27.6876 16.163 27.6896C15.9791 27.6916 15.798 27.6446 15.6383 27.5535C15.4786 27.4624 15.346 27.3304 15.2541 27.1711C15.1622 27.0118 15.1143 26.831 15.1154 26.6471V13.3529C15.1143 13.169 15.1622 12.9882 15.2541 12.8289C15.346 12.6696 15.4786 12.5376 15.6383 12.4465C15.798 12.3554 15.9791 12.3084 16.163 12.3104C16.3468 12.3124 16.5269 12.3632 16.6846 12.4577L27.6894 19.1058C27.8428 19.1992 27.9696 19.3306 28.0576 19.4872C28.1455 19.6438 28.1917 19.8204 28.1917 20C28.1917 20.1796 28.1455 20.3562 28.0576 20.5128C27.9696 20.6694 27.8428 20.8008 27.6894 20.8942Z" fill="white" />
        </svg>


      </div>
      <div className='flex md:w-1/2'>
        <Image
          src='/imgs/group-photo.png'
          alt='Ubicación de la empresa'
          className='w-full h-full object-cover'
          width={600}
          height={400}
        />
      </div>

    </div>
  )
}
