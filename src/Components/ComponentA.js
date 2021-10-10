import React from 'react';
import ComponentB from './ComponentB';

const ComponentA = (props) => {
    return (
        <>
            <h3>Component A</h3>
            <ComponentB />
        </>
    )
}


export default ComponentA;