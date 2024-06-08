const TransformOptions = (props) => {
  const { onClick } = props;
  return (
    <div>
      <button
        className="btn btn-primary m-4"
        onClick={() => onClick("REVERSE")}
      >
        Reverse Text
      </button>
      <button
        className="btn btn-primary m-4"
        onClick={() => onClick("UPPERCASE")}
      >
        Uppercase Text
      </button>
      <button
        className="btn btn-primary m-4"
        onClick={() => onClick("LOWERCASE")}
      >
        Lowercase Text
      </button>
      <button
        className="btn btn-primary m-4"
        onClick={() => onClick("REMOVESPACE")}
      >
        Remove Space
      </button>
      <button
        className="btn btn-primary m-4"
        onClick={() => onClick("CHARACTERCOUNT")}
      >
        Character Count
      </button>
    </div>
  );
};

export default TransformOptions;
