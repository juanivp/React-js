import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

const CartContext = React.createContext([]);

// la funcion useCartContext la creo para poder usar el contexto del carrito
// importando solo una funcion en vez de importar dos: useContext y el contexto que voy a necesitar
export const useCartContext = () => useContext(CartContext);

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    //funcion para agregar productos al carrito
    const addProduct = (item, quantity) => {
        if (isInCart(item.id)) {
            // si el item ya esta en el carrito, creo un nuevo array con map. 
            // Al producto que sea igual lo seteo con su nueva cantidad y a los que no sean iguales los quiero tal cual estaban
            setCart(cart.map(product => {
                return product.id == item.id ? { ...product, quantity: product.quantity + quantity } : product
            }));
        } else {
            setCart([...cart, { ...item, quantity: quantity }]);
            //si el producto no esta en el carrito, seteo un nuevo carrito con la info del anterior y le sumo un item nuevo con su quantity
        }
        
    }


    // funcion para setear el estado del carrito nuevamente al array vacio y asi vaciarlo
    const clearCart = () => setCart([]);

    //funcion que busca el producto segun su id en el carrrito y devuelve booleano
    const isInCart = (id) => {
        return cart.find(product => product.id == id) ? true : false;
    }

    // funcion para borrar un producto del carrito
    const removeProduct = (id) => {
        setCart(cart.filter(product => product.id !== id));
    }

    // funcion que recorre el array y por cada elemento multiplica item por price y lo va acumulando en el acumulador 
    // que llame prev. Tambien le doy un valor inicial que es 0
    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    // funcion que recorre el array y va sumando la propiedad quantity de cada producto, guardandola en el acumulador e iniciando en 0    
    const totalProducts = () => {
        return cart.reduce ((acumulador, productoActual) => acumulador + productoActual.quantity, 0);
    }



return (
    <CartContext.Provider value={{
        addProduct,
        removeProduct,
        isInCart,
        clearCart,
        totalPrice,
        totalProducts,
        cart,
    }}>
        {children}
    </CartContext.Provider>
)
}

export default CartProvider