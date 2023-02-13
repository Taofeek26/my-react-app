import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import './index.css';
import Output from "./components/output";
import Layout from "./components/layout";
import Table from "./components/table";
import Cv from "./components/bio_input";
import Cv1 from "./components/institution";
import {useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";



export default function App() {

const [bioData, setBioData] = useState([]);
const [institutionData, setInstitutionData] = useState([]);


const inputToOutput = (inputs) => {
   setBioData([...bioData, inputs]);
};
console.log(bioData)

const institution = (inputs) => {
   setInstitutionData([...institutionData, inputs]);
};
console.log(institutionData)

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element= {<Layout />}>
                <Route path="bio-input" element= {<Cv inputToOutput={inputToOutput} />} />
                <Route path="bio-input/institution" element= {<Cv1 institution={institution} />} />
                <Route path="table" element= {<Table bioData = {bioData} />} />
                <Route path="bio-input/institution/output" element= {<Output  bioData = {bioData} institutionData={institutionData} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

