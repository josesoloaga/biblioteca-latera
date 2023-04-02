import React, { useState } from "react";
import { createUser } from "../../../api/user-data/create-user";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";

const  StyledContainer= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
  gap: 50px;
    background: rgb(2,0,36);
background: linear-gradient(357deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 23%, rgba(0,212,255,1) 100%);
    `

const StyledInput = styled.input`
width: 240px;
height: 50px;
border: 1px solid #000;
border-radius: 5px;
margin: 10px 0;
padding: 0 10px;
`

const StyledButton = styled.button`
width: 260px;
height: 50px;
border: 1px solid #000;
border-radius: 5px;
margin: 10px 0;
padding: 0 10px;


`
const StyledCard = styled.div`
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
   

`
const StyledTitle= styled.h1`
color: #fff;
font-size: 2rem;
`
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate()

  const singUp = async () => {
    const logedUser = createUser({ email, password });
    console.log(logedUser);

    navigate('/home')
  };
  return (
    <>
      <StyledContainer  data-testid='login-component'>
      <StyledTitle>Bienvenido a la Biblioteca Latera </StyledTitle>
        <StyledCard>
        
        <StyledInput onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Introduce tu email" />
        <StyledInput type="text" placeholder="Introduce tu password" onChange={(e) => setPassword(e.target.value)} />
        <StyledButton onClick={singUp}>Login</StyledButton>
        </StyledCard>
      </StyledContainer>
    </>
  );
};

export default Login;
