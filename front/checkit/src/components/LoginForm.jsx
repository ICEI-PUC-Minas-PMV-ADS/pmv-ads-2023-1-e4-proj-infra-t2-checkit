import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/Api";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import '../style/login.css'




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

  const handleClick = () => {
    navigate("/register");
  }

  return (
    <div className="form-container d-flex justify-content-center text-center">
      <div className="wrapper rounded">
      <form onSubmit={handleSubmit} className="p-5 mx-5 form-container">
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
          <div className="justify-content-around px-3">
  `        <Button className="btn cyan-50" label="Login" type="submit"/>
          </div>
          <label htmlFor="register" className="justify-content-around p-3 mt-3 mb-0 text-muted">
            Ainda não é cadastrado?
          </label>
          <div className="justify-content-around px-3">
            <Button  className="btn" id="register" label="Criar conta" onClick={handleClick}/>
          </div>
      </form>
      </div>
    </div>
  );
}
