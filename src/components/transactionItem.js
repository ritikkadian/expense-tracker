import { formatAmount } from "../../src/utility";

export const TransactionItem = ({ item }) => {
  return (
    <div className={`history ${item?.amount > 0 ? "plus" : "minus"}`}>
      <h4>{item?.text}</h4>
      <h4>{formatAmount(Math.abs(item?.amount))}</h4>
    </div>
  );
};
