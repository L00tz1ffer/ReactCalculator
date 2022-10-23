import React, {useState} from 'react'
import './App.css';

const App = () => {
    const [result, setResult] = useState("test");
    return (
        <>
            <div className='container'>
                <form>
                    <input type="text" value={result}></input>
                </form>
                <div className='input'>
                    <button>Clear</button>
                    <button>C</button>
                    <button>&divide;</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button>&times;</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>&ndash;</button>
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>+</button>
                    <button>0</button>
                    <button>.</button>
                    <button>=</button>
                </div>
            </div>
            <h1>{result}</h1>
            <a href='https://youtu.be/hpfDRnijdPE?t=235'>Letzter Stand des Videos</a> 
        </>
    )
}

export default App;