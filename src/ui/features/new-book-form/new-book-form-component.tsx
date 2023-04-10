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
  const [title, setTitle] = useState<string>('');
  const [editorial, setEditorial] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('Revisa los campos');


  const handlerSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (title.length <= 0 || editorial.length <= 0  || category.length <= 0 ) {
      setError(true);
      setErrorMessage('Rellena los campos');
      return;
    }
    postBook({ title, editorial, category });
    setTitle('');
    setEditorial('');
    setCategory('');
  };

  return (
    <StyledContainerForm onSubmit={(e) => handlerSubmit(e)}>
      <StyledTitle>Añadir Libro:</StyledTitle>
      <StyledCard>
        <StyledInput
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <StyledInput
          type="text"
          placeholder="Editorial"
          value={editorial}
          onChange={(e) => {
            setEditorial(e.target.value);
          }}
        />
        <StyledInput
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        {error && (
          <span
            style={{
              color: 'red',
            }}
          >
            {errorMessage}{' '}
          </span>
        )}
        <StyledButton type="submit">
          GUARDAR
        </StyledButton>
      </StyledCard>
    </StyledContainerForm>
  );
};
