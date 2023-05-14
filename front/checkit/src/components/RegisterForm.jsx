import { useState } from "react";
import { register } from "../services/Api";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(pass);
    const data = await register(name, email, pass);
    console.log(data);
  };

  const handleClick = () => {
    navigate("/");
  };

    return (
      <div className="form-container d-flex justify-content-center text-center">
            <form onSubmit={handleSubmit} className="p-5 mx-5">
              <h2>Criar conta</h2>
              <div className="p-3">
                <span className="p-float-label">
                  <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Seu nome completo"/>
                  <label className="px-2" htmlFor="name">Nome</label>
                </span>
              </div>
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
          <div className="p-3">
            <Button  className="btn" id="register" label="Criar conta" type="submit"/>
          </div>
          <label htmlFor="register" className="px-3 mt-3 mb-0 text-muted">
            Já é cadastrado?
          </label>
          <div className="px-3">
  `        <Button className="btn" label="Login" onClick={handleClick}/>
          </div>
        </form>
    </div>
    )
}
