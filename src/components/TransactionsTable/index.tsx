import { useTransactions } from "../../hooks/useTransactions";
import { Container, DeleteButton } from "./styles";

export function TransactionsTable() {
  const { transactions, deleteTransactions } = useTransactions()

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {
            transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {
                      new Intl.NumberFormat('pt-br', {
                        style: 'currency',
                        currency: 'BRL',
                      }).format(transaction.amount)
                    }
                  </td>
                  <td>{transaction.category}</td>
                  <td>{
                    new Intl.DateTimeFormat('pt-br').format(new Date(transaction.createdAt))
                  }</td>
                  <td>
                    <DeleteButton onClick={() => deleteTransactions(transaction.id)}>
                      <span>X</span>
                    </DeleteButton>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>

    </Container >
  )
}