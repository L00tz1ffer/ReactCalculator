import React, {useState} from 'react'
import './App.css';

const App = () => {
    const [result, setResult] = useState("test");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{
        setResult("");
    }
    const backspace = () =>{

    }



    return (
        <>
            <div className='container'>
                <form>
                    <input type="text" value={result}></input>
                </form>
                <div className='keypad'>
                    <button className='keypad_button' onClick={clear} id="clear">Clear</button>
                    <button className='keypad_button' onClick={backspace} id="backspace">C</button>
                    <button className='keypad_button' name="/" onClick={handleClick}>&divide;</button>
                    <button className='keypad_button' name="7" onClick={handleClick}>7</button>
                    <button className='keypad_button' name="6" onClick={handleClick}>8</button>
                    <button className='keypad_button' name="9" onClick={handleClick}>9</button>
                    <button className='keypad_button' name="*" onClick={handleClick}>&times;</button>
                    <button className='keypad_button' name="4" onClick={handleClick}>4</button>
                    <button className='keypad_button' name="5" onClick={handleClick}>5</button>
                    <button className='keypad_button' name="6" onClick={handleClick}>6</button>
                    <button className='keypad_button' name="-" onClick={handleClick}>&ndash;</button>
                    <button className='keypad_button' name="1" onClick={handleClick}>1</button>
                    <button className='keypad_button' name="2" onClick={handleClick}>2</button>
                    <button className='keypad_button' name="3" onClick={handleClick}>3</button>
                    <button className='keypad_button' name="+" onClick={handleClick}>+</button>
                    <button className='keypad_button' name="0" onClick={handleClick}>0</button>
                    <button className='keypad_button' name="." onClick={handleClick}>.</button>
                    <button className='keypad_button' onClick={handleClick}>=</button>
                </div>
            </div>
            <h1>{result}</h1>
            <a href='https://youtu.be/hpfDRnijdPE?t=235'>Letzter Stand des Videos</a> 
        </>
    )
}

export default App;