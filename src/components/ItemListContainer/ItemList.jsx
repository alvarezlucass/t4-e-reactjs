import React, { memo } from 'react';
import Item from './Item';


 const ItemList = memo (({destinations}) => {
    return (
        <>
           
                { destinations.map(destination=>  <Item destination={destination} />  )  }
            
        </>
    )
}
, (oldDest, newDest) => oldDest.destinations.length === newDest.destinations.length)

export default ItemList
