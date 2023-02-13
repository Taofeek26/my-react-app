import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./input.css";


function Cv({inputToOutput}) {
    const [inputs, setInputs] = useState('');
    let navigate= useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (event) => {
    event.preventDefault();
    inputToOutput(inputs);
    navigate("institution")


    }

    return (
    <div className= "form-Input">
        <form onSubmit = {handleSubmit}>
            <p><label> Enter your first name: <input type="text" name="firstname" value={inputs.firstname || ""} onChange = {handleChange} /><br />
             Enter your last name: <input type="text" name="lastname" value={inputs.lastname || ""} onChange = {handleChange} /><br />
             Enter your date of birth: <input type="date" name="dob" value={inputs.dob || ""} onChange = {handleChange} /><br />
             Enter your middle name: <input type="text" name="middlename" value={inputs.middlename || ""} onChange = {handleChange} /><br />
             Enter your your state of origin: <input type="text" name="sog" value={inputs.sog || ""} onChange = {handleChange} /><br />
             Enter your your local government: <input type="text" name="lga" value={inputs.lga || ""} onChange = {handleChange} /><br />
             Enter your Phone number: <input type="number" name="phones" value={inputs.phones || ""} onChange = {handleChange} /><br />
             Enter your email: <input type="text" name="email" value={inputs.email || ""} onChange = {handleChange} /><br />
             Enter your Discipline: <input type="text" name="discipline" value={inputs.discipline || ""} onChange = {handleChange} /><br />
            </label></p>
            <button type="submit">Create</button>
        </form>
    </div>
    )
}

export default Cv;


