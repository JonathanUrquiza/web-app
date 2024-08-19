'use client'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import DevNavbar from '@/components/devNavbar/DevNavbar';




export default function layout({
    children,}:Readonly<{
         children:React.ReactNode;
    }>) {
  return (
    <>
    <DevNavbar/>
    {children}
    </>
  )
}
