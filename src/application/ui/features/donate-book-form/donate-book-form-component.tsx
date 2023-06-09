import { useState } from 'react';
import { postDataFromDonateBookForm } from '../../../../infra/api/donate-book-form/post-data-from-donate-book-form';
import { useAppContext } from '../../../config-adapters/context-provider';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledCard,
  StyledContainerForm,
  StyledInput,
  StyledTitle,
} from './donate-from-book-styled-components';

export const DonateBookFormComponent = () => {
  const { user, book } = useAppContext();
  const [name, setName] = useState<string | undefined>();
  const [surName, setSurName] = useState<string | undefined>();
  const [studentName, setStudentName] = useState<string | undefined>();
  const [error, setError] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  const navigate = useNavigate();

  const donateUp = async () => {
    if (!name || !surName || !user) {
      setError(true);
      setErrorMessage('Revisa los campos');
      return;
    }
    postDataFromDonateBookForm({
      name,
      surname: surName,
      email: user,
      bookRef: book?.title ?? '',
      studentname: studentName,
    });
    navigate('/');
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    donateUp();
  };

  return (
    <StyledContainerForm onSubmit={(e) => handleSubmit(e)}>
      <StyledTitle>Donar: {book?.title}</StyledTitle>
      <StyledCard>
        <StyledInput
          aria-label="nombre"
          placeholder="Nombre"
          id="name"
          type="text"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <StyledInput
          placeholder="Apellidos"
          aria-label="apellidos"
          id="surname"
          type="text"
          onChange={(e) => {
            setSurName(e.target.value);
          }}
        />
        <StyledInput
          aria-label="nombre-del-alumno"
          id="studentName"
          type="text"
          placeholder="Nombre del Alnumno: (opcional)"
          onChange={(e) => {
            setStudentName(e.target.value);
          }}
        />

        <StyledInput
          aria-label="email"
          id="email"
          type="text"
          defaultValue={user ?? ''}
          disabled
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
        <StyledButton type="submit">ENVIAR</StyledButton>
        <StyledButton onClick={() => navigate('/')}>VOLVER</StyledButton>
      </StyledCard>
    </StyledContainerForm>
  );
};
