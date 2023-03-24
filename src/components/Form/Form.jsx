import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import App from "../../App";

export function Form({
  listTransaction,
  setListTransaction,
  completeList,
  setCompleteList,
}) {
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [type, setType] = useState("Entrada");
  const [id, setId] = useState();

  function click(event) {
    event.preventDefault();
    const data = { description, value, type, id };

    data.id = uuidv4();

    setListTransaction([...listTransaction, data]);
    setCompleteList([...completeList, data]);

    setDescription("");
    setValue("");
    setType("Entrada");
  }

  return (
    <form onSubmit={click}>
      <div className="description">
        <h3>Descrição</h3>
        <input
          type="text"
          value={description}
          placeholder="Digite aqui sua descrição"
          required
          onChange={(event) => setDescription(event.target.value)}
        />
        <span className="span_description">Ex: Compra de roupas</span>
      </div>
      <div className="value">
        <h3>Valor (R$)</h3>
        <input
          type="number"
          value={value}
          placeholder="0"
          required
          onChange={(event) => setValue(event.target.value)}
        />
      </div>
      <div className="select">
        <h3>Tipo de valor</h3>
        <select value={type} onChange={(event) => setType(event.target.value)}>
          <option value="Entrada">Entrada</option>
          <option value="Despesa">Despesa</option>
        </select>
      </div>
      <button className="button_add" type="submit">
        Inserir valor
      </button>
    </form>
  );
}
