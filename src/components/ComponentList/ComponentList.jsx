import { Card } from "../Card/Card";

export function List({
  listTransaction,
  setListTransaction,
  completeList,
  setCompleteList,
}) {
  return (
    <>
      <aside>
        <h1>Resumo financeiro</h1>
        <ul>
          {completeList.length > 0 ? (
            completeList.map((transaction, index) => (
              <Card
                listTransaction={listTransaction}
                completeList={completeList}
                transaction={transaction}
                setCompleteList={setCompleteList}
                setListTransaction={setListTransaction}
                key={index}
              />
            ))
          ) : (
            <>
              <h2>Você ainda não possui nenhum lançamento</h2>
            </>
          )}
        </ul>
      </aside>
    </>
  );
}
