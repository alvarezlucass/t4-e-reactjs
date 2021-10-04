import { GiWaterRecycling } from 'react-icons/gi';
import { useCartContext  } from '../Context/cartContext';



 function CleanCountButton () {

    const { emptyCart } = useCartContext()


    

    return (
        <>
        <div className="emptycart">
        <GiWaterRecycling onClick= {()  => emptyCart()} /> <br />
        </div>

        
        </>
    )
}
export default CleanCountButton

