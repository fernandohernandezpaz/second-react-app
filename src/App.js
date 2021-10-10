import React, {useReducer} from 'react';
import './App.css';
import NewCounter from './Components/NewCounter';

export const NameContext = React.createContext();
export const ColorContext = React.createContext();
export const CounterContext = React.createContext();

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

function App() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="App">
            <CounterContext.Provider value={{counter: count.counter, dispatch}}>
                <NewCounter/>
            </CounterContext.Provider>

        </div>
    );
}

export default App;
