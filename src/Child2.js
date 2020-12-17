import React, { useReducer } from 'react';
import CounterReducer from './CounterReducer';

const Child2 = () => {
    let [state, dispatch] = useReducer(CounterReducer, 10) // 2nd param is default value for statue
    console.log(state);

    return (
        <div>

        </div>
    )
}

export default Child2;