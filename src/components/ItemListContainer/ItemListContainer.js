import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './StyleItemListContainer/ItemListContainer.css';

import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'
import { getFirestore } from '../../Services/getFirebase';
import ItemList from './ItemList';

export default function ItemListContainer () {
  
    const [destinations, setDestinations] = useState([])
    const [ dest, setDest ] = useState({})
    const [loading, setLoading] = useState(true)
    const { idDestination} = useParams()

       
    useEffect(() => {

      const dbQuery = getFirestore()

      dbQuery.collection('destination').get()
      .then(resp => {
        // console.log(resp)
        setDestinations(resp.docs.map(des=> ( {id: des.id, ...des.data() })))
        // console.log(setDestination)
        // console.log(resp)
        // console.log(destination)
      })  
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      
    }, [idDestination])

    

   
  return (
    <>
    { loading ?
      <Spinner animation="grow" />
      :
      <ItemList destinations={destinations} />
      
    }
    </>
  )
    
}
