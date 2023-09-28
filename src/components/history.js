import expenseStore from "../../src/store";
import { TransactionItem } from "./transactionItem";
import { observer } from "mobx-react";

const History = () => {
  const { transactions } = expenseStore;
  return (
    <>
      {transactions?.length !== 0 && <h3>HISTORY</h3>}
      {transactions?.map((item) => (
        <TransactionItem item={item} key={item.id} />
      ))}
    </>
  );
};
export default observer(History);
