import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";

export const useLogin = () => {
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:4000/user/login/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();

    if (!response.ok) {
      setLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // save user to localStorage
      localStorage.setItem("user", JSON.stringify(json));

      dispatch({ type: "LOGIN", payload: json });

      setLoading(false);
    }
  };

  return { login, loading, error };
};
