"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Element } from 'react-scroll'

export default function HeroBanner() {
    return (
        <Element name="hero">
            <section className="relative w-full mb-6 mt-4  h-[calc(100vh-2rem)] rounded-2xl overflow-hidden">
                <div className="absolute inset-0 h-full">
                    <Image
                        src="/imgs/image.png"
                        alt="familia estudiando ingles en casa"
                        priority
                        className="w-full h-full object-cover object-center scale-x-[-1]"
                        fill
                    />
                </div>
                <div className='flex h-full w-full justify-center items-start  md:justify-start md:items-center pt-4  md:p-6'>
                    <div className="flex flex-col  items-center justify-center">
                        <div className="text-wrap break-words text-2xl/tight md:text-4xl/tight z-20 rounded-tl-2xl rounded-tr-2xl font-semibold text-primary py-8 px-6 w-xs md:w-md   bg-gradient-to-t from-gradient-from to-gradient-to">
                            Estás a punto de iniciar un viaje hacia el universo de la <span className="text-white bg-primary">
                                educación digital
                            </span>
                        </div>
                        <div className="flex justify-center items-center z-20 bg-white w-xs md:w-md rounded-bl-2xl rounded-br-2xl">
                            <Image
                                src="/imgs/logo.png"
                                alt="Logo de studyatgenuine.com"
                                className="object-contain  py-6 px-4 md:px-24 h-full w-3xs  md:w-full "
                                width={385}
                                height={105}
                            />
                        </div>
                    </div>
                </div>


                {/* Card Overlay */}
                <div className="absolute left-1/2 bottom-10 transform -translate-x-1/2  ">
                    <Link
                        href="https://studyatgenuine.com"
                        target="_blank"
                        rel="noopener noreferrer"

                        className="text-3xl font-bold text-white">studyatgenuine.com</Link>
                </div>

            </section>
        </Element>
    )
}
