import { BaseSyntheticEvent, useEffect, useRef, useState } from 'react';

export const UseRefHook = () => {
    const [userName, setUserName] = useState('');

    const inputRef = useRef<HTMLInputElement | null>(null);
    const preUserName = useRef('')

    const onInputChange = (e: BaseSyntheticEvent) =>  {
       setUserName(() => e.target.value)
    }

    const focus = () => {
        inputRef.current?.focus()
    }

    useEffect(() => {
        preUserName.current = userName;
    },[userName]);

    return <>
        <label htmlFor="userName"> Please enter user name: </label>
        <input ref={inputRef}  id="userName" onChange={onInputChange}/>
        <br/>
        <p> Entered user name: { userName }</p>
        <p> Previous entered user name: { preUserName.current }</p>

        <button onClick={focus}> Click to focus input</button>
    </>
}

/* Notes:
*  1, Can be used to persist data between renderings like useState, however, it won't trigger the re-render
*
*  2, Do NOT use useRef hook to change the Input value, let useState to update the state of the component
*
*  3, Do NOT use useRef hook to manipulate DOM
*
* */
