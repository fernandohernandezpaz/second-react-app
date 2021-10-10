import React, {useReducer} from 'react';
import {Button, ButtonGroup} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = 0;
const reducer = (state, action) => {
    switch (action.toLowerCase()) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}

const Counter = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <>
            <ButtonGroup>
                <Button color="primary" onClick={() => dispatch('increment')}>Increment</Button>
                <Button color="dark" onClick={() => dispatch('decrement')}>Decrement</Button>
                <Button color="danger" onClick={() => dispatch('reset')}>Reset</Button>
            </ButtonGroup>
            <p>{count}</p>
        </>
    )
};

export default Counter;