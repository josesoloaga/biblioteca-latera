import React, {useState } from "react";
import { createUser } from "../../../api/user-data/create-user";
import { useNavigate } from "react-router-dom";
import { StyledButton, StyledCard, StyledContainer, StyledInput, StyledTitle } from "./login-styled-components";
import { validateEmail } from "../../../domain/utils";
import { useAppContext } from "../../../config-adapters/context-provider";

const Login = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<boolean | undefined>()
  const [errorMessage, setErrorMessage] = useState<string>('Revisa los campos')
  const {setUser} = useAppContext()

  const navigate = useNavigate()

  const singUp = async () => {
    if (!email || !password){
      setError(true)
      setErrorMessage('Revisa los campos')
      return
    } 

    
    if(validateEmail(email)){
      setError(false)
      setUser(email)
      localStorage.setItem('user', email)
      const logedUser = createUser({ email, password });
      console.log(logedUser);
  
      navigate('/home')
    }else{
      setError(true)
      setErrorMessage('Revisa el email')
    }
   
  };


  return (
    <>
      <StyledContainer  data-testid='login-component'>
      <StyledTitle>Bienvenido a la Biblioteca Latera </StyledTitle>
        <StyledCard>
        
        <StyledInput onChange={(e) => setEmail(e.target.value)} type="mail" placeholder="Introduce tu email" />
        <StyledInput type="password" placeholder="Introduce tu password" onChange={(e) => setPassword(e.target.value)} />
        {error && <span style={{
          color: 'red'
        }}>{errorMessage} </span>}
        <StyledButton onClick={singUp }>Login</StyledButton>
        </StyledCard>
      </StyledContainer>
    </>
  );
};

export default Login;
