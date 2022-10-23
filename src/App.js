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
                <div className='keypad'>
                    <button className='keypad_button'>Clear</button>
                    <button className='keypad_button'>C</button>
                    <button className='keypad_button'>&divide;</button>
                    <button className='keypad_button'>7</button>
                    <button className='keypad_button'>8</button>
                    <button className='keypad_button'>9</button>
                    <button className='keypad_button'>&times;</button>
                    <button className='keypad_button'>4</button>
                    <button className='keypad_button'>5</button>
                    <button className='keypad_button'>6</button>
                    <button className='keypad_button'>&ndash;</button>
                    <button className='keypad_button'>1</button>
                    <button className='keypad_button'>2</button>
                    <button className='keypad_button'>3</button>
                    <button className='keypad_button'>+</button>
                    <button className='keypad_button'>0</button>
                    <button className='keypad_button'>.</button>
                    <button className='keypad_button'>=</button>
                </div>
            </div>
            <h1>{result}</h1>
            <a href='https://youtu.be/hpfDRnijdPE?t=235'>Letzter Stand des Videos</a> 
        </>
    )
}

export default App;