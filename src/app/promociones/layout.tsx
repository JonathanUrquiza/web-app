'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import PromoNav from '@/components/PromoNavbar/PromoNav';
export default function Promocioneslayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <PromoNav/>
            {children}
        </>
    )
}
 

