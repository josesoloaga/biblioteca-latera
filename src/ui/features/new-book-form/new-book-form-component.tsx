import { useState } from 'react';
import { postBook } from '../../../api/book-new-data/post-book';
import {
  StyledButton,
  StyledCard,
  StyledContainerForm,
  StyledInput,
  StyledTitle,
} from './new-book-form-styled-component';

export const NewBookForm = () => {
  const [title, setTitle] = useState('');
  const [editorial, setEditorial] = useState('');
  const [category, setCategory] = useState('');

  const handlerSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    postBook({ title, editorial, category });
  };

  return (
    <StyledContainerForm onSubmit={(e) => handlerSubmit(e)}>
      <StyledTitle>Añadir Libro:</StyledTitle>
      <StyledCard>
        <StyledInput
          type="text"
          placeholder="Titulo"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StyledInput
          type="text"
          placeholder="Editorial"
          onChange={(e) => {
            setEditorial(e.target.value);
          }}
        />
        <StyledInput
          type="text"
          placeholder="Categoria"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <StyledButton type="submit">GUARDAR</StyledButton>
      </StyledCard>
    </StyledContainerForm>
  );
};
