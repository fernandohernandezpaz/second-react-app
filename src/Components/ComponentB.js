import React, {useContext} from 'react';
import ComponentC from './ComponentC';
import {NameContext, ColorContext} from '../App';

const ComponentB = () => {
    const userName = useContext(NameContext);
    const color = useContext(ColorContext);
    return (
        <>
            <h3>Component B</h3>
            <p>Name: {userName}, color <span style={{color}}>{color}</span></p>
            <ComponentC/>
        </>
    )
}


export default ComponentB;