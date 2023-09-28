import "./App.css";
import { Header } from "./components/header";
import { Balance } from "./components/balance";
import { History } from "./components/history";
import { NewTransaction } from "./components/add-new";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <History />
        <NewTransaction />
      </div>
    </>
  );
}

export default App;
