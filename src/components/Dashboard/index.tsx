import { Container } from './styles';
import { Summary } from '../Summary';
import { Transactiontable } from '../TransactionsTable';

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <Transactiontable />
    </Container>
  );
}
