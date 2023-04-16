import React from 'react';
import styled from '@emotion/styled';

const InstructionsCard = styled.div`
background-color: rgb(219, 150, 64);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  text-align: center;
  opacity: 0.7;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

const InstructionsTitle = styled.h2`
  margin-top: 0;
`;

const InstructionsMessage = styled.p`
  font-size: 18px;
`;

const Instructions = () => {
  return (
    <InstructionsCard>
      <InstructionsTitle>Bienvenido/a</InstructionsTitle>
      <InstructionsMessage>
        Para registrarse o iniciar sesión, por favor rellene los campos
        correspondientes. Si es la primera vez que accede, recibirá un correo
        electrónico para verificar su cuenta.
      </InstructionsMessage>
    </InstructionsCard>
  );
};

export default Instructions;
