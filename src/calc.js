import { useState } from 'react';
import './calc.css';


const Calc = () => {


    // =============   JavaScript Code for third (Calculator)     =============

    const [v, setV] = useState('');

    const Calculate = () => {
        setV(eval(v) + "");
    }
    const Clear = () => {
        setV('');
    }
    const Del = () => {
        setV(v.slice(0, v.length - 1));   // slice() is a string method which cut elements(and returns cut elements) from 0 to except last(e.g. given from 0-5, it returns 0-4)
    }

    //  Code for checking thatoperators are not repeated continuously
    const Fun1 = (n) => {
        if (v.charAt(v.length - 1) != "/" && v.charAt(v.length - 1) != "*" && v.charAt(v.length - 1) != "-" && v.charAt(v.length - 1) != "+" && v.charAt(v.length - 1) != ".") {
            setV(v + n);
        }
    }



    //  ==================== JSX Code ====================
    return (
        <>
            <div className="third">
                <div className="calculator-container">
                    <input type="text" placehlder="H" value={v} />

                    <div className="row-1">
                        <button className="operator-1" value="AC" onClick={Clear}>AC</button>
                        <button className="operator-1" value="DEL" onClick={Del}>DEL</button>
                        <button className="operator-1" value="%" onClick={e => setV(v + e.target.value)}>%</button>
                        <button className="operators" value="/" onClick={() => { Fun1("/") }}>/</button>
                    </div>
                    <div className="row-1">
                        <button value="7" onClick={e => setV(v + e.target.value)}>7</button>
                        <button value="8" onClick={e => setV(v + e.target.value)}>8</button>
                        <button value="9" onClick={e => setV(v + e.target.value)}>9</button>
                        <button className="operators" value="*" onClick={() => { Fun1("*") }}>x</button>
                    </div>
                    <div className="row-1">
                        <button value="4" onClick={e => setV(v + e.target.value)}>4</button>
                        <button value="5" onClick={e => setV(v + e.target.value)}>5</button>
                        <button value="6" onClick={e => setV(v + e.target.value)}>6</button>
                        <button className="operators" value="-" onClick={() => { Fun1("-") }}>-</button>
                    </div>
                    <div className="row-1">
                        <button value="1" onClick={e => setV(v + e.target.value)}>1</button>
                        <button value="2" onClick={e => setV(v + e.target.value)}>2</button>
                        <button value="3" onClick={e => setV(v + e.target.value)}>3</button>
                        <button className="operators" value="+" onClick={() => { Fun1("+") }}>+</button>
                    </div>
                    <div className="row-1">
                        <button value="00" onClick={e => setV(v + e.target.value)}>00</button>
                        <button value="0" onClick={e => setV(v + e.target.value)}>0</button>
                        <button value="." onClick={() => { Fun1(".") }}>.</button>
                        <button className="operators" onClick={Calculate}>=</button>
                    </div>
                </div>

            </div>


        </>
    )
}



export default Calc;
// export {Menu};