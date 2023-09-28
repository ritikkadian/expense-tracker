import { useState } from "react";
import expenseStore from "../../src/store";
import { handleNumberOnKeyDown } from "../../src/utility";

export const NewTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const transaction = {
      id: crypto.randomUUID(),
      text: text,
      amount: amount,
    };
    setAmount("");
    setText("");
    expenseStore?.addNewTransation(transaction);
  };
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            placeholder="Enter text..."
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            onKeyDown={handleNumberOnKeyDown}
            type="amount"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button disabled={!text || !amount} className="btn">
          Add Transaction
        </button>
      </form>
    </>
  );
};
