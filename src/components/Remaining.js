import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Remaining = () => {
    const { budget, remaining } = useContext(AppContext);

    return (
        <>
          <span className='alert alert-success' style={{width: '30%', marginRight: '1rem'}}>Remaining: {remaining}</span>
          <span className='alert alert-primary' style={{width: '30%'}}>Spent so far: {budget-remaining}</span>
        </>
    );
};

export default Remaining;