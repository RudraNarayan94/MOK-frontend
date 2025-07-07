import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Link } from "react-router-dom";

// Register the necessary components for Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
);

const Dashboard = () => {
  const [user, setUser] = useState({
    username: "JohnDoe", // Placeholder, should come from user state or context
    email: "johndoe@example.com", // Placeholder
  });

  // eslint-disable-next-line no-unused-vars
  const [history, setHistory] = useState([
    { date: "2023-06-10", wpm: 75 },
    { date: "2023-06-12", wpm: 80 },
    { date: "2023-06-15", wpm: 65 },
    { date: "2023-06-17", wpm: 90 },
  ]);

  const handleLogout = () => {
    setUser(null); // Implement your logout logic here (clear tokens, etc.)
  };

  const handleResetPassword = () => {
    // Implement reset password logic
    alert("Password reset link sent to your email.");
  };

  // Graph Data for WPM
  const data = {
    labels: history.map((item) => item.date),
    datasets: [
      {
        label: "WPM",
        data: history.map((item) => item.wpm),
        fill: false,
        borderColor: "orange",
        tension: 0.1,
      },
    ],
  };

  return (
    <div className="flex h-screen bg-[#181C22] text-slate-300">
      {/* Sidebar */}
      <div className="w-64 bg-[#1f242a] p-6">
        <div className="text-center text-xl font-bold text-[orange] mb-8">
          <Link to="/">
            <div className="flex justify-center gap-2 items-center">
              <img
                className="h-10"
                src="keyboard-shortcut.1024x1020.png"
                alt="logo"
              />
              <h4>m.o.k</h4>
            </div>
          </Link>
        </div>
        <div className="space-y-4">
          <button
            onClick={handleLogout}
            className="w-full text-left text-white hover:text-[orange] hover:underline"
          >
            Logout
          </button>
          <button
            onClick={handleResetPassword}
            className="w-full text-left text-white hover:text-[orange] hover:underline"
          >
            Reset Password
          </button>
          <button className="w-full text-left text-white hover:text-[orange] hover:underline">
            History
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 overflow-y-scroll scrollbar-hidden ">
        {/* Profile Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome, {user.username}!
          </h2>
          <p className="text-gray-400">{user.email}</p>
        </div>

        {/* WPM Graph Section */}
        <div className="bg-[#1f242a] p-6 rounded-lg shadow-lg mb-8 max-w-[90vw] max-h-[400px]">
          <h3 className="text-xl font-bold text-white mb-4">
            Your WPM Progress
          </h3>
          <div className="h-[250px]">
            <Line data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </div>

        {/* History Section */}
        <div className="bg-[#1f242a] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">History</h3>
          <ul className="space-y-4 text-gray-300">
            {history.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.date}</span>
                <span>{item.wpm} WPM</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
