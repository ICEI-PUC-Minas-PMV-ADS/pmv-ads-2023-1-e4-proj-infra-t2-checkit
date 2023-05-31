import { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";


export default function EditUserForm() {
  const navigate = useNavigate();

  const [name, setName] = useState(null);
  const [pass, setPass] = useState(null);
  const [email, setEmail] = useState(null);




  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e);
    navigate("/index");
  };


  return (
    <form onSubmit={handleSubmit} className="px-5 form-background">
          <div className="p-inputgroup flex-1 py-4">
            <span className="p-float-label">
              <InputText id="name" value={name} onChange={(e) => setName(e.value)} placeholder="Seu name completo"/>
              <label className="px-2" htmlFor="name">Nome</label>
            </span>
          </div>
          <div className="p-inputgroup flex-1 py-4">
            <span className="p-float-label">
              <InputText id="pass" value={pass} onChange={(e) => setPass(e.value)} placeholder="Senha"/>
              <label className="px-2" htmlFor="pass">Senha</label>
            </span>
          </div>
          <div className="p-inputgroup flex-1 py-4">
            <span className="p-float-label">
              <InputText id="email" value={email} onChange={(e) => setEmail(e.value)} placeholder="youremail@mail.com"/>
              <label className="px-2" htmlFor="email">E-mail</label>
            </span>
          </div>
          <div className="justify-content-around py-4">
            <Button className="btn cyan-50" label="Salvar" type="submit"/>
          </div>
      </form>
  )
}
