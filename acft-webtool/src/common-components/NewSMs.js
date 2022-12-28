import React, {useEffect, useState} from "react";
import Select from "react-select";
import {MOS} from "../utils/Alphabet";
import {TextField} from "@mui/material";

let group = [];
export default function NewSMs(){

    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [id, setId] = useState('');
    const [platoon, setPlatoon] = useState('');
    const [doa, setDoa] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [mos, setMos] = useState('');
    const [clear, setClear] = useState(false);

    function validate(){
        if(!first || !/^[A-Za-z]/.test(first)){
            alert("First name is required and must not contain numbers!");
            return false;
        }
        if(!last || !/^[A-Za-z]/.test(last)){
            alert("Last name is required and mist not contain numbers!");
        }
        return true;
    }

    function addMore(){
        if(validate()) {
            group.push([id, platoon, '0', doa, dob, first, last, gender, mos]);
            setClear(true);
            console.log(group);
        }
    }

    function complete(){
        // push to dbd
        if(id !== ''){
            group.push([id, platoon, '0', doa, dob, first, last, gender, mos]);
        }
        setClear(true);
        console.log(group);
        group = [];
    }

    useEffect(() => {
        setFirst('');
        setLast('');
        setId('');
        setPlatoon('');
        setDoa('');
        setDob('');
        setGender('');
        setMos('');
        setClear(false);
    }, [clear]);

    return(
      <div>
          <label>First Name: </label>
          <br/>
          <input value={first} type="text" onChange={e => setFirst(e.target.value)} required/>
          <br/>
          <label>Last Name: </label>
          <br/>
          <input value={last} type="text" onChange={e => setLast(e.target.value)}/>
          <br/>
          <label>DOD ID Number: </label>
          <br/>
          <input value={id} type="text" onChange={e => setId(e.target.value)}/>
          <br/>
          <label>Platoon: </label>
          <br/>
          <input value={platoon} type="text" onChange={e => setPlatoon(e.target.value)}/>
          <br/>
          <label>Date of Arrival: YYYYMMDD</label>
          <br/>
          <input value={doa} type="text" onChange={e => setDoa(e.target.value)}/>
          <br/>
          <label>Date of Birth: YYYYMMDD</label>
          <br/>
          <input value={dob} type="text" onChange={e => setDob(e.target.value)}/>
          <br/>
          <label>Gender: </label>
          <br/>
          <Select
              value={{label:gender,value:gender}}
              options={[{label:"Male", value:"M"},{label:"Female",value:"F"}]}
              onChange={e => setGender(e.value)}
          />
          <br/>
          <label>MOS: </label>
          <br/>
          <Select
              value={{label:mos,value:mos}}
              options={MOS.map(mos => ({label: mos, value: mos}))}
              onChange={e => setMos(e.value)}
          />
          <button onClick={addMore}>Add More</button>
          <br/>
          <button onClick={complete}>Submit</button>
      </div>
    );
}