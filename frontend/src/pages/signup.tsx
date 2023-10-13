import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    signup(email, password);
  };

  return (
    <>
      <Navbar />
      <form className="login" onSubmit={handleSubmit}>
        <h3>Sign up</h3>

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

        <button disabled={loading}>Sign up</button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Signup;
