import { useState } from "react";
import { useRouter } from "next/router";

import { useSignup } from "../hooks/useSignup";
import Navbar from "@/components/Navbar";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, loading } = useSignup();
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    await signup(email, password);
    const user = localStorage.getItem("user");
    if (user) router.push("/");
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
          required
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          required
        />

        <button disabled={loading} type="submit">
          Sign up
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </>
  );
};

export default Signup;
