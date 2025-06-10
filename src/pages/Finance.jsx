import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TrackerPanel from "../components/TrackerPanel";
import { Link } from "react-router-dom";

export default function Financial() {
  const navigate = useNavigate();

  const financialItems = [
    { label: "🔍 Bank 1", date: "22 September 2020" },
    { label: "🔍 Bank 2", date: "18 September 2020" },
    { label: "🔍 ATM 1", date: "22 September 2020" },
  ];

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 flex gap-6">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Financial</h1>

          {/* Bank Accounts */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Bank Accounts</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>🏦 Chase - Saving Account</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </li>
                <li className="flex justify-between">
                  <span>🏦 Bank of America - Checking Account</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </li>
              </ul>
              <Link
                to="/activity"
                className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Investments */}
            <div className="bg-white p-6 rounded-xl shadow">
              <h2 className="text-xl font-semibold mb-4">Investments</h2>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span>🌿 Fidelity - Brokerage Account</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </li>
                <li className="flex justify-between">
                  <span>🐦 Robinhood - Brokerage Account</span>
                  <span className="text-green-600 font-medium">Verified</span>
                </li>
              </ul>
              <Link
                to="/activity"
                className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Loans */}
            <div className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Loans</h2>
              <ul className="space-y-2 text-sm">
                <li>🏡 Chase - Mortgage</li>
                <li>🎓 SoFi - Student Loan</li>
              </ul>
              <Link
                to="/activity"
                className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Link Account */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-6 rounded-xl flex flex-col justify-center items-center text-white cursor-pointer"
                 onClick={() => navigate('/financial-info')}>
              <h2 className="text-xl font-semibold mb-2">Link Account</h2>
              <p className="text-sm">Connect to other financial institutions</p>
            </div>
          </div>
        </div>

        <TrackerPanel title="Your Tracker" viewAllLink="#" items={financialItems} />
      </main>
    </div>
  );
}
