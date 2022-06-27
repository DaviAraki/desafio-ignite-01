import styled from 'styled-components';
import { ToDoContainer } from '../components/ToDo/styles';

export const ToDoPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  margin-top: 72px;
  margin-bottom: 53px;
`;

export const ToDosContainer = styled.div`
  width: 736px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${ToDoContainer} {
    margin-bottom: 16px;
  }
`;

export const FormContainer = styled.form`
  width: 736px;
  height: 54px;
  display: flex;
  justify-content: space-between;
`;

export const TextInput = styled.input`
  width: 638px;
  padding: 16px;
  gap: 8px;
  /* Gray 500 */

  background: #262626;
  /* Gray 700 */

  border: 1px solid #0d0d0d;
  border-radius: 8px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  /* or 22px */

  /* Gray 300 */

  color: #808080;
`;

export const AddButton = styled.button`
  padding: 16px;
  gap: 8px;

  display: flex;
  align-items: center;

  width: 90px;
  height: 52px;

  background: #1e6f9f;
  border-radius: 8px;

  flex: none;
  order: 1;
  flex-grow: 0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 140%;

  border-color: transparent;
  color: #f2f2f2;

  :disabled {
    opacity: 0.75;
  }
`;

export const LinesContainer = styled.div`
  margin-top: 68px;
  margin-bottom: 24px;
  width: 736px;
  display: flex;
  justify-content: space-between; ;
`;

export const CreatedTasks = styled.strong`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #4ea8de;
`;

export const FinishedTasks = styled.strong`
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: #8284fa;
`;

export const Numbers = styled.strong`
  background: #333333;
  color: #d9d9d9;
  border-radius: 999px;
  padding: 2px 8px;
  gap: 10px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
`;
