import React, { useState } from 'react';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../config-adapters/context-provider';
import { capilizefirstLetter } from '../../../domain/utils';
import { Modal } from 'dynamic-react-components';

type ListItemProps = {
  title: string;
  id: string;
  category: string;
  autor: string;
  isDisabled: boolean;
};

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-decoration: ${(props: { isDisabled: boolean }) =>
    props.isDisabled ? 'line-through' : 'none'};
`;

const Number = styled.span`
  font-size: 1rem;
  font-weight: bold;
  opacity: 0.5;
  position: absolute;
  left: 0rem;
`;

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  width: 80%;
`;

const SubTitle = styled.h3`
  font-size: 1rem;
  color: rgb(51, 50, 49);
  font-size: large;
  width: 80%;
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

const HeadCheck = styled.input`
  position: absolute;
  right: 0rem;
`;

const HeadLabel = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  justify-content: space-between;
`;

const ListItem: React.FC<ListItemProps> = ({
  id,
  title,
  category,
  autor,
  isDisabled,
}) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { addBook } = useAppContext();
  const navigate = useNavigate();

  const toggleCheck = () => {
    setIsChecked(!isChecked);
  };
  //TODO: hacer envio a context del libro marcado para donar. redirigir a formulario
  const handleSubmit = () => {
    addBook({
      title: title,
      autor: autor,
      category: category,
    });
    navigate('/donate');
  };
  return (
    <>
      <Label isDisabled={isDisabled}>
        <HeadLabel>
          <Number>{id}.</Number>
          <HeadCheck
            style={{
              width: '15px',
              height: '15px',
            }}
            type="checkbox"
            checked={isChecked}
            disabled={isDisabled}
            onChange={toggleCheck}
          />
        </HeadLabel>
        <Title>{capilizefirstLetter(title)}</Title>
        <SubTitle>Autor: {capilizefirstLetter(autor)}</SubTitle>
      </Label>
      {isChecked && (
        <Modal isOpen={isChecked} onClose={toggleCheck}>
          <>
            <Title>{capilizefirstLetter(title)}</Title>
            <SubTitle>Autor: {capilizefirstLetter(autor)}</SubTitle>
            <DonarButton onClick={() => handleSubmit()}>
              Donar este libro
            </DonarButton>
            <DonarButton onClick={() => toggleCheck()}>cerrar</DonarButton>
          </>
        </Modal>
      )}
    </>
  );
};

export default ListItem;
