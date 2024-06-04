import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosAddCircle } from "react-icons/io";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
    const { dispatch } = useContext(AppContext);

    const handleAddCost = () => {
        const item = {
            name: props.name,

        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: item,
        });
    };

    const handleReduceCost = () => {
        const item = {
            name: props.name,
        };

        dispatch({
            type: 'RED_EXPENSE',
            payload: item,
        });
    };


    return (
        <tr>
        <td>{props.name}</td>
        <td>{props.quantity}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={handleAddCost}></IoIosAddCircle></td>
        <td><FaMinusCircle size='2.2em' color="red" onClick={handleReduceCost}></FaMinusCircle></td>
        </tr>
    );
};

export default ExpenseItem;