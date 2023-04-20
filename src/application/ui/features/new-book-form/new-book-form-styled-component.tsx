import styled from '@emotion/styled';
import backgroundImage from '../../../../domain/services/assets/newBookBackground.jpg';

export const StyledContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  gap: 10px;
  background-color: #3759f2;
  background-image: url(${backgroundImage});
  background-repeat: no-repeat;
  background-size: cover;
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
export const StyledTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
`;
