import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../../../config-adapters/context-provider';
import { Modal } from 'dynamic-react-components';
import { capilizeFirstLetter } from '../../../../domain/services/utils';
import {
  DonarButton,
  HeadCheck,
  HeadLabel,
  Label,
  Number,
  SubTitle,
  Title,
} from './list-item-styled-component';

type ListItemProps = {
  title: string;
  id: string;
  category: string;
  autor: string;
  isDisabled: boolean;
};

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
        <Title>{capilizeFirstLetter(title)}</Title>
        <SubTitle> {capilizeFirstLetter(autor)}</SubTitle>
      </Label>
      {isChecked && (
        <Modal
          isOpen={isChecked}
          onClose={toggleCheck}
          title="Vas a donar este libro"
          withHeader
          footer={
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <DonarButton onClick={() => toggleCheck()}>Cerrar</DonarButton>
              <DonarButton onClick={() => handleSubmit()}>Donar</DonarButton>
            </div>
          }
          withFooter
        >
          <div
            style={{
              display: 'flex',
              width: '300px',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'column',
            }}
          >
            <Title>{capilizeFirstLetter(title)}</Title>
            <SubTitle> {capilizeFirstLetter(autor)}</SubTitle>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ListItem;
