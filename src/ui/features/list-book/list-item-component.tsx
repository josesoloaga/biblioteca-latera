import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../config-adapters/context-provider';

type ListItemProps = {
  title: string;
  id: string;
  category: string
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

const ListItem: React.FC<ListItemProps> = ({ id, title, category, isDisabled }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { addBook } = useAppContext();
  const navigate = useNavigate();

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  //TODO: hacer envio a context del libro marcado para donar. redirigir a formulario
 const handleSubmit = ()=>{
  addBook({
    title: title,
    editorial: '',
    category: category,
  });
  navigate('/donate')
 }
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
        <DonarButton onClick={() => handleSubmit()}>
          Donar este libro
        </DonarButton >
      )}
    </>
  );
};

export default ListItem;
