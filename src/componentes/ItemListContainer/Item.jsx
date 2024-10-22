const Item = ({product}) =>{
    return(
        <div> 
            <h2>{product.nombre}</h2>
            <p>Precio: ${product.precio}</p>
        </div> 
    )
}
export default Item