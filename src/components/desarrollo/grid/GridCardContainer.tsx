import React from 'react'
import 'react-bootstrap'
import CardLink from '../card/cardLink/CardLink'




export default function GridCardContainer() {
  return (
    <div className='card col-12 col-md-10 offset-md-1 my-4'>
        <div className='card-header'>
            <h2 className='text-center'>Más proyuectos en <span className='text-danger'>HTML</span> y <span className='text-info'>CSS</span>.</h2>
        </div>
        <div className='card-body'>
           <ul className=' d-flex flex-row align-items-center justify-content-around flex-wrap'>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
            <CardLink/>
           </ul> 
        </div>
        <div className='card-footer'>
            <p>Son algunas demostraciones de la potenmcia de <span className='text-info'>CSS3</span> con todas sus herramientas disponibles.</p>
        </div>
    </div>
  )
}
