import React, { useState } from "react";
import "./LoginRegister.css";
import { FaUserAlt, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BASE_URL = "http://localhost:8000";

const LoginRegister = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    const endpoint = isLogin ? "/auth/login" : "/auth/signup";
    const payload = isLogin
      ? { email: formData.email, password: formData.password }
      : {
          name: formData.username,
          email: formData.email,
          password: formData.password,
          type: "user",
        };

    try {
      const response = await fetch(`${BASE_URL}${endpoint}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (data.success) {
        setMessage(data.message);
      } else {
        setMessage("Error: " + (data.message || "Something went wrong"));
      }
    } catch (error) {
      setMessage("Error: Unable to connect to server");
    }
  };

  return (
    <div className="login-register-container">
      <div className="wrapper">
        <div className="form-box">
          <form onSubmit={handleSubmit}>
            <h1>{isLogin ? "LOGIN" : "REGISTER"}</h1>

            {message && <p className="message">{message}</p>}

            {!isLogin && (
              <div className="input-box">
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                <FaUserAlt className="icon" />
              </div>
            )}

            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <MdEmail className="icon" />
            </div>

            <div className="input-box">
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <FaLock className="icon" />
            </div>

            {!isLogin && (
              <div className="remember-forget">
                <label>
                  <input type="checkbox" required /> I Agree to the Terms &
                  Conditions
                </label>
              </div>
            )}

            <button type="submit">{isLogin ? "Login" : "Register"}</button>

            <div className="register-link">
              <p>
                {isLogin
                  ? "Don't Have an Account?"
                  : "Already Have an Account?"}{" "}
                <button type="button" onClick={() => setIsLogin(!isLogin)}>
                  {isLogin ? "Register" : "Login"}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister;
