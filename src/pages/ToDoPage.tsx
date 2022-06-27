import { MemoizedToDo } from '../components/ToDo';
import {
  AddButton,
  CreatedTasks,
  FinishedTasks,
  FormContainer,
  LinesContainer,
  Logo,
  Numbers,
  TextInput,
  ToDoPageContainer,
  ToDosContainer,
} from './styles';
import useViewModel from './ViewModel';
import logo from '../assets/Logo.svg';
import plus from '../assets/plus.svg';
import { EmptyTodoList } from '../components/EmptyTodoList';

export function ToDoPage() {
  const {
    toDos,
    handleSubmit,
    handleChange,
    newToDo,
    markToDoAsCompleted,
    completedTodos,
    removeToDo,
  } = useViewModel();

  return (
    <ToDoPageContainer>
      <Logo src={logo}></Logo>
      <FormContainer onSubmit={handleSubmit}>
        <TextInput
          type='text'
          placeholder='Adicione uma nova tarefa'
          onChange={handleChange}
          value={newToDo}
        />
        <AddButton type='submit' disabled={newToDo.length === 0}>
          Criar <img src={plus}></img>
        </AddButton>
      </FormContainer>
      <LinesContainer>
        <CreatedTasks>
          Tarefas criadas: <Numbers>{toDos.length}</Numbers>
        </CreatedTasks>
        <FinishedTasks>
          Concluídas:{' '}
          <Numbers>
            {completedTodos()} de {toDos.length}
          </Numbers>
        </FinishedTasks>
      </LinesContainer>

      <ToDosContainer>
        {toDos.length === 0 ? (
          <EmptyTodoList />
        ) : (
          toDos.map((toDo) => (
            <MemoizedToDo
              key={toDo.id}
              id={toDo.id}
              content={toDo.content}
              isCompleted={toDo.isCompleted}
              onClick={() => markToDoAsCompleted(toDo.id)}
              onRemove={() => removeToDo(toDo.id)}
            />
          ))
        )}
      </ToDosContainer>
    </ToDoPageContainer>
  );
}
