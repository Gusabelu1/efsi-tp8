import { createContext } from "react"

const productosContext = createContext({
    productos: [],
    setProductos: (productos) => {}
});

export default productosContext;