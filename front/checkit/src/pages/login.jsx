import { LoginForm } from "../components/LoginForm";
import '../style/login.css'
import { Card } from 'primereact/card'



function Login() {
    return (
      <div className="container p-3">
        <Card className="shadow-sm border border-light rounded project-card m-1">
        <LoginForm />
        </Card>

      </div>
    );
  }

export default Login;
