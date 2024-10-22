import { useState, useEffect } from "react"
import { getProducts,getProductById, addProduct, modProduct, deleteProductById} from "../../utils/fetchApis.js"
import ItemList from './ItemList'
import "./Itemlistcontainer.css"

const ItemListContainer = ( {saludo} ) => {

    const [products, setProducts] = useState( [])

    const newProduct = {
        nombre:"Jeans Cargo",
        descripcion:"",
        stock: 8,
        precio: 13000,
        imagen:"",
        categoria:"jeans"
    }

    const mod ={
        precio: 120
    }

    useEffect( () => {
        getProducts()
            .then( (dataProducts) => setProducts(dataProducts))
            .catch( (error) => {
                console.log(error)
            })
            .finally( () => {
                console.log("Fin")
            })
        getProductById(1)
            .then( (data) => console.log(data))
    }, [])

    /*
    const nombres = ["Maldonado", "Daniel","Jonas"]
    const listaNombres = nombres.map((nombre) =>(<li>{nombre}</li>))
    */
    /*AGREGAR ESTILOS */

    const clickEvento = () =>{
        deleteProductById(1)
            .then( (data) =>setProducts(data))
        /*
        modProduct(2, mod)
            .then( (data) => setProducts(data) )
        
        addProduct(newProduct)
            .then( (data) => setProducts(data) )
        */
    }

    return(
        <div className="item-list-container">
            <h2>{saludo }</h2>
            <button onClick={clickEvento}>Eliminar producto</button>
            <ItemList products={products}/>
        </div>
    )
}
export default ItemListContainer