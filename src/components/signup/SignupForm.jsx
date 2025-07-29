import { useReducer, useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import authService from "../../services/authService"; // adjust path if needed

const initialState = {
  username: "",
  email: "",
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

const SignupForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (message.text) {
      message.type === "error"
        ? toast.error(message.text)
        : toast.success(message.text);
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
    console.log("Submitted");
    setLoading(true);
    try {
      await authService.register(state);
      setMessage({ type: "success", text: "Registration successful!" });
      dispatch({ type: "RESET" });
      navigate("/login");
    } catch (err) {
      let errorMsg = "Signup failed. Please try again.";
      if (err?.errors) {
        const firstKey = Object.keys(err.errors)[0];
        if (firstKey) {
          errorMsg = err.errors[firstKey][0];
        }
      }
      setMessage({ type: "error", text: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[650px] h-[75vh] rounded-2xl flex">
      {/* Image Section */}
      <div className="hidden md:block p-8 bg-[url(/signup_image.png)] bg-[contain] bg-center bg-no-repeat bg-[#FAEBCE] w-[60%] rounded-s-2xl text-[orange] relative">
        <h1 className="absolute bottom-[50px] left-[55px] text-4xl font-bold">
          Welcome !!
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-[#ff9100] md:rounded-e-2xl md:rounded-none rounded-2xl w-full md:w-[40%] p-4">
        <h2 className="text-2xl text-[white] font-bold text-center underline underline-offset-4 pt-16 p-4">
          Sign Up
        </h2>
        <form
          onSubmit={handleSubmit}
          type="submit"
          className="space-y-4 text-[orange]">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={state.username}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <input
            type="email"
            name="email"
            placeholder="example@xyz.com"
            value={state.email}
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
          <button
            type="submit"
            className="w-full p-3 text-white bg-black rounded-lg hover:bg-[#0e0d0d] hover:text-[orange] transition duration-200"
            disabled={loading}>
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Signing up...
              </span>
            ) : (
              "Sign Up"
            )}
          </button>
        </form>

        <p className="text-center text-[15px] text-[black]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white underline hover:underline-offset-2">
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default SignupForm;
