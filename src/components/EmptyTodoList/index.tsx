import { EmptyContainer, EmptyStateSubtitle, EmptyStateTitle } from './styles';
import clipboard from '../../assets/clipboard.svg';

export function EmptyTodoList() {
  return (
    <EmptyContainer>
      <img src={clipboard} alt='' />
      <EmptyStateTitle>Você ainda não tem tarefas cadastradas</EmptyStateTitle>
      <EmptyStateSubtitle>
        Crie tarefas e organize seus itens a fazer
      </EmptyStateSubtitle>
    </EmptyContainer>
  );
}
