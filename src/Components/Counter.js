import React, {useReducer} from 'react';
import {Button, ButtonGroup, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = {
    counter: 0
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return {...state, counter: state.counter + action.payload};
        case 'decrement':
            return {...state, counter: state.counter - action.payload};
        case 'reset':
            return initialState;
        default:
            return state
    }
}

const Counter = () => {
    const [count1, dispatch1] = useReducer(reducer, initialState);
    const [count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <>
            <ButtonGroup>
                <Button color="primary">
                    Counter1 <Badge color="secondary">{count1.counter}</Badge>
                </Button>
                <Button color="primary">
                    Counter2 <Badge color="secondary">{count2.counter}</Badge>
                </Button>
            </ButtonGroup>

            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch1({type: 'increment', payload: 1})}>Increment counter1</Button>
                <Button color="danger" onClick={() => dispatch1({type: 'decrement', payload: 1})}>Decrement counter1</Button>
            </ButtonGroup>


            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch2({type: 'increment', payload: 1})}>Increment
                    counter2</Button>
                <Button color="danger" onClick={() => dispatch2({type: 'decrement', payload: 1})}>Decrement
                    counter2</Button>
            </ButtonGroup>
            <br/>
            <ButtonGroup className={'d-block mt-1'}>
            <Button color="danger"
                    onClick={() => dispatch1({type: 'reset'})}>Reset counter 1</Button>
            <Button color="danger"
                    onClick={() => dispatch2({type: 'reset'})}>Reset counter 2</Button>
            </ButtonGroup>
        </>
    )
};

export default Counter;