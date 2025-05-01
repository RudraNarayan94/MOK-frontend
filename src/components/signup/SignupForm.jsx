import { useReducer, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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
  const [message, setMessage] = useState({type:"error",text:"hii"});
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
      if (message.text) {
        if (message.type === "error") {
          toast.error(message.text);
        } else if (message.type === "success") {
          toast.success(message.text);
        }
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
      const response = await axios.post("http://127.0.0.1:5000/signup", state);
      setMessage(response.data.message);
      dispatch({ type: "RESET" }); // Reset form after successful submission
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      setMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="md:w-[650px] h-[75vh] rounded-2xl flex">
      {/* Image Section */}
      <div className="hidden md:block p-8 bg-[url(/signup_image.png)] bg-[contain] bg-center bg-no-repeat bg-[#FAEBCE] w-[60%] rounded-s-2xl text-[orange] relative ">
        <h1 className="absolute bottom-[50px] left-[55px] text-4xl font-bold ">
          Welcome !!
        </h1>
      </div>

      {/* Form Section */}
      <div className="bg-[#ff9100] md:rounded-e-2xl md:rounded-none rounded-2xl ">
        <h2 className="text-2xl text-[white] font-bold text-center underline underline-offset-4 pt-16 p-9">
          Sign Up
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 p-4 text-[orange] ">
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
              className="absolute right-3 top-3 text-gray-500 hover:text-[orange]"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-black rounded-lg hover:bg-[#0e0d0d] hover:text-[orange] transition duration-200"
          >
            Sign Up
          </button>
        </form>
        
        <p className="text-center text-[15px] text-[black]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-white underline hover:underline-offset-2"
          >
            Login here
          </Link>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default SignupForm;
