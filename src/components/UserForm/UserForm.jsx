import React, { useState } from "react";
import "./userForm.css";
import Button from '../../components/navigation/Button/Button';
import { getDocs, collection, addDoc, query, where, writeBatch, documentId } from "firebase/firestore";
import firestoreDB from "../../services/firebase";
import { useNavigate } from 'react-router-dom';
import { useCartContext, totalPrice } from '../../context/CartContext';


// traigo la info del carrito directamente por props 
function UserForm({ cart }) {
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        telefono: "",
    });

    let navigate = useNavigate();
    const [orderFirebase, setOrderFirebase] = useState({
        id: '',
        complete: false,
    });

    const { totalPrice } = useCartContext();

    const ordenDeCompra = {
        buyer: { ...userData },
        items: [...cart],
        total: totalPrice(),
        date: new Date(),
    };

    async function handleSubmit(evt) {
        evt.preventDefault();

        const collectionRef = collection(firestoreDB, "orders");
        const order = await addDoc(collectionRef, ordenDeCompra);
        setOrderFirebase({ id: order.id, complete: true });

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

    if (orderFirebase.complete === true) {
        return (
            <div>
                <h1>Gracias por tu compra!</h1>
                <p>El id de seguimiento de tu compra es: {orderFirebase.id}</p>
            </div>
        );
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
                    <Button type="reset">Vaciar Carrito</Button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;