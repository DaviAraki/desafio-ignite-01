import styled from 'styled-components';

export const CheckBox = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  flex: none;
  order: 0;
  flex-grow: 0;
  border: none;
  :hover {
    cursor: pointer;
  }
`;

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px;
  gap: 12px;
  width: 736px;
  height: 72px;
  background: #262626;
  border: 1px solid #333333;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.06);
  border-radius: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
`;

export const ContentContainer = styled.span`
  width: 632px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 140%;

  color: #f2f2f2;
`;

export const TrashButton = styled.button`
  background-color: transparent;
  border: none;
  :hover {
    cursor: pointer;
  }
`;
