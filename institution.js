import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./input.css";


function Cv1({institution}) {
    const [inputs, setInputs] = useState('');
    let navigate= useNavigate();

    const handleChange = (event) => {
        const name = event.target.name;
        const value =event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }


    const handleSubmit = (event) => {
    event.preventDefault();
    institution(inputs);
    navigate("output")

    }

    return (
    <div className= "form-Input">
        <form onSubmit = {handleSubmit}>
             <p><label>Institution Attended With Dates <br />
                Institution <input type="text" name="institution1" value={inputs.institution1 || ""} onChange= {handleChange} />
                Date <input type="date" name="institution1date" value={inputs.institution1date || ""} onChange= {handleChange} /><br />
                Institution <input type="text" name="institution2" value={inputs.institution2 || ""} onChange= {handleChange} />
                Date <input type="date" name="institution2date" value={inputs.institution2date || ""} onChange= {handleChange} /><br />
                Institution <input type="text" name="institution3" value={inputs.institution3 || ""} onChange= {handleChange} />
                Date <input type="date" name="institution3date" value={inputs.institution3date || ""} onChange= {handleChange} /><br />
                Institution <input type="text" name="institution4" value={inputs.institution4 || ""} onChange= {handleChange} />
                Date <input type="date" name="institution4date" value={inputs.institution4date || ""} onChange= {handleChange} /><br />
                Institution <input type="text" name="institution5" value={inputs.institution5 || ""} onChange= {handleChange} />
                Date <input type="date" name="institution5date" value={inputs.institution5date || ""} onChange= {handleChange} /><br />
            </label></p>
            <button type="submit">Create</button>
        </form>
    </div>
    )
}

export default Cv1;