import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 50px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    357deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 23%,
    rgba(0, 212, 255, 1) 100%
  );
`;

export const StyledInput = styled.input`
  width: 240px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
`;

export const StyledButton = styled.button`
  width: 260px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
`;
export const StyledCard = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034);
  background: #fff;
`;
export const StyledTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
`;
