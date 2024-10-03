import  iconCarrito from "../assets/carrto.png"

const CartWidget = () => {
    let contador = 0
    return(
        <div className="cartwidget" >
            <img src= {iconCarrito} width={20} alt="" />
            <p className="itemHijo">0</p>
        </div>
    )
}
export default CartWidget
