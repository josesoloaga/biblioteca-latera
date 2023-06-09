import { useState } from 'react';
import { postBook } from '../../../../infra/api/book-new-data/post-book';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledCard,
  StyledContainerForm,
  StyledInput,
  StyledTitle,
} from './new-book-form-styled-component';

export const NewBookForm = () => {
  const [title, setTitle] = useState<string>('');
  const [autor, setAutor] = useState<string>('');
  const [category, setCategory] = useState<string>('');
  const [error, setError] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('Revisa los campos');
  const [loadedBook, setLoadedBook] = useState<string>('');
  const navigate = useNavigate();

  const handlerSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    if (title.length <= 0 || autor.length <= 0 || category.length <= 0) {
      setError(true);
      setErrorMessage('Rellena los campos');
      return;
    }
    postBook({ title, autor, category });
    setTitle('');
    setAutor('');
    setCategory('');
    setError(false);
    setLoadedBook('...libro guardado');

    setTimeout(() => {
      setLoadedBook('');
    }, 1500);
  };

  const handleExitButton = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    localStorage.removeItem('admin');
    navigate('/');
  };

  const handleDonados = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    navigate('/donatedlist');
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
          value={autor}
          onChange={(e) => {
            setAutor(e.target.value);
          }}
        />
        <StyledInput
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value.toUpperCase());
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
        {loadedBook && (
          <span
            style={{
              color: 'green',
            }}
          >
            {loadedBook}{' '}
          </span>
        )}
        <StyledButton type="submit">GUARDAR</StyledButton>
      </StyledCard>
      <StyledButton type="button" onClick={(e) => handleExitButton(e)}>
        SALIR{' '}
      </StyledButton>
      <StyledButton onClick={(e) => handleDonados(e)}>
        Libros Donados
      </StyledButton>
    </StyledContainerForm>
  );
};
