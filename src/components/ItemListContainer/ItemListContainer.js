import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './StyleItemListContainer/ItemListContainer.css';

import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'
import { getFirestore } from '../../Services/getFirebase';
import ItemList from './ItemList';

export default function ItemListContainer () {
  
    const [destination, setDestination] = useState([])
    const [ dest, setDest ] = useState({})
    const [loading, setLoading] = useState(true)
    // const [bool, setBool] = useState(true)
    const { idDestination } = useParams()

       
    useEffect(() => {

      const dbQuery = getFirestore()

      dbQuery.collection('destination').get()
      .then(resp => {
        setDestination(resp.docs.map(dest=> ({id: destination.id, ...destination.data})))
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      
    }, [idDestination])

    

    // const handleClick = (e) => {
    //   e.preventDefault()
    //   setBool(!bool)
    // }

    // const addDest = () => {
    //   setDestinations ([
    //     ...destinations,
    //     { id: "8", name: "Gorra 7", url: 'https://www.remerasya.com/pub/media/catalog/product/cache/e4d64343b1bc593f1c5348fe05efa4a6/r/e/remera_negra_lisa.jpg', categoria: "remera" , price: 2 }
    //   ])
    // }
        
  return (
    <>
    { loading ?
      <Spinner animation="grow" />
      :
      <ItemList destinations={destination} />
      
    }
    </>
  )
    
}
