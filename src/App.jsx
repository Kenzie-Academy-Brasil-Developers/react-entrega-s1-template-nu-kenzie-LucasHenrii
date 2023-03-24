import { useState } from "react";
import "./styles/reset.css";
import "./styles/App.css";
import { ComponentHeader } from "./components/ComponentHeader/ComponentHeader";
import { Form } from "./components/Form/Form";
import { Card } from "./components/Card/Card";
import { List } from "./components/ComponentList/ComponentList";

export function App() {
  const [listTransaction, setListTransaction] = useState([]);
  const [completeList, setCompleteList] = useState([]);

  const totalReduce = listTransaction.reduce((previous, transaction) => {
    if (transaction.type === "Entrada") {
      return previous + parseInt(transaction.value);
    } else {
      return previous - parseInt(transaction.value);
    }
  }, 0);
  return (
    <div className="App">
      <ComponentHeader />
      <main>
        <div className="div_form">
          <Form
            listTransaction={listTransaction}
            completeList={completeList}
            setListTransaction={setListTransaction}
            setCompleteList={setCompleteList}
          />
          <div className="valor_total">
            <div className="div_text">
              <h3>Valor total:</h3>
              <h3 className="value_name">
                {totalReduce.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </div>
            <p>O valor se refere ao saldo</p>
          </div>
        </div>
        <List
          listTransaction={listTransaction}
          completeList={completeList}
          setCompleteList={setCompleteList}
          setListTransaction={setListTransaction}
        />
      </main>
    </div>
  );
}

export default App;
