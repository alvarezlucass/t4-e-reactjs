import { memo } from 'react';
import Item from './Item';



const ItemList = memo (({destinations}) => {
    return (
        <>
           
                { destinations.map(destination=>  <Item destination={destination} />  )  }
            
        </>
    )

}
)

export default ItemList
