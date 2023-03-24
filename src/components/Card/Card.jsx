export function Card({
  listTransaction,
  setListTransaction,
  transaction,
  setCompleteList,
}) {
  function excluir(transactionId) {
    const newListTransaction = listTransaction.filter((transaction) => {
      transaction.id !== transactionId;

      return transaction.id !== transactionId;
    });
    setListTransaction(newListTransaction);
    setCompleteList(newListTransaction);
  }

  return (
    <>
      {transaction.type === "Entrada" ? (
        <li key={"Entrada"}>
          <div className="box_color_entrada"></div>
          <div className="box_li_1">
            <h2>{transaction.description}</h2>
            <p>R$ {transaction.value}</p>
          </div>
          <div className="box_li_1">
            <span>{transaction.type}</span>
            <button
              className="btn_excluir"
              onClick={() => excluir(transaction.id)}
            >
              Excluir
            </button>
          </div>
        </li>
      ) : (
        <li key={"Saida"}>
          <div className="box_color_despesas"></div>
          <div className="box_li_1">
            <h2>{transaction.description}</h2>
            <p>R$ {transaction.value}</p>
          </div>
          <div className="box_li_1">
            <span>{transaction.type}</span>
            <button
              className="btn_excluir"
              onClick={() => excluir(transaction.id)}
            >
              Excluir
            </button>
          </div>
        </li>
      )}
    </>
  );
}
