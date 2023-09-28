import { makeAutoObservable, runInAction } from "mobx";

class ExpenseStore {
  constructor() {
    makeAutoObservable(this);
  }
  balance = 0;
  income = 0;
  expense = 0;
  transactions = [];
  addNewTransation = (item) => {
    runInAction(() => {
      if (item.amount > 0) this.income += Number(item.amount);
      else this.expense -= Number(item.amount);
      this.transactions.push(item);
      this.balance = Number(this.income) - Number(this.expense);
    });
  };

  deleteHandler = (deleteItem) => {
    runInAction(() => {
      this.transactions = this.transactions.filter(
        (item) => item.id !== deleteItem.id
      );
      if (deleteItem.amount > 0) this.income -= Number(deleteItem.amount);
      else this.expense += Number(deleteItem.amount);
      this.balance = Number(this.income) - Number(this.expense);
    });
  };
}
const expenseStore = new ExpenseStore();
export default expenseStore;
