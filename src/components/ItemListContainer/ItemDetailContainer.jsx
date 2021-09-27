import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail';
import { getFirestore } from '../../Services/getFirebase';




export default function  ItemDetailContainer() {
    const [ dest, setDest] = useState ({})
    const [loading, setLoading] = useState(true)
    const {idDestination} = useParams ()

    useEffect(() => {

        const dbQuery = getFirestore()
  
        dbQuery.collection('items').doc('IdDestination').get()
        .then(resp => {
          setDest ( {id: resp.id, ...resp.data()} )
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
      }, [idDestination])

console.log(idDestination);

    return (
        <>
        { loading ?
            <Spinner animation="grow" />
      :
        <ItemDetail  dest={dest} />
        }
        </>
    )
}