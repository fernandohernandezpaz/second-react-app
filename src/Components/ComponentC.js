import React from 'react';
import { NameContext, ColorContext } from '../App';

const ComponentC = () => {
    return (
        <>
            <h3>Component C</h3>
            <NameContext.Consumer>
                {name => {
                    return (
                        <ColorContext.Consumer>
                            {color => (
                                <div>Name is {name}, Color: <span style={{color}}>{color}</span> </div>
                            )}
                        </ColorContext.Consumer>
                    )
                }}
            </NameContext.Consumer>
        </>
    )
}


export default ComponentC;