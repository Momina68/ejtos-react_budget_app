import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { dispatch, currency, budget, expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += (item.cost));
    }, 0);
    const remaining = budget - totalExpenses

    return (
        <>
          <span className='alert alert-success' style={{width: '20%', marginRight: '1rem'}}>Remaining: {currency} {remaining}</span>
          <span className='alert alert-primary' style={{width: '20%', marginRight: '1rem'}}>Spent so far: {currency} {totalExpenses}</span>
          <div className="input-group-text" style={{width: '20%'}}>
            <label htmlFor="inputGroupSelect01">Currency</label>
            <select className="custom-select" id="inputGroupSelect01" defaultValue="£" onChange={(event) => dispatch({type: 'CHG_CURRENCY', payload: event.target.value})}>
                <option value="$" name="$ Dollar">$ Dollar</option>
                <option value="£" name="£ Pound" >£ Pound</option>
                <option value="€" name="€ Euro">€ Euro</option>
                <option value="₹" name="₹ Rupee">₹ Rupee</option>
                  </select>
          </div>
                  </>
    );
};

export default Remaining;