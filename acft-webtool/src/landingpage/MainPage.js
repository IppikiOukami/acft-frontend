import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {codenames} from "../utils/Alphabet";

export default function MainPage(){
    const navigate = useNavigate();
    const [selVal, setSelVal] = useState("none");
    const [passVal, setPassVal] = useState("none");
    const [badPass, setBadPass] = useState(false);

    function Authenticate(){
        if(passVal === codenames[selVal]){
            navigate("/company", {state: selVal});
        }
        setBadPass(true);
        return;
    }

    function redToAuthn(){
        if(selVal === "none"){
            alert("Company is not selected!");
            return;
        }
        if(passVal === "none"){
            alert("Password is required!");
            return;
        }
        return Authenticate();
    }

    return (
        <div>
            <div className="Page-Title">
                <h1>ACFT Tracker</h1>
            </div>
            <label>Select your company:</label>
            <br/>
            <select defaultValue="none" onChange={e => setSelVal(e.target.value)}>
                <option value="none">Select</option>
                <option value="A">A Co.</option>
                <option value="B">B Co.</option>
                <option value="C">C Co.</option>
            </select>
            <br/>
            <label>Enter company password:</label>
            <br/>
            {badPass && (<p>Invalid Password, try again!<br/></p>)}
            <input type="text" placeholder="Enter password" onChange={e => setPassVal(e.target.value)}/>
            <br/>
            <button onClick={redToAuthn}>Log In</button>
        </div>
    )
}