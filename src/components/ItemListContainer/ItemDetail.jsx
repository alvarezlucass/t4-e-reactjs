import React from 'react';
import ItemCountButton from '../Buttons/ItemCountButton';
import './StyleItemListContainer/ItemDetail.css';
 
//Dependence
import { 
    NavBtn,
    NavBtnLink,       
} from '../NavBar/ElementsNavBar';
import { useCartContext } from '../Context/cartContext';


export const ItemDetail = ({dest}) => {

  // const { addDest } = useCartContext ()

  const onAdd= (cant)=>{
    console.log(cant)
  }
    return (
        <>
        <div className="item-detail">
          <div className="card-left">
            <div className="location">
              <h1>{dest.location}</h1>
            <img className="img-detail" src={dest.img} alt="img" />
            <div className="description">
            <h3>Detalle de Salida</h3>
              <h2>{dest.description}</h2>
            </div>
            <div className="date">
            <h3>Fecha</h3>
              <h2>{dest.date}</h2>
            </div>
            </div>
          </div>
          <div className="card-right">
            <div className="level">              
              <h5>Nivel:</h5><h1> {dest.level}</h1>
            </div>
            <div className="price">
              <h3>Valor de la Salida</h3>
              <h4>$ {dest.price}</h4>
            </div>

          <center>
          <ItemCountButton initial={1} stock={5} onAdd={onAdd} />
          {/* <NavBtn>
              <NavBtnLink to={`/destination/${dest.id}`}>Reserva tu lugar!!</NavBtnLink>
          </NavBtn>           */}
          </center>
          </div>


        </div>

      
 
        </>
    )
}
