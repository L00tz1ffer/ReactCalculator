import React, {useState} from 'react'


const App = () => {
    const [result, setResult] = useState("Hi");
    return (
        <>
            <h1>{result}</h1>
            /* https://youtu.be/hpfDRnijdPE?t=235 */
        </>
    )
}

export default App;