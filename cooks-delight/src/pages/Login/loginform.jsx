import { useState } from "react";
import Button from "../../components/common/button/Button";

export default function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // validation
  const validate = () => {
    let newErrors = {};

    if (!form.username) {
      newErrors.username = "Username is required";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      console.log("Form Data:", form);
    }
  };

  return (
    <div className="login-form">

      <h2>LOG IN</h2>
      <p>Welcome back to your kitchen. Log in to access your saved recipes, favorite dishes, and personal cooking space.</p>

      <form onSubmit={handleSubmit}>

            <div className="input-group">
                <input
                type="text"
                name="username"
                value={form.username}
                onChange={handleChange}
                required
                />
                <label>Username</label>
                {errors.username && <span className="error">{errors.username}</span>}
            </div>

            <div className="input-group">
                <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                />
                <label>Password</label>
                {errors.password && <span className="error">{errors.password}</span>}
            </div>

            <Button btnstyle="primary">SIGN IN NOW!</Button>

            <div className="divider">
            </div>
            
            <p className="pForm">Don’t have an account?<a href="#">CREATE ONE NOW</a></p>

        </form>
                </div>
  );
}