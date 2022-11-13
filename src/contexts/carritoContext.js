import { createContext } from "react"

const carritoContext = createContext({
    carrito: [],
    setCarrito: (carrito) => {}
});

export default carritoContext;