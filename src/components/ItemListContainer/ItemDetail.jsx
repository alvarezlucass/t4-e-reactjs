import ItemCountButton from '../Buttons/ItemCountButton';
import './StyleItemListContainer/ItemDetail.css';
 
//Dependence

import { useCartContext } from '../Context/cartContext';


export const ItemDetail = ({destination}) => {

  const { addDest } = useCartContext ()

  const onAdd= (cant)=>{
    addDest ( { destination, cant}) 
  }
    return (
        <>

        <div className="item-detail">
          <div className="card-left">
            <div className="location">
              <h1>{destination.location}</h1>
            <img className="img-detail" src={destination.img} alt="img" />
            <div className="description">
            <h3>Detalle de Salida</h3>
              <h2>{destination.description}</h2>
            </div>
            {/* <div className="date">
            <h3>Fecha</h3>
              <h2>{destination.date}</h2>
            </div> */}
            </div>
          </div>
          <div className="card-right">
            <div className="level">              
              <h5>Nivel:</h5><h1> {destination.level}</h1>
            </div>
            <div className="price">
              <h3>Valor de la Salida</h3>
              <h4>$ {destination.price}</h4>
            </div>

          <center>
          <ItemCountButton initial={1} stock={5} onAdd={onAdd} />
         
          </center>
          </div>


        </div>

      
 
        </>
    )
}
