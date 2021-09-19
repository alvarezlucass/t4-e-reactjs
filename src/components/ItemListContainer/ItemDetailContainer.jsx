import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getFetchDetail } from '../utils/getDetail'
import { ItemDetail } from './ItemDetail'




export default function  ItemDetailContainer() {
    const [ dest, setDest] = useState ({})
    const {idDestination} = useParams ()

    useEffect(() => {

        getFetchDetail
    .then(resp=> setDest(resp))
    .catch(err => console.log(err))
    
}, [] )

console.log(idDestination);

    return (
        <>
        <ItemDetail  dest={dest} />

        </>
    )
}