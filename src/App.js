import React from 'react';
import './App.css';
import ComponentA from './Components/ComponentA';
import Counter from './Components/Counter';
export const NameContext = React.createContext();
export const ColorContext = React.createContext();

function App() {
    return (
        <div className="App">
            {/*<NameContext.Provider value={'Smith'}>*/}
            {/*    <ColorContext.Provider value={'red'}>*/}
            {/*        <ComponentA/>*/}
            {/*    </ColorContext.Provider>*/}
            {/*</NameContext.Provider>*/}

            <Counter />
        </div>
    );
}

export default App;
