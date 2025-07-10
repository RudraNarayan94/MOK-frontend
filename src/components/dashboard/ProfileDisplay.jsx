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
  const [streak,setStreak] = useState(true)
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
        fill: true,
        borderColor: "black",
        tension: 0.3,
        backgroundColor: 'black',
      },
    ],
  };

  const options = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      ticks: {
        color: 'black', // X-axis labels color
      },
      grid: {
        color: 'black'
      },
      border: {
        color: 'black', // X-axis baseline color
      },
    },
    y: {
      ticks: {
        color: 'black', // Y-axis labels color
      },
      grid: {
        color: 'black', // Y-axis grid lines color
      },
      border: {
        color: 'black', // Y-axis baseline color
      },
    },
  },
  plugins: {
    legend: {
      labels: {
        color: 'black', // Legend label colors
      },
    },
  },
};


  return (
    <div className="flex w-full h-[] bg-[#181C22] font-mono text-slate-300">
      {/* Sidebar */}
      <div className="w-[32vw] md:w-[16%] h-[88vh] bg-[#1f242a] p-3 rounded-se-md sticky top-[80px] relative ">
        <div className="flex p-3 rounded-lg gap-7 justify-start bg-[#faf9f928] items-center font-bold text-white mb-8 group hover:shadow-orange-500 shadow-2xl hover:bg-[#ffa600dd] ">
          {/* Handle Too Long Username */}
          <div className="w-10 h-10 cursor-pointer rounded-full flex items-center justify-center bg-gradient-to-br from-orange-500 via-orange-700 to-pink-500 group-hover:border border-white">
            U
          </div>
          <h1 className="text-lg tracking-wider">Username</h1>
        </div>
        <div className="space-y-4">
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
        <div className="absolute w-56 bottom-8 flex justify-center items-center ">
          <button
            onClick={handleLogout}
            className="text-white text-md bg-[#F97316] p-[9px_72px] rounded-md hover:shadow-orange-400 shadow-2xl hover:bg-orange-600 hover:underline"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {/* <div className="flex-1 p-8 overflow-y- scrollbar-hidden ">
        {/* Profile Section */}
      {/* <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">
            Welcome, {user.username}!
          </h2>
          <p className="text-gray-400">{user.email}</p>
        </div> */}

      {/* WPM Graph Section */}
      {/* <div className="bg-[#1f242a] p-6 rounded-lg shadow-lg mb-8 max-w-[90vw] max-h-[400px]">
          <h3 className="text-xl font-bold text-white mb-4">
            Your WPM Progress
          </h3>
          <div className="h-[250px]">
            <Line data={data} options={{ maintainAspectRatio: false }} />
          </div>
        </div> */}

      {/* History Section */}
      {/* <div className="bg-[#1f242a] p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-white mb-4">History</h3>
          <ul className="space-y-4 text-gray-300">
            {history.map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.date}</span>
                <span>{item.wpm} WPM</span>
              </li>
            ))}
          </ul>
        </div> */}
      {/* </div> */}

      <div className="w-[68vw] md:w-[84%] p-5 ">
        {/* Daily Stats */}
        <div className="mb-10">
          <h1 className="pb-5 pl-1 text-2xl text-orange-600 font-semibold">
            Daily Stats
          </h1>
          <div className="w-[100%] grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Best Speed
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                33 WPM
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Best Accuracy
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                80 %
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Avg. Speed
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                30 WPM
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Avg. Accuracy
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                65 %
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 col-span-2 lg:col-span-1 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Total Attempts
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                33 times
              </h2>
            </div>
          </div>
        </div>

        {/* Global Stats */}
        <div className="mb-10">
          <h1 className="pb-5 pl-1 text-2xl text-orange-600 font-semibold">
            Global Stats
          </h1>
          <div className="w-[100%] grid grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Best Speed
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                33 WPM
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Best Accuracy
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                80 %
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Avg. Speed
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                30 WPM
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Avg. Accuracy
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                65 %
              </h2>
            </div>
            <div className="bg-[#ffa600af] font-semibold text-xl text-black hover:bg-[orange] hover:shadow-orange-500 shadow-md h-20 col-span-2 lg:col-span-1 flex items-center justify-center flex-col rounded-lg group relative overflow-hidden transition-all duration-300">
              <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                Total Attempts
              </h1>
              <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                33 times
              </h2>
            </div>
          </div>
        </div>

        {/* Ranks and Streak */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-10 ">
          <div className="text-black h-40 bg-[#ffa600bb] hover:shadow-orange-500 shadow-md hover:bg-[orange] transition duration-300 p-2 rounded-lg">
            <h1 className="font-semibold text-xl text-center mb-5">
              Ranks and Percentile
            </h1>
            <div className="grid grid-cols-2 w-full ">
              <div className="text-xl border-r border-black tracking-tighter font-semibold group flex flex-col items-center justify-center">
                <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                  Global Rank
                </h1>
                <h2 className="transition-all tracking-wide duration-300 group-hover:scale-150 group-hover:font-bold">
                  3309890
                </h2>
              </div>
              <div className="text-xl border-l border-black tracking-tighter font-semibold group flex flex-col items-center justify-center ">
                <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                  Global percentile
                </h1>
                <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                  64.7777
                </h2>
              </div>
            </div>
          </div>

          <div className="text-black h-40 bg-[#ffa600bb] hover:shadow-orange-500 shadow-2xl hover:bg-[orange] transition duration-300 p-2 rounded-lg">
            <h1 className="font-semibold text-xl text-center mb-5">
              Streak
            </h1>
            <div className="grid grid-cols-2 w-full ">
              <div className="text-xl border-r border-black tracking-tighter font-semibold group flex flex-col items-center justify-center">
                <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                  Highest Streak
                </h1>
                <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                  3 Days
                </h2>
              </div>
              <div className="text-xl border-l border-black tracking-tighter font-semibold group flex flex-col items-center justify-center ">
                <h1 className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-1 mt-3">
                  Current Streak
                </h1>
                <h2 className="transition-all duration-300 group-hover:scale-150 group-hover:font-bold">
                  {streak && '🔥'}6 Days
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* Graph */}
        <div className="bg-[#B67B0B] p-6 rounded-lg hover:shadow-orange-500 shadow-lg mb-8 max-w-[90vw] max-h-[400px]">
          <h3 className="text-xl text-center font-bold text-black mb-4">
            Your WPM Progress
          </h3>
          <div className="h-[250px]">
            <Line data={data} options={options} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
