"use client";
import Image from 'next/image'
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'

const menuItems = [
  { id: 1, name: 'Inicio', to: 'hero' },
  { id: 2, name: '¿Quiénes somos?', to: 'mission-vision' },
  { id: 3, name: 'Somos Estadounidenses', to: 'we-are-american' },
  { id: 4, name: 'Únete a Genuine', to: 'join-us' },
]

export default function Menu() {
  return (
    <div className='bg-white w-full px-6 py-8  rounded-2xl '>
      {/* generar la x */}
      <div className='flex justify-between items-center'>
        <svg className='w-5 h-5 text-lg text-[#050831] font-normal cursor-pointer' viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.37112 7.62152L14.6085 2.38415C14.8571 2.13603 14.9969 1.79932 14.9972 1.44811C14.9975 1.0969 14.8583 0.759946 14.6101 0.511381C14.362 0.262817 14.0253 0.123001 13.6741 0.122691C13.3229 0.122381 12.9859 0.261602 12.7374 0.509728L7.5 5.7471L2.26263 0.509728C2.01407 0.261163 1.67694 0.121521 1.32542 0.121521C0.973897 0.121521 0.636771 0.261163 0.388207 0.509728C0.139642 0.758292 0 1.09542 0 1.44694C0 1.79846 0.139642 2.13559 0.388207 2.38415L5.62557 7.62152L0.388207 12.8589C0.139642 13.1075 0 13.4446 0 13.7961C0 14.1476 0.139642 14.4847 0.388207 14.7333C0.636771 14.9819 0.973897 15.1215 1.32542 15.1215C1.67694 15.1215 2.01407 14.9819 2.26263 14.7333L7.5 9.49595L12.7374 14.7333C12.9859 14.9819 13.3231 15.1215 13.6746 15.1215C14.0261 15.1215 14.3632 14.9819 14.6118 14.7333C14.8604 14.4847 15 14.1476 15 13.7961C15 13.4446 14.8604 13.1075 14.6118 12.8589L9.37112 7.62152Z" fill="#050831" />
        </svg>

        <Image src='/imgs/logo-menu.png'
          alt='logo de la empresa'
          className='w-16 h-full'
          width={70} height={46}
        />
      </div>


      <ul className='mt-4 flex flex-col gap-y-3'>
        {menuItems.map((item) => (
          <li key={item.id}>
            <ScrollLink to={item.to} smooth={true} duration={500} className='text-lg text-primary font-semibold cursor-pointer'>{item.name}</ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
