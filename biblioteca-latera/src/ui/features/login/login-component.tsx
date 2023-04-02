import React, { useState } from "react";
import { createUser } from "../../../api/user-data/create-user";
import { useNavigate } from "react-router-dom";

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
      <div data-testid='login-component'>
        <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Introduce tu email" />
        <input type="text" placeholder="Introduce tu password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={singUp}>Login</button>
      </div>
    </>
  );
};

export default Login;
