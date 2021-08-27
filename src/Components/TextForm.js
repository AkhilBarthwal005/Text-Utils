import React, { useState } from "react"; // here useState is our react hook for fuction based components;
// in this form we are going to learn the concept of state in function.

export default function TextForm(props) {
  const [text, setText] = useState(""); // this is react state here text is a varaible where the value is Enter your text is provided with the help of useState and it a default value to this variable and setText is function used to change the value of the text variable;
  //now
  // text = "abcde" this is wrong way of changeing the value of text variable.
  // setText("abcde") it the correct way of doing this.

  const changeToUpperCase = () => {
    // console.log("uppercase");
    setText(text.toUpperCase()); // here we are converting our text variable to uppercase.
    props.showAlert("Text has been converted to UpperCase", "success");
  };
  const changeToLowerCase = () => {
    // console.log("uppercase");
    setText(text.toLowerCase()); // here we are converting our text variable to lowercase.
    props.showAlert("Text has been converted to LowerCase", "success");
  };

  const changeToCaptialize = () => {
    let arr = new Array(text.length);
    arr = text.split(" ");
    let newText = "";
    for (let i = 0; i < arr.length; i++) {
      newText +=
        arr[i].substring(0, 1).toUpperCase() +
        arr[i].substring(1, arr[i].length) +
        " ";
    }
    setText(newText);
    props.showAlert("Text has been converted to Captialize", "success");
  };

  const clearText = () => {
    setText("");
  };

  const onChangeHandler = (event) => {
    // console.log("onchange handler");
    let newText = event.target.value;
    setText(newText); // here event.target.value gives us the current value of the text box and with helop of setText we are able to set the text into input field.
  };

  return (
    <>
      <div className="container my-3">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myForm"
            value={text}
            onChange={onChangeHandler} // this function help us to write the code with in text box. we are using this because of state variable text which is set a value of this input field so we can not directly make changes in this input box because every the state variable will assing the default value to text box.
            // now when ever we try to make change in input box we have to litisen that event so by default this function pass the event which we have to handel it .
            rows="8"
            style={
              props.mode === "dark"
                ? { backgroundColor: "#11103c", color: "white" }
                : { backgroundColor: "white", color: "black" }
            }
          ></textarea>
        </div>
        <div className="container">
          <button
            disabled={text.length === 0 ? true : false}
            className="btn btn-primary mx-1 my-2"
            onClick={changeToUpperCase}
          >
            Convert to UpperCase
          </button>
          <button
            disabled={text.length === 0 ? true : false}
            className="btn btn-primary mx-1 my-2"
            onClick={changeToLowerCase}
          >
            Convert to LowerCase
          </button>
          <button
            disabled={text.length === 0 ? true : false}
            className="btn btn-primary mx-1 my-2"
            onClick={changeToCaptialize}
          >
            Convert to Captialize
          </button>
          <button
            disabled={text.length === 0 ? true : false}
            className="btn btn-primary mx-1 my-2"
            onClick={clearText}
          >
            Clear Text
          </button>
        </div>
      </div>

      <div className="container">
        <h2>Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((s) => s.length !== 0).length} No of Words
          and {text.trim().split(/\s+/).join(" ").length} No of Character
        </p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Write something in text box to preveiw it."}
        </p>
      </div>
    </>
  );
}
