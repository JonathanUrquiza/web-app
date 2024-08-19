'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import ResumeNav from '@/components/resumeNav/ResumeNav';
export default function Promocioneslayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <ResumeNav/>
            {children}
        </>
    )
}
 

