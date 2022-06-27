import { useState } from 'react';
import { IToDo } from '../components/ToDo';
import { v4 as uuid } from 'uuid';

export default function ToDoViewModel() {
  const [toDos, setToDos] = useState<IToDo[]>([]);
  const [newToDo, setNewToDo] = useState('');

  function addToDo(content: string) {
    setToDos([
      ...toDos,
      {
        content,
        isCompleted: false,
        id: uuid(),
        onClick: () => {},
        onRemove: () => {},
      },
    ]);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    addToDo(newToDo);
    setNewToDo('');
  }
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewToDo(event.target.value);
  }

  function markToDoAsCompleted(id: string) {
    setToDos(
      toDos.map((toDo) => {
        if (toDo.id === id) {
          return { ...toDo, isCompleted: !toDo.isCompleted };
        }
        return toDo;
      })
    );
  }

  function completedTodos() {
    const completed = toDos.filter((toDo) => toDo.isCompleted);
    return completed.length;
  }

  function removeToDo(id: string) {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  return {
    toDos,
    addToDo,
    handleSubmit,
    handleChange,
    newToDo,
    setNewToDo,
    markToDoAsCompleted,
    completedTodos,
    removeToDo,
  };
}
