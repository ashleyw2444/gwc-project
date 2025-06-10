import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Financial() {
  const navigate = useNavigate();

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
              <button className="mt-4 text-sm text-indigo-600 font-medium hover:underline">
                View all →
              </button>
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
              <button className="mt-4 text-sm text-indigo-600 font-medium hover:underline">
                View all →
              </button>
            </div>

            {/* Loans */}
            <div className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1">
              <h2 className="text-xl font-semibold mb-4">Loans</h2>
              <ul className="space-y-2 text-sm">
                <li>🏡 Chase - Mortgage</li>
                <li>🎓 SoFi - Student Loan</li>
              </ul>
              <button className="mt-4 text-sm text-indigo-600 font-medium hover:underline">
                View all →
              </button>
            </div>

            {/* Link Account */}
            <div className="bg-gradient-to-r from-purple-600 to-indigo-500 p-6 rounded-xl flex flex-col justify-center items-center text-white cursor-pointer"
                 onClick={() => navigate('/financial-info')}>
              <h2 className="text-xl font-semibold mb-2">Link Account</h2>
              <p className="text-sm">Connect to other financial institutions</p>
            </div>
          </div>
        </div>

        {/* Tracker Panel */}
        <div className="w-64 bg-white p-6 rounded-xl shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Your Tracker</h2>
            <button className="text-sm text-indigo-600 hover:underline">View all →</button>
          </div>
          <ul className="space-y-4 text-sm">
            <li>
              <span className="block font-medium text-indigo-600">🔍 Bank 1</span>
              <span className="text-gray-500">22 September 2020</span>
            </li>
            <li>
              <span className="block font-medium text-indigo-600">🔍 Bank 2</span>
              <span className="text-gray-500">18 September 2020</span>
            </li>
            <li>
              <span className="block font-medium text-indigo-600">🔍 ATM 1</span>
              <span className="text-gray-500">22 September 2020</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
