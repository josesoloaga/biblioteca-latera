import React from 'react';
import {
  InstructionsCard,
  InstructionsMessage,
  InstructionsTitle,
} from './instrucciones-styled-component';

const Instructions = () => {
  return (
    <InstructionsCard>
      <InstructionsTitle>Bienvenido/a</InstructionsTitle>
      <InstructionsMessage>
        Para registrarse o iniciar sesión, escribe tu email y contraseña
      </InstructionsMessage>
    </InstructionsCard>
  );
};

export default Instructions;
