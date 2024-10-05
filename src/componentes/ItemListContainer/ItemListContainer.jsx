const ItemListContainer = (props) => {
    const { saludo } = props
    return(
        <div>
            <h2 className="saludo">{saludo }</h2>
        </div>
    )
}
export default ItemListContainer