"use client";
import React from 'react'
import CompanyLocation from './CompanyLocation'
import GlobalPresence from './GlobalPresence'
import { Element } from 'react-scroll'

export default function WeAreAmerican() {
    return (
        <Element name="we-are-american">
            <div className='flex flex-col my-5 gap-4 md:h-[calc(100vh-2rem)]'>
                <CompanyLocation />
                <GlobalPresence />
            </div>
        </Element>
    )
}
