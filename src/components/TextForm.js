import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");

  const handleUpClick = () => {
    console.log("Uppercase was clicked!");
    let newText = text.toLocaleUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };

  const handleLcClick = () => {
    console.log("Uppercase was clicked!");
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearTextClick = (event) => {
    setText("");
    props.showAlert("Text has been cleared!", "success");
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text) // Copy text to clipboard
      .then(() => {
        alert("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const handleClean = () => {
    const cleanedText = text.trim().replace(/\s+/g, " ");
    setText(cleanedText);
    props.showAlert("Extra spaces removed!", "success");
  };

  const handleCapitalize = () => {
    const capText = text.trim().replace(/\b\w/g, (char) => char.toUpperCase());
    setText(capText);
    props.showAlert("Converted to capitalized!", "success");
  };

  const handleReverse = () => {
    const reverseText = text.split("").reverse().join("");
    setText(reverseText);
    props.showAlert("Text reversed!", "success");
  };

  const handleRemoveNum = () => {
    const removeNum = text.replace(/[0-9]/g, "");
    setText(removeNum);
    props.showAlert("Numbers removed!", "success");
  };

  const handleRemoveSpecialChar = () => {
    const removeSC = text.replace(/[^a-zA-Z0-9 ]/g, "");
    setText(removeSC);
    props.showAlert("Special characters removed!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3 my-3">
          <textarea
            id="myBox"
            value={text}
            onChange={handleOnChange}
            className="form-control"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          />
        </div>

        {/* Button Uppercase */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        {/* Button Lowercase */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleLcClick}
        >
          Convert to Lowercase
        </button>
        {/* button remove extra spaces */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleClean}
        >
          Remove Extra Spaces
        </button>

        {/* button remove special characters*/}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleRemoveSpecialChar}
        >
          Remove Special Characters
        </button>

        {/* button capitalize text */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleCapitalize}
        >
          Capitalize Text
        </button>

        {/* button reverse text */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleReverse}
        >
          Reverse Text
        </button>

        {/* button remove number text */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleRemoveNum}
        >
          Remove Numbers
        </button>

        {/* button copy text */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        {/* button clear text */}
        <button
          className="btn btn-primary btn-sm my-1 mx-1"
          onClick={handleClearTextClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="mb-3 my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your Text Summary</h3>
        <p>
          <b>{text.split(" ").length}</b> words and <b>{text.length}</b>{" "}
          characters
        </p>
        <p>
          {" "}
          <b>{0.008 * text.split(" ").length}</b> minutes read
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter Something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
