import { LoginForm } from "../components/LoginForm";
import { useEffect } from "react";


export default function Login() {

  useEffect(() => {
    document.body.style.backgroundImage = 'radial-gradient(#e66465, #9198e5)';
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);

    return (
        <div className="p-5">
        <LoginForm />
        </div >
    );
  }
