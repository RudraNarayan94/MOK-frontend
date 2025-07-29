import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import authService from "../services/authService";

const ForgotPasswordForm = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.sendPasswordResetEmail(email);
      toast.success("Password reset link sent to your email.");
      // optionally redirect to login after a pause
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const msg =
        err.response?.data?.detail || "Failed to send reset email. Try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[650px] h-[75vh] rounded-2xl flex">
      <div className="bg-[#ff9100] w-full md:w-[40%] p-4 rounded-2xl mx-auto my-auto">
        <h2 className="text-2xl text-white font-bold text-center underline underline-offset-4 pt-8 pb-4">
          Forgot Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-[orange]">
          <input
            type="email"
            name="email"
            placeholder="your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 text-white bg-black rounded-lg hover:bg-[#0e0d0d] transition duration-200">
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>
        <p className="text-center text-[15px] text-[black] mt-4">
          <Link to="/login" className="text-white hover:underline">
            Back to Login
          </Link>
        </p>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default ForgotPasswordForm;
