import React, {useContext} from 'react';
import {Button, ButtonGroup, Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CounterContext} from '../App';

const NewCounter = () => {
    const counterContext = useContext(CounterContext)
    const {counter, dispatch} = counterContext;
    return (
        <>
            <ButtonGroup>
                <Button color="primary">
                    Counter1 <Badge color="secondary">{counter}</Badge>
                </Button>
            </ButtonGroup>

            <ButtonGroup className={'d-block mt-1'}>
                <Button color="primary" onClick={() => dispatch({type: 'increment', payload: 1})}>Increment counter</Button>
                <Button color="danger" onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement counter</Button>
                <Button color="dark" onClick={() => dispatch({type: 'reset', payload: 1})}>Reset counter</Button>
            </ButtonGroup>
        </>
    )
}


export default NewCounter;