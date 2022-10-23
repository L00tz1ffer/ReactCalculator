import React, {useState} from 'react'
import './App.css';

const App = () => {
    const [result, setResult] = useState("");
    const handleClick = (e) => {
        setResult(result.concat(e.target.name));
    }
    const clear = () =>{
        setResult("");
    }
    const backspace = () =>{
        setResult(result.slice(0, result.length -1));
    }
    const calculate = () =>{
        try {
            setResult(eval(result).toString()) 
        }catch (err) {
            setResult ("Error")
        }
        
    }



    return (
        <>
            <div className='container'>
                <form className='display'>
                    <input type="text" value={result}></input>
                </form>
                <div className='keypad'>
                    <button className='keypad_button highlight' onClick={clear} id="clear">Clear</button>
                    <button className='keypad_button highlight' onClick={backspace} id="backspace">C</button>
                    <button className='keypad_button highlight' name="/" onClick={handleClick}>&divide;</button>
                    <button className='keypad_button' name="7" onClick={handleClick}>7</button>
                    <button className='keypad_button' name="6" onClick={handleClick}>8</button>
                    <button className='keypad_button' name="9" onClick={handleClick}>9</button>
                    <button className='keypad_button highlight' name="*" onClick={handleClick}>&times;</button>
                    <button className='keypad_button' name="4" onClick={handleClick}>4</button>
                    <button className='keypad_button' name="5" onClick={handleClick}>5</button>
                    <button className='keypad_button' name="6" onClick={handleClick}>6</button>
                    <button className='keypad_button highlight' name="-" onClick={handleClick}>&ndash;</button>
                    <button className='keypad_button' name="1" onClick={handleClick}>1</button>
                    <button className='keypad_button' name="2" onClick={handleClick}>2</button>
                    <button className='keypad_button' name="3" onClick={handleClick}>3</button>
                    <button className='keypad_button highlight' name="+" onClick={handleClick}>+</button>
                    <button className='keypad_button' name="0" onClick={handleClick}>0</button>
                    <button className='keypad_button' name="." onClick={handleClick}>.</button>
                    <button className='keypad_button highlight' onClick={calculate} id="result">=</button>
                </div>
 
            </div>
           
            <div className='credits'>
                <p className='credits'>Vielen Dank für das Tutorial </p>
                <a className='credits' href='https://www.youtube.com/channel/UC9S8RYfxS_YYD_eh57fswzQ'>@Digital Solutions Master</a>
                <p className='credits'>Das Tutorial hierzu findest du <a className='credits' href='https://www.youtube.com/watch?v=hpfDRnijdPE'>hier</a></p> 
            </div>
        </>
    )
}

export default App;