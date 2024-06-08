import { useState } from "react";
import TextInput from "./TextInput";
import TransformOptions from "./TransformOptions";
import TransformedText from "./TransformedText";
const TextManipulator = () => {
  const [inputValue, setInputValue] = useState("");
  const [transformedText, setTransformedText] = useState("");

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleOntransform = (type) => {
    let result = inputValue;
    switch (type) {
      case "UPPERCASE":
        result = `Your Transformed Text : ${inputValue.toUpperCase()}`;
        break;
      case "LOWERCASE":
        result = `Your Transformed Text : ${inputValue.toLowerCase()}`;
        break;
      case "REVERSE":
        result = `Your Transformed Text : ${inputValue
          .split("")
          .reverse()
          .join("")}`;
        break;
      case "REMOVESPACE":
        result = `Your Transformed Text : ${inputValue.replace(/\s+/g, "")}`;
        break;

      case "CHARACTERCOUNT":
        result = `Character Count: ${inputValue.length}`;
        break;

      default:
        break;
    }
    setTransformedText(result);
  };
  return (
    <div>
      <center>
        <h2>Text-Manipulator</h2>
        <TextInput inputValue={inputValue} handleOnChange={handleOnChange} />
        <TransformOptions onClick={handleOntransform} />
        <TransformedText finalText={transformedText} />
      </center>
    </div>
  );
};

export default TextManipulator;
