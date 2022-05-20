import React, {useState} from 'react'
import PropTypes from 'prop-types'

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event)=>{
    setText(event.target.value);
  }

  const handleUpperCase = ()=>{
    setText(text.toUpperCase());
  }

  const handleLowerCase = ()=>{
    setText(text.toLowerCase());
  }

  const revString = () =>{
  var t=text.split("");
  var b=t.reverse();
  setText(b.join(""));
  }
  
  const clearText = () =>{
    setText("");
  }

  
  const copyText = () =>{
    var copiedText=document.getElementById('desc');
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value);
  }
  return (
    <>
    <div>
   <h1>{props.heading}</h1>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="desc" value={text} onChange={handleOnChange} rows="6"></textarea>
</div>  
<button className="btn btn-primary" onClick={handleUpperCase} >Convert to UpperCase</button>
<button className="btn btn-primary" onClick={handleLowerCase} >Convert to lowercase</button>
<button className="btn btn-primary" onClick={revString} >Reverse Text</button>
<button className="btn btn-primary" onClick={clearText} >Clear Text</button>
<button className="btn btn-primary" onClick={copyText} >Copy Text</button>
    </div>
    <div className="container my-3">
      <h2>Your Text summary</h2>
      <p>{text.replace(/\n/g, " ").split(' ').filter(value => value != "").length} words and {text.trim().length} characters</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}

