import Link from 'next/link'
import React from 'react'
import CardPicture from '../cardPicture/CardPicture'

export default function CardLink() {
    return (
        <>
            <li className='list-group m-3 col-2 text-center'>
                <Link href={"/"}>
                    <CardPicture CardImage={"/"} />
                </Link>
            </li>
        </>
    )
}
