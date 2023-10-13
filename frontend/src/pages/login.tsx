import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useLogin } from "../hooks/useLogin";
import { useRouter } from "next/router";

const Login = () => {
  const { login, error, loading } = useLogin();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await login(email, password);
    router.push("/");
  };

  return (
    <>
      <Navbar />
      <form className="login" onSubmit={handleSubmit}>
        <h3>Log In</h3>

        <label>Email address:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Log in</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Login;
