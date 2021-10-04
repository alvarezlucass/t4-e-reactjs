import Spinner from 'react-bootstrap/Spinner';

import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { ItemDetail } from './ItemDetail';
import { getFirestore } from '../../Services/getFirebase';




export default function  ItemDetailContainer() {
    const [destination, setDestinations] = useState([])
    const [loading, setLoading] = useState(true)
    const {idDestination} = useParams ()

    useEffect(() => {

        const dbQuery = getFirestore()
  
        dbQuery.collection('destinations').doc('idDestination').get()
        .then(resp => {
          setDestinations( {id: resp.id, ...resp.data() })        
        })  
        .catch(err => console.log(err))
        .finally(()=> setLoading(false))
        
      }, [idDestination])


    return (
        <>
        { loading ?
            <Spinner animation="grow" />
      :
        <ItemDetail  destination={destination} />
        }
        </>
    )
}