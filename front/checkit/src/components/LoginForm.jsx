import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../services/Api";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';



export function LoginForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await login(email, pass);
    console.log(response);
    localStorage.setItem("token", JSON.stringify(response));
    navigate("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="new-item-form  text-center">
        <div className="form-row">
          <h2>Login</h2>
          <div className="p-3">
            <span className="p-float-label">
              <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="youremail@gmail.com"/>
              <label className="px-2" htmlFor="email">Email</label>
            </span>
          </div>
          <div className="p-3">
            <span className="p-float-label">
              <InputText
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="**************"
                id="senha"
              />
              <label className="px-2" htmlFor="senha">Senha</label>
            </span>
          </div>
        </div>
      </form>
      <div className="p-3">
        <Button className="btn" label="Login" type="submit"/>
      <p className="small text-muted">Não tem uma conta?</p>
      <Link to="/register">
        <Button className="btn" id="register" label="Criar conta"/>
      </Link>
        </div>
    </>
  );
}
