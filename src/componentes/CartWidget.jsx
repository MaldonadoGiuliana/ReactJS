import { IoIosCart } from "react-icons/io";

const CartWidget = () => {
    let contador = 0
    return(
        <div className="cartwidget" >
            <IoIosCart size={20} />
            <p className="itemHijo">1</p>
        </div>
    )
}
export default CartWidget
