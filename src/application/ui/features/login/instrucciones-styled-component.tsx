import styled from '@emotion/styled';

export const InstructionsCard = styled.div`
  background-color: rgb(32, 179, 179);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 400px;
  margin: 0 auto;
  text-align: center;
  opacity: 0.8;
  font-weight: bold;
  font-family: Roboto, sans-serif;

  @media (max-width: 768px) {
    width: 80%;
  }

  @media (max-width: 480px) {
    width: 60%;
  }
`;

export const InstructionsTitle = styled.h2`
  margin-top: 0;
`;

export const InstructionsMessage = styled.p`
  font-size: 18px;
`;