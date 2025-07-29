import { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService from "../../services/authService";

const initialState = {
  identifier: "",
  password: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const LoginForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    if (message.text) {
      if (message.type === "error") toast.error(message.text);
      if (message.type === "success") toast.success(message.text);
    }
  }, [message]);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login({
        login_field: state.identifier,
        password: state.password,
      });

      setMessage({ type: "success", text: "Login successful!" });
      dispatch({ type: "RESET" });
      navigate("/dashboard");
    } catch (err) {
      const msg =
        err?.errors?.general?.[0] ||
        err?.errors?.login_field?.[0] ||
        err?.errors?.password?.[0] ||
        err?.detail ||
        "Login failed. Try again.";
      setMessage({ type: "error", text: msg });
    }
  };

  return (
    <div className="md:w-[650px] h-[75vh] rounded-2xl flex">
      <div className="hidden md:block p-8 bg-[url(/signup_image.png)] bg-[contain] bg-center bg-no-repeat bg-[#FAEBCE] w-[60%] rounded-e-2xl text-[orange] relative order-2 ">
        <h1 className="absolute bottom-[45px] left-[55px] text-4xl font-bold ">
          Welcome Back!
        </h1>
      </div>

      <div className="bg-[#ff9100] w-[400px] md:max-w-[400px] md:rounded-s-2xl md:rounded-none rounded-2xl">
        <h2 className="text-2xl text-white font-bold text-center underline underline-offset-4 pt-16 p-9">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-4 text-[orange]">
          <input
            type="text"
            name="identifier"
            placeholder="Username or Email"
            value={state.identifier}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={state.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-500 hover:text-[orange]">
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <p className="text-right text-[14px]">
            <Link
              to="/forgot-password"
              className="text-white hover:underline hover:text-[orange]">
              Forgot password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-full p-3 text-white bg-black rounded-lg hover:bg-[#0e0d0d] hover:text-[orange] transition duration-200">
            Login
          </button>
        </form>

        <p className="text-center text-[15px] text-black">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-white underline hover:underline-offset-2">
            Sign up
          </Link>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default LoginForm;
