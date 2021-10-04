import { FcEmptyTrash } from 'react-icons/fc';
import { useCartContext  } from '../Context/cartContext';



 function TrashCountButton () {

    const { deleteFromCart } = useCartContext()


    

    return (
        <>
        
        <div className="trashcart">
        
        <FcEmptyTrash onClick= {()  => deleteFromCart()} /> <br />
       

        </div>

        </>
    )
}
export default TrashCountButton