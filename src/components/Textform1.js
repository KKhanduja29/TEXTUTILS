import React,{useState} from 'react'

export default function Textform1(props) {

  const handleUpClick = () => {
    // console.log("Uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Convert To UpperCase","success")
}
  const handleLowClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Convert To LowerCase","success")

}
  const handleClearClick = () => {
    let newtext = '';
    setText(newtext);
   props.showalert("Clear Text","success")

}
   const handelOnChange = (event) => {
    // console.log("Upper Case on Clicked");
    setText(event.target.value);
   }

  const [text, setText] = useState('');
  // setText('Hello');
   
  const speak = () =>{
    let msg = new SpeechSynthesisUtterance();
    msg.text=text;
    window.speechSynthesis.speak(msg);
    props.showalert("Oh! Speaking","success")

  }

  const handleCopy = () => {
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showalert("Copied To Clipboard","success")

}
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/);
  setText(newText.join(" "))
 props.showalert("Yehh! Remove Extra Spaces","success")

}

  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" id="mybox"  value={text} rows="4" onChange={handelOnChange} style={{backgroundColor: props.mode === 'dark'?'dark':'white',colo:props.mode === 'dark'?'white':'black'}}></textarea>
        </div>
        <button className="btn btn-dark mt-2" onClick={handleUpClick}>Convert To UpperCase</button>
        <button className="btn btn-dark mt-2 ms-2" onClick={handleLowClick}>Convert To LowerCase</button>
        <button className="btn btn-dark mt-2 ms-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-dark mt-2 ms-2" onClick={speak}>Speck</button>
        <button className="btn btn-dark mt-2 ms-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-dark mt-2 ms-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3"  style={{color: props.mode === 'dark'?'white':'black'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(" ").length} Words and {text.length} Characters</p>
      <p>{0.008 * text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length> 0 ? text:"Enter Something To Text Box  Above To Preview It"}</p>
    </div>
    </>
  )
}