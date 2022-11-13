import { createContext } from "react"

const showModalContext = createContext({
    showModal: false,
    setShowModal: (showModal) => {}
});

export default showModalContext;