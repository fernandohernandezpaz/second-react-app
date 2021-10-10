import React, {useReducer} from 'react';
import {Button, ButtonGroup, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    counter1: 0,
    counter2: 10
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter1: state.counter1 + action.payload};
        case 'decrement':
            return {...state, counter1: state.counter1 - action.payload};
        case 'increment2':
            return {...state, counter2: state.counter2 + 1};
        case 'decrement2':
            return {...state, counter2: state.counter2 - 1};
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
                <Button color="primary">
                    Counter1 <Badge color="secondary">{count.counter1}</Badge>
                </Button>
                <Button color="primary">
                    Counter2 <Badge color="secondary">{count.counter2}</Badge>
                </Button>
            </ButtonGroup>
            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch({type: 'increment', payload: 1})}>Increment</Button>
                <Button color="danger" onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement</Button>
            </ButtonGroup>

            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch({type: 'increment', payload: 5})}>Increment 5</Button>
                <Button color="danger" onClick={() => dispatch({type: 'decrement', payload: 5})}>Decrement 5</Button>
            </ButtonGroup>

            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch({type: 'increment2'})}>Increment counter2</Button>
                <Button color="danger" onClick={() => dispatch({type: 'decrement2'})}>Decrement counter2</Button>
            </ButtonGroup>
            <br/>
            <Button color="danger" onClick={() => dispatch({type: 'reset'})}>Reset</Button>
        </>
    )
};

export default Counter;