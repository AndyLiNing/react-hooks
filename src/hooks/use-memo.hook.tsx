import { BaseSyntheticEvent, useEffect, useMemo, useState } from 'react';

type Theme = 'dark' | 'light';
export const UseMemoHook = () => {
    const [counter, setCounter] = useState(0);
    const [theme, setTheme] = useState<Theme>('light');

    // WARNING: NOT RECOMMENDED, as 'double2' is calculated from 'double', NO NEED to create another state for it

    // const [double2, setDouble2] = useState(counter);
    // useEffect(() => {
    //     setDouble2(doubleCounterSlowFunction(counter));
    // }, [counter]);

    const themeStyle = useMemo(() => {
        return {
            backgroundColor: theme === 'light' ? '#333' : '#CCC',
            color: theme === 'light' ? '#CCC' : '#333',
            padding: '2rem',
            margin: '2rem'
        }
    }, [])

    // WARNING: This useEffect will RUN at EACH render, because 'themeStyle' is an object and be recreated at each render
    useEffect(() => {
        //  run some codes here...
        console.log('useEffect runs')
    }, [themeStyle])
    // Solution: Wrap the 'themeStyle' into useMemo



    // const double =  doubleCounterSlowFunction(counter);
    const double = useMemo(() => doubleCounterSlowFunction(counter), [counter]);

    function doubleCounterSlowFunction(counter: number) {
        console.log('Executing bad performance code')
        return counter * 2;
    }

    function changeTheme () {
       const newTheme = theme === 'light' ? 'dark' : 'light';
       setTheme(newTheme);
    }







    const onChangeNumber = (e: BaseSyntheticEvent) =>  setCounter( e.target.value);


    return <>
        <label htmlFor="input"> Change the number: </label>
        <input id="input" type="number" onChange={onChangeNumber}/>
        <p> The double is { double } </p>
        {/*<p> The double2 is { double2 }</p>*/}
        <br></br>
        <div style={themeStyle} onClick={changeTheme}>
            Click to change the theme
        </div>
    </>
}

/* Notes:
*  1, useMemo is used to wrap the bad performance (slow code) function, to avoid it executes at EACH re-render
*
*  2, referential equality
*
* */
