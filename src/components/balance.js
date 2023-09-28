import { observer } from "mobx-react";
import expenseStore from "../../src/store";
import { formatAmount } from "../../src/utility";

const Balance = () => {
  const { balance, income, expense } = expenseStore;

  return (
    <>
      <div className="total-balance">
        <h4>YOUR BALANCE</h4>
        <h1>{formatAmount(balance)}</h1>
      </div>
      <div className="balance-breakup">
        <div className="balance">
          <h4>INCOME</h4>
          <h4 style={{ color: "green" }}>{formatAmount(income)}</h4>
        </div>
        <div className="vertical-line"></div>
        <div className="balance">
          <h4>EXPENSE</h4>
          <h4 style={{ color: "red" }}>{formatAmount(expense)}</h4>
        </div>
      </div>
    </>
  );
};
export default observer(Balance);
