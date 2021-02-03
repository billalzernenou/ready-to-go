const Switch2 = ({ swtch, setState }) => {
  const handleClickOn = () => {
    setState(true);
  };
  const handleClickOff = () => {
    setState(false);
  };
  return (
    <div className="switch switch1">
      <div>
        <button
          style={{
            color: swtch ? "#FFF" : "#5C48D3",
            "background-color": swtch ? "#5C48D3" : "#FFF",
          }}
          onClick={handleClickOn}
        >
          ON
        </button>
      </div>
      <div>
        <button
          style={{
            color: swtch ? "#5C48D3" : "#fff",
            "background-color": swtch ? "#fff" : "#5C48D3",
          }}
          onClick={handleClickOff}
        >
          OFF
        </button>
      </div>
    </div>
  );
};

export default Switch2;
