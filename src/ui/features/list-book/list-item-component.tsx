import React, { useState } from 'react';
import styled from '@emotion/styled';

type ListItemProps = {
  title: string;
  id: string;

  isDisabled: boolean;
};

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  text-decoration: ${(props: { isDisabled: boolean }) =>
    props.isDisabled ? 'line-through' : 'none'};
`;

const Number = styled.span`
  margin-right: 10px;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
`;

const DonarButton = styled.button`
  margin: 10px auto;
  display: block;
  padding: 10px;
  background-color: #009688;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  &:hover {
    background-color: #00796b;
  }
`;

const ListItem: React.FC<ListItemProps> = ({ id, title, isDisabled }) => {
  const [selectedBook, setSelectedBook] = useState<string | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const toggleCheck = () => {
    setIsChecked(!isChecked);
    setSelectedBook(title);
  };
  //TODO: hacer envio a context del libro marcado para donar. redirigir a formulario
  return (
    <>
      <Label isDisabled={isDisabled}>
        <Number>{id}.</Number>
        <Title>{title}</Title>
        <input
          style={{
            width: '15px',
            height: '15px',
          }}
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={toggleCheck}
        />
      </Label>
      {isChecked && (
        <DonarButton onClick={() => alert(`Donar ${selectedBook}`)}>
          Donar este libro
        </DonarButton>
      )}
    </>
  );
};

export default ListItem;
