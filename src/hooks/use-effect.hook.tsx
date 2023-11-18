import { useEffect, useState } from 'react';

export function UseEffectHook() {

    const [resourceType, setResourceType] = useState('users');
    const [resources, setResources] = useState([]);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    const [renderCounter, setRenderCounter] = useState(0);


    const resizeHandler = () => {
        console.log('Execute resize event listener')
        setWindowWidth(window.innerWidth);
        setWindowHeight(window.innerHeight)
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
            .then(response => response.json())
            .then(json => setResources(json))
    }, [resourceType]);

    useEffect(() => {
        console.log('AddEventListener event listener effect')
        window.addEventListener('resize', resizeHandler);
        return () => {
            console.log('Remove resize event listener')
            window.removeEventListener('resize', resizeHandler);
        }
    }, []);

    useEffect(() => {
        setRenderCounter((preRenderCounter) => { return preRenderCounter + 1 })
    },[]);

    useEffect(() => {
        setRenderCounter((preRenderCounter) => { return preRenderCounter + 1 })
    },[]);

    return (
        <>
            <h3> Number of rendering { renderCounter }</h3>
            <br/>
            <br/>

            <h3> Current window inner size :</h3>
            <p> Inner Width: { windowWidth }</p>
            <p> Inner Height: { windowHeight }</p>
            <br/>
            <br/>
            <br/>
            <div>
                <button onClick={() => setResourceType('posts')} > Posts </button>
                <button onClick={() => setResourceType('comments')} > Comments </button>
                <button onClick={() => setResourceType('users')} > Users </button>

            </div>

            <p> {resourceType} </p>
            {
                resources.map((resource: any) =>
                    <pre key={resource.id}> { JSON.stringify(resource) }</pre>
                )
            }
        </>
    )
}

/* Notes:
*  1, Pass un empty array to useEffect => onMount life cycle hook
*
*  2, return a function in useEffect hook, this function will be the cleanup function at EACH RENDER
*
*  3, No dependencies passed === run at EACH RENDER
*
* */
