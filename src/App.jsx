import NavBar from './componentes/NavBar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer'
import './App.css'

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer saludo={"Bienvenidos a mi tienda"}/>
    </div>
  )
}

export default App
