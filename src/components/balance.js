export const Balance = () => {
  return (
    <>
      <div className="total-balance">
        <h4>YOUR BALANCE</h4>
        <h1>$1500</h1>
      </div>
      <div className="balance-breakup">
        <div className="balance">
          <h4>INCOME</h4>
          <h4 style={{ color: "green" }}>$1200</h4>
        </div>
        <div className="vertical-line"></div>
        <div className="balance">
          <h4>EXPENSE</h4>
          <h4 style={{ color: "red" }}>$120</h4>
        </div>
      </div>
    </>
  );
};
