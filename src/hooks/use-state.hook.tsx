import { useState } from 'react';

function initValue () {
    console.log('run initValue function');
    return 1;
}

export function UseStateHook() {
    const [counter, setCounter] = useState(initValue())
    const decrement = () => {
        setCounter( (counter) => {
            console.log('first subtraction')
            return counter - 1
        });
        setCounter( (counter) => {
            console.log('second subtraction')
            return counter - 1
        });
    }
    console.log('After decrement');

    const increment = () => {
        console.log('first increment');
        setCounter(counter + 1);
        console.log('second increment');
        setCounter(counter + 1);
    }

    return <>
        <button onClick={decrement}> - </button>
        <span> { counter }  </span>
        <button onClick={increment}> + </button>
        </>
}


/* Notes:
* 1, useState takes "value" or "function" as params
*       value => be executed at EACH re-render of the functional component
*       function => if passed as initValue(), it will be called at EACH re-render of the functional component
*       function => if passed as initValue, it will be called ONLY at initialisation of the functional component
*
* 2, state setter function takes "value" or "function" as params
*       value => The previous value is passing as a snapshot at EACH re-render of the functional component
*       function => if passed as initValue(), it will be called at EACH re-render of the functional component
* */
