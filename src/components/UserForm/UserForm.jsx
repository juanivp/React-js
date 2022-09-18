import React, { useState } from "react";
import "./userForm.css";
import Button from '../../components/navigation/Button/Button';
import {  collection, addDoc } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import { useCartContext } from '../../context/CartContext';
import swal from 'sweetalert';



// traigo la info del carrito directamente por props 
function UserForm({ cart }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });

    const { totalPrice } = useCartContext();
    const { clearCart} = useCartContext();

    const ordenDeCompra = {
        buyer: { ...userData },
        items: [...cart],
        total: totalPrice(),
        date: new Date(),
    };

    async function handleSubmit(evt) {
        evt.preventDefault();
        // me conecto a firebase
        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, ordenDeCompra);
        setOrderFirebase({ id: order.id, complete: true });
        swal(`Muchas gracias por tu compra, ${userData.name}😊`, `El ID de tu orden es ${order.id}`,"success");
        // termino el submit borrando los datos del carrito
        clearCart();
    }

    function inputChangeHandler(evt) {
        const input = evt.target;

        const value = input.value;
        const inputName = input.name;

        let copyUserData = { ...userData };

        copyUserData[inputName] = value;
        setUserData(copyUserData);
    }

    function handleReset(evt) {
        setUserData({
            name: "",
            email: "",
            telefono: "",
        });
    }

    return (
        <div className="form-container">
            <form onReset={handleReset} onSubmit={handleSubmit}>
                <div className="form-item">
                    <label htmlFor="name">Nombre</label>
                    <input
                        value={userData.name}
                        onChange={inputChangeHandler}
                        name="name"
                        type="text"
                        placeholder="Nombre"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="telefono">Telefono</label>
                    <input
                        value={userData.telefono}
                        onChange={inputChangeHandler}
                        name="telefono"
                        type="text"
                        placeholder="Telefono"
                        required
                    />
                </div>

                <div className="form-item">
                    <label htmlFor="email">Email</label>
                    <input
                        value={userData.email}
                        onChange={inputChangeHandler}
                        name="email"
                        type="text"
                        placeholder="Correo"
                        required
                    />
                </div>

                <div>
                    <Button type="submit" onTouch={handleSubmit}>
                        Finalizar Compra
                    </Button>
                    <Button type="reset">Limpiar datos</Button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;