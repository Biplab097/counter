import React, { useState } from 'react';
import './App.css';

function Counter(props) {
    const [buttonVal,setButtonVal] = useState(1);
    const [maxVal,setMaxVal] = useState(1000);

    const subtract=(e)=>{
        e.preventDefault();
        setButtonVal(buttonVal-1);
    }
    const addition=(e)=>{
        e.preventDefault();
        var val = buttonVal+1;

        if(val<=maxVal)setButtonVal(val);
    }

    const changeValue=(e)=>{
        console.log("open text input field");
        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
            modal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target === modal) {
              modal.style.display = "none";
            }
          }

    }

    const customChange=(e)=>{
        var val = e.target.value;
        val = parseInt(val);
        if(val>1000) setMaxVal(val);
        setButtonVal(val);

    }

    return (
        <div class="App">
            <button onClick={subtract} class="sub">-</button>
            <button onDoubleClick={(e)=>changeValue(e)} class="show" id="myButton">{buttonVal}</button>
            <button onClick={addition} class="add">+</button>

            <div id="myModal" class="modal">
                <div class="modal-content">
                    <span class="close">&times;</span>
                    <p>Enter the Counter Value you want.</p>
                    <input onChange={(e)=>customChange(e)} type="text"></input>
                </div>

            </div>
        </div>
    );
}

export default Counter;