import React, {useState} from 'react'


const App = () => {
    const [result, setResult] = useState("Hi");
    return (
        <>
            <h1>{result}</h1>
            <a href='https://youtu.be/hpfDRnijdPE?t=235'>Letzter Stand des Videos</a> 
        </>
    )
}

export default App;