import React, { useState } from 'react';
import { createUser } from '../../../../infra/api/user-data/create-user';
import { useNavigate } from 'react-router-dom';
import {
  StyledButton,
  StyledCard,
  StyledContainer,
  StyledInput,
  StyledLogo,
  StyledFlexContainer,
} from './login-styled-components';
import { validateEmail } from '../../../../domain/services/utils';
import { useAppContext } from '../../../config-adapters/context-provider';
import Instructions from './instrucciones-component';
import Logo from '../../../../domain/services/assets/logo.jpeg';

const Login = () => {
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [error, setError] = useState<boolean | undefined>();
  const [errorMessage, setErrorMessage] = useState<string>('Revisa los campos');
  const { setUser } = useAppContext();
  const adminName = process.env.REACT_APP_ADMIN_NAME;
  const adminPassword = process.env.REACT_APP_ADMIN_PASSWORD;
  const navigate = useNavigate();

  const singUp = async () => {
    if (!email || !password) {
      setError(true);
      setErrorMessage('Revisa los campos');
      return;
    }
    if (email === adminName && password === adminPassword) {
      navigate('/new');
      localStorage.setItem('admin', 'true');
      return;
    }

    if (validateEmail(email)) {
      setError(false);
      setUser(email);
      localStorage.setItem('user', email);
      const logedUser = createUser({ email, password });


      navigate('/home');
    } else {
      setError(true);
      setErrorMessage('Revisa el email');
    }
  };

  return (
    <>
      <StyledContainer data-testid="login-component">
        <StyledLogo src={Logo} alt="Logo" />
        <StyledFlexContainer>
          <Instructions />
          <div>
            <StyledCard>
              <h1
                style={{
                  color: '#000',
                  fontSize: '1.4rem',
                  marginBottom: '25px',
                }}
              >
                Login
              </h1>
              <StyledInput
                onChange={(e) => setEmail(e.target.value)}
                type="mail"
                placeholder="Introduce tu email"
              />
              <StyledInput
                type="password"
                placeholder="Introduce tu password"
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && (
                <span
                  style={{
                    color: 'red',
                  }}
                >
                  {errorMessage}{' '}
                </span>
              )}
              <StyledButton onClick={singUp}>Login</StyledButton>
            </StyledCard>
          </div>
        </StyledFlexContainer>
      </StyledContainer>
    </>
  );
};

export default Login;
