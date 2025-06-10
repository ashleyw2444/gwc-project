// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      {/* Sidebar */}
      <aside className="w-60 bg-white p-6 flex flex-col justify-between border-r">
        <img src="/assets/clearlogo.svg" alt="Clear logo" className="w-28 mb-10" />
        <ul className="space-y-4 text-gray-800 font-medium">
          <li className="cursor-pointer">Dashboard</li>
          <li className="cursor-pointer">Activity</li>
          <li className="cursor-pointer">Profile</li>
          <li className="cursor-pointer">Security</li>
          <li className="cursor-pointer">Schedules</li>
          <li className="cursor-pointer">Payouts</li>
          <li className="cursor-pointer">Settings</li>
        </ul>
        <button className="mt-10 bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold py-2 px-4 rounded-xl">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-lg text-gray-600 mb-1">Hi &lt;USER&gt;,</h2>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to CLEAR!</h1>
        </div>

        <div className="flex gap-10">
          {/* Financial Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-80">
            <h3 className="text-xl font-semibold mb-2">Financial</h3>
            <p className="text-sm text-gray-700 mb-4">
              Use CLEAR to verify your identity at financial institutions!
            </p>
            <button
              onClick={() => navigate('/Finance')}
              className="bg-indigo-700 text-white py-2 px-4 rounded-full font-medium"
            >
              Verify
            </button>
          </div>

          {/* Healthcare Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md w-80">
            <h3 className="text-xl font-semibold mb-2">Healthcare</h3>
            <p className="text-sm text-gray-700 mb-4">
              Use CLEAR to verify your identity at medical locations!
            </p>
            <button
              onClick={() => navigate('/Healthcare')}
              className="bg-indigo-700 text-white py-2 px-4 rounded-full font-medium"
            >
              Verify
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
