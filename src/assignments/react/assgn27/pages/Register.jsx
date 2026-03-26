import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { handleRegister, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
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
    // Basic validation rules
    if (!form.name || !form.email || !form.password || !form.confirm) {
      alert("All fields required");
      return;
    }

    if (form.name.length < 3) {
      alert("Name must be at least 3 characters");
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

    if (form.password !== form.confirm) {
      alert("Passwords do not match");
      return;
    }

    const success = handleRegister(form);

    if (success) {
      navigate("/react/27/login");
    }
  };

  return (
    <>
      <div className="p-4">
        <h2 className="text-xl mb-2">Register</h2>

        {/* 🧠 UX guidance */}
        <p className="text-sm mb-4 text-gray-600">
          Name (min 3 chars) • Email must include @ • Password min 6 chars
        </p>

        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />
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
        <input
          name="confirm"
          type="password"
          placeholder="Confirm Password"
          onChange={handleChange}
          className="border p-2 block mb-2"
        />

        <button
          onClick={handleSubmit}
          className="bg-green-500 text-white px-4 py-2"
        >
          Register
        </button>

        {/* 🔁 Navigate to login */}
        <p className="mt-3 text-sm">
          Already have an account?{" "}
          <Link to="/react/27/login" className="text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </>
  );
};

export default Register;
