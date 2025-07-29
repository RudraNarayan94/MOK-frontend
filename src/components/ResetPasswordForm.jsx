import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import authService from "../services/authService";

const ResetPasswordForm = () => {
  const { uid, token } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ password: "", password2: "" });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await authService.resetPassword({ uid, token, ...form });
      toast.success("Password reset successful!");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      const msg =
        err.response?.data?.detail || "Reset failed. Please try again.";
      toast.error(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="md:w-[650px] h-[75vh] rounded-2xl flex">
      <div className="bg-[#ff9100] w-full md:w-[40%] p-4 rounded-2xl mx-auto my-auto">
        <h2 className="text-2xl text-white font-bold text-center underline underline-offset-4 pt-8 pb-4">
          Reset Password
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4 text-[orange]">
          <div className="relative">
            <input
              type={showPwd ? "text" : "password"}
              name="password"
              placeholder="New password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="button"
              onClick={() => setShowPwd(!showPwd)}
              className="absolute right-3 top-3 text-gray-500 hover:text-[orange]">
              {showPwd ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <input
            type={showPwd ? "text" : "password"}
            name="password2"
            placeholder="Confirm password"
            value={form.password2}
            onChange={handleChange}
            required
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 text-white bg-black rounded-lg hover:bg-[#0e0d0d] transition duration-200">
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-right" autoClose={3000} />
    </div>
  );
};

export default ResetPasswordForm;
