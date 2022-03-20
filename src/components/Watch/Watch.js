import React, { useEffect, useState } from 'react';
import Dispaly from '../Display/Dispaly';

const Watch = () => {
    const [steps, setSteps]= useState(0)
    const increaseSteps = ()=> {
        // const newSteps = steps + 1;
        setSteps(steps + 1)
    }
    useEffect( ()=>{
        console.log(steps)
    },[steps])
    return (
        <div style={{border:'2px solid purple', margin:'20px'}}>
            <h2>This My Smart Watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Run</button>
            <Dispaly name='Garmin' steps={steps}></Dispaly>
        </div>
    );
};

export default Watch;