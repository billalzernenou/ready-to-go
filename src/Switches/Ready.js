const Ready = ({ swtch1, swtch2, swtch3 }) => {
  return (
    <div className="ready">
      <div
        style={{ display: swtch1 && swtch2 && swtch3 ? "none" : "block" }}
        className="no-way"
      >
        No way !
      </div>
      <div
        style={{ display: swtch1 && swtch2 && swtch3 ? "block" : "none" }}
        className="go"
      >
        GO !
      </div>
    </div>
  );
};

export default Ready;
