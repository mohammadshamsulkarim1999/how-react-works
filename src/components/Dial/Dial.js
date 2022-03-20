import React from 'react';

const Dial = (props) => {
    return (
        <div style={{border:'2px solid blue', margin:'20px'}}>
            <h3>This is dial: {props.name}</h3>
            <p>Steps so far : {props.steps}</p>
        </div>
    );
};

export default Dial;