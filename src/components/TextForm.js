import React, {useState} from "react";


export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to uppercase", "success");
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked" + text);
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("converted to lowercase", "success");
  }

  const handleClearClick = ()=>{
    // console.log("Uppercase was clicked" + text);
    let newText = ' ';
    setText(newText)
    props.showAlert("Text cleared", "success");
}

    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }

    const handleCopy = ()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to clipboard", "success");

    }

    const handleExtraSpaces = () =>{
      let newText = text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra spaces removed", "success");
    }


    const [text, setText] = useState(' ');
    // text = "new text";         //Wrong way to change the state
    // setText = ("new text")     // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h1 className='mb-4'>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text suummary</h2>
      {/* <p>{text.split(" ").length} words and {text.length} character</p> */}

      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to preview!"}</p>
    </div>
    </>
  );
}
