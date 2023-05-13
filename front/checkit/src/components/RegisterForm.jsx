import { useState } from "react";
import { Link } from "react-router-dom";
import { register } from "../services/Api";

export function RegisterForm() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(pass)
    const data = await register(name, email, pass);
    console.log(data);
  };

    return (
        <>
            <form onSubmit={handleSubmit} className="new-item-form">
                <div className="form-row">
                    <h2>Register</h2>
                    <label htmlFor="name">Full name</label>
                    <input
                        value={name}
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        id="name-item"
                        placeholder="full Name" />
                    <label htmlFor="item">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="youremail@gmail.com"
                        id="email-item"
                        name="email"
                    />
                    <label htmlFor="item">Password</label>
                    <input
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        type="password"
                        placeholder="**************"
                        id="pass- item"
                        name="password"
                    />
                </div>
                <button className="btn" type="submit">Register</button>
            </form>
            <Link to="/">
                <button className="btn">Already have an account? Login here.</button>
            </Link>
        </>
    )
}
