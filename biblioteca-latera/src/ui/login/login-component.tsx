import React, { useState } from "react";
import { createUser } from "src/api/user-data/create-user";

type LoginProps = {
  handleSteps: (step: number) => void;
};
const Login: React.FC<LoginProps> = ({ handleSteps }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const singUp = async () => {
    const logedUser = createUser({ email, password });
    console.log(logedUser);

    handleSteps(1);
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
