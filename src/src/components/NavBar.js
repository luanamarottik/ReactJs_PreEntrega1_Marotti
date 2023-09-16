import CartWidget from "./CartWidget/CartWidget";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const NavBar = () => {
    return (
        <nav>
            <h3>Manu.Be</h3>
            <div>
                <button>Inicio</button>
                <button>Misión</button>
                <button>Prendas</button>
                <button>Agenda</button>
            </div>
            <CartWidget />
            <ItemListContainer greeting={'Bienvenidos'}/>
        </nav>
    )
}

export default NavBar;