const TextInput = (props) => {
  const { inputValue, handleOnChange } = props;

  return (
    <input
      type="text"
      placeholder="Enter your text here"
      className="form-control"
      value={inputValue}
      onChange={handleOnChange}
    />
  );
};

export default TextInput;
