import { useState } from 'react';
import { postDataFromDonateBookForm } from '../../../api/donate-book-form/post-data-from-donate-book-form';
import { useAppContext } from '../../../config-adapters/context-provider';
import {
  StyledButton,
  StyledCard,
  StyledContainerForm,
  StyledInput,
  StyledTitle,
} from './donate-from-book-styled-components';

export const DonateBookFormComponent = () => {
  const { user } = useAppContext();
  const [name, setName] = useState<string | undefined>();
  const [surName, setSurName] = useState<string | undefined>();
  const [studentName, setStudentName] = useState<string | undefined>();
  //const [errorMessage, setErrorMessage] = useState<string>('');

  const donateUp = async () => {
    if (!name || !surName || !user) return;
    postDataFromDonateBookForm({ name, surName, email: user, studentName });
  };

  const handleSubmit = (e: React.FormEvent<HTMLElement>) => {
    e.preventDefault();
    donateUp();
  };

  return (
    <StyledContainerForm onSubmit={(e) => handleSubmit(e)}>
        <StyledTitle>Donar Libro:</StyledTitle>
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
          value={user ?? ''}
        />
        <StyledButton type="submit">ENVIAR</StyledButton>
      </StyledCard>
    </StyledContainerForm>
  );
};
