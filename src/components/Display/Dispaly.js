import React from 'react';
import Dial from '../Dial/Dial';

const Dispaly = (props) => {
    // props.steps =55;
    return (
        <div style={{border: '2px solid green' ,margin:'20px'}}>
            <h2>Name: {props.name}</h2>
            <p>So far steps today: {props.steps}</p>
            <Dial steps={props.steps}></Dial>
        </div>
    );
};

export default Dispaly;