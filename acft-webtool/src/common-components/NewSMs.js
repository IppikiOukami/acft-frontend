import React, {useEffect, useState} from "react";
import Select from "react-select";
import {MOS} from "../utils/Alphabet";
import {addSMs} from "../utils/AxiosCalls";
import {useNavigate} from "react-router-dom";

let group = "";
export default function NewSMs(){
    const navigate = useNavigate();
    const [clear, setClear] = useState(false);
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [id, setId] = useState('');
    const [platoon, setPlatoon] = useState('');
    const [doa, setDoa] = useState('');
    const [dob, setDob] = useState('');
    const [gender, setGender] = useState('');
    const [mos, setMos] = useState('');

    function validate(){
        if(!first || !/^[A-Z]+[a-z]*/.test(first)){
            alert("First name is required and must not contain numbers!");
            return false;
        }
        if(!last || !/^[A-Z]+[a-z]*/.test(last)){
            alert("Last name is required and mist not contain numbers!");
            return false;
        }
        if(!id || !/\d\d\d\d\d\d\d\d\d\d/.test(id) || id.length !== 10){
            alert("DOD ID is invalid!");
            return false;
        }
        if(!platoon || !/^[0-9]*$/.test(platoon) || platoon.length > 2){
            alert("Platoon number is invalid!");
            return false;
        }
        if(!doa || !/\d\d\d\d\d\d\d\d/.test(doa)){
            alert("Invalid Date of Arrival!");
            return false;
        }
        if(!dob || !/\d\d\d\d\d\d\d\d/.test(dob)){
            alert("Invalid Date of Birth!");
            return false;
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
        group += ["1","1","0","1","1","1","1","1","1"];
        group += [":"];
        group += ["2","2","0","2","2","2","2","2","2"];
        // push to dbd
        //if(id !== ''){
        //    group.push([id, platoon, '0', doa, dob, first, last, gender, mos]);
        //}
        setClear(true);
        console.log(group);
        if(addSMs(group)){
            group = '';
            navigate('/company');
        }
        alert("Error posting to backend!");
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