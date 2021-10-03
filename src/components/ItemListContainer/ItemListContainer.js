import {useEffect, useState} from 'react';
import Spinner from 'react-bootstrap/Spinner';
import './StyleItemListContainer/ItemListContainer.css';
import ItemList from './ItemList';
import { useParams} from 'react-router-dom';
import { getFirestore } from '../../Services/getFirebase';



export default function ItemListContainer () {
  
    const [destinations, setDestinations] = useState([])
    const [ dest, setDest ] = useState({})
    const [loading, setLoading] = useState(true)
    const { idCategory} = useParams()

       
    useEffect(() => {

      const dbQuery = getFirestore()

      dbQuery.collection('destinations').get()
      .then(resp => {
        setDestinations( resp.docs.map( d=> ( {id: d.id, ...d.data() })))        
      })  
      .catch(err => console.log(err))
      .finally(()=> setLoading(false))
      
    }, [idCategory])


    

   
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
