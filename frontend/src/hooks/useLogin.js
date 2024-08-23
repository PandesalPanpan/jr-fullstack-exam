// src/hooks/useLogin.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import config from "../config";

function useLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleUsernameChange(e) {
    setUsername(e.target.value);
  }

  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    console.log("Form submitted"); // Debug log

    const formData = new FormData();
    formData.append("username", username);
    formData.append("password", password);

    try {
      const response = await axios.post(
        `${config.apiBaseUrl}auth/token`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("API call made"); // Debug log

      const data = response.data;
      console.log("API response received", data); // Debug log
      localStorage.setItem("token", data.token);
      navigate("/");
    } catch (err) {
      console.error("Error:", err); // Debug log
      setError(err.response?.data?.message || "Login failed");
    }
  }

  return {
    username,
    password,
    error,
    handleUsernameChange,
    handlePasswordChange,
    handleSubmit,
  };
}

export default useLogin;
