import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { dispatch, budget, currency } = useContext(AppContext);
    const [ total, setTotal] = useState(budget)

    return (
        <div className="input-group-text" style={{width: '31%'}}>
            <span style={{ marginRight: '1rem'}}>Budget: {currency}</span>
            <input
                required='required'
                type='number'
                id='budget'
                step={10}
                value={total}
                style={{size: '5'}}
                onChange={(event) => setTotal(event.target.value)}
                onBlur = {()=> dispatch({ type: 'SET_BUDGET', payload: parseInt(total)})}>
                </input>
        </div>
    );
};

export default Remaining;