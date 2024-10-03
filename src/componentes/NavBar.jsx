import "./navbar.css"
import "./CartWidget"
import CartWidget from "./CartWidget"

const NavBar = () => {

    return(
        <nav className="navbar">
            <div className="divNav">
                <h1 className="h1">Closteria</h1>
                <ul className="itempadre">
                    <li className="itemHijo">Jens</li>
                    <li className="itemHijo">Buzos</li>
                    <li className="itemHijo">Remeras</li>
                </ul>
                <CartWidget/>
            </div>
            
                
            
        </nav>
    )
}
export default NavBar