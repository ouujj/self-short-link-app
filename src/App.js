import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import React, { useState } from "react";

import axios from "axios";





function App() {

  const [fullLink, setFullLink] = useState("");
  const [shortLink, setShortLink] = useState("");
  const [copySuccess, setCopySuccess] = useState('');

  const getShortLink = () => {
    console.log("getShortLink");
    //setShortLink(fullLink);
    const urlLink= {
        url:fullLink
    };
    axios
      .post('http://localhost:8080/',urlLink)
      .then(res =>{
        console.log(res);
        console.log(res.data);
        setShortLink(res.data);
      });
  };
  const getInputValue = (event) => {
    setFullLink(event.target.value);
    console.log(fullLink);
  };

  function copyToClipboard(e) {
    navigator.clipboard.writeText(shortLink);
    setCopySuccess('Copied!');
  };






  return (
    <React.Fragment>


      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>URL</Form.Label>
        <Form.Control type="text" placeholder="example.com" onChange={getInputValue} />
      </Form.Group>
      <button onClick={getShortLink}>
        Get Short Link
      </button>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Short Link</Form.Label>
        <Form.Control type="text" placeholder="get short link here" value={shortLink} /*readOnly*/ />
        <div>
          <button onClick={copyToClipboard}>Copy</button> 
          {copySuccess}
        </div>
        
      </Form.Group>


    </React.Fragment>
  );
}

export default App;
