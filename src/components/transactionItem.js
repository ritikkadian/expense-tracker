import { formatAmount } from "../../src/utility";
import expenseStore from "../store";

export const TransactionItem = ({ item }) => {

  return (
    <div style={{display:'flex', flexDirection:'row', gap:"8px"}}>
      <div className={`history ${item?.amount > 0 ? "plus" : "minus"}`}>
        <h4>{item?.text}</h4>
        <h4>{formatAmount(Math.abs(item?.amount))}</h4>
      </div>
      <button className="delete-button" onClick={()=>expenseStore?.deleteHandler(item)}>
        Delete
      </button>
    </div>
  );
};
