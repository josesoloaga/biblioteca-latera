import styled from '@emotion/styled';

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  height: 100vh;
  background-color: #3759f2;
  background-image: linear-gradient(45deg, #3759f2 0%, #99dee6 100%);

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

  @media (max-width: 468px){
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
  @media (max-width: 468px){
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

  @media (max-width: 768px){
    width: 100%;
  }

  @media (max-width: 468px){
    width: 270px;
  }

`;
export const StyledTitle = styled.h1`
  color: #fff;
  font-size: 2rem;
`;

export const StyledLogo = styled.img`
  width: 200px;
`;

export const StyledFlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
  `
