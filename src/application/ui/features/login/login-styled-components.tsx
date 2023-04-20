import styled from '@emotion/styled';
import mural from '../../../../domain/services/assets/newBookBackground.jpg';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  height: 100vh;
  background-image: url(${mural});
  background-repeat: no-repeat;
  background-size: cover;
  font-family: Roboto;

  @media (max-width: 768px) {
    height: 100vh;
  }
`;

export const StyledInput = styled.input`
  width: 240px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;

  @media (max-width: 468px) {
    width: 90%;
  }
`;

export const StyledButton = styled.button`
  width: 260px;
  height: 50px;
  border: 1px solid #000;
  border-radius: 5px;
  margin: 10px 0;
  padding: 0 10px;
  @media (max-width: 468px) {
    width: 100%;
  }
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

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 468px) {
    width: 270px;
  }
`;
export const StyledTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

export const StyledLogo = styled.img`
  width: 7rem;
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
