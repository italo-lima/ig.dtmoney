import { Container } from './styles';
import { formattedCurrency, formattedDate } from '../../utils/utils';
import { useTransactions } from '../../hooks/useTransactions';

export function Transactiontable() {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {formattedCurrency(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>{formattedDate(new Date(transaction.createdAt))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
}
