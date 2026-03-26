import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { handleLogin, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔒 If already logged in → go dashboard
  useEffect(() => {
    if (user) {
      navigate("/react/27/dashboard");
    }
  }, [user]);

  const handleSubmit = () => {
    if (!form.email || !form.password) {
      alert("All fields required");
      return;
    }

    if (!form.email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    const success = handleLogin(form);

    if (success) {
      navigate("/react/27/dashboard");
    }
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Login</h2>

        {/* 🧠 UX guidance */}
        <p className="text-sm mb-4 text-gray-600">
          Use registered email • Password min 6 characters
        </p>

        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Login
        </button>

        {/* 🔁 Navigate to register */}
        <p className="mt-3 text-sm">
          Not registered?{" "}
          <Link to="/react/27/register" className="text-blue-500">
            Create account
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
