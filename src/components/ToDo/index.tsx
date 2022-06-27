import trash from '../../assets/trash.svg';
import checked from '../../assets/checked.svg';
import unchecked from '../../assets/unchecked.svg';
import {
  CheckBox,
  ContentContainer,
  ToDoContainer,
  TrashButton,
} from './styles';
import React from 'react';

export interface IToDo {
  content: string;
  isCompleted: boolean;
  id: string;
  onClick: () => void;
  onRemove: () => void;
}

export function ToDo({ content, isCompleted, onClick, onRemove }: IToDo) {
  return (
    <ToDoContainer>
      <CheckBox onClick={onClick}>
        <img src={isCompleted ? unchecked : checked} alt='' />
      </CheckBox>
      <ContentContainer>{content}</ContentContainer>
      <TrashButton onClick={onRemove}>
        <img src={trash} />
      </TrashButton>
    </ToDoContainer>
  );
}

export const MemoizedToDo = React.memo(ToDo);
