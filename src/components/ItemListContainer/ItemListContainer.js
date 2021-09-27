import React from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './StyleItemListContainer/ItemListContainer.css';

import {useEffect, useState} from 'react';
import { useParams} from 'react-router-dom'
import { getFirestore } from '../../Services/getFirebase';
import ItemList from './ItemList';

export default function ItemListContainer ({greeting}) {
  
    const [destinations, setDestinations] = useState([])
    const [ item, setItem] = useState({})
    const [loading, setLoading] = useState(true)
    // const [bool, setBool] = useState(true)
    const { idCategory } = useParams()

       
    useEffect(() => {

      const dbQuery = getFirestore()

      dbQuery.collection('items').get()
      .then(resp => {
        console.log(resp)            // setDestinations(resp.docs.map(item=> console.log(item)))
      })
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      
    }, [idCategory])

    console.log(idCategory)

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
    <h1>{greeting}</h1>
    { loading ?
      <Spinner animation="grow" />
      :
      <ItemList destinations={destinations} />
      
    }
    </>
  )
    
}
