import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import TrackerPanel from "../components/TrackerPanel";
import { Link } from "react-router-dom";

export default function Financial() {
  const navigate = useNavigate();

  const financialItems = [
    { label: "🏦 Chase", date: "22 May 2025" },
    { label: "🐦 Robinhood", date: "26 May 2025" },
    { label: "🏦 Bank of America", date: "10 June 2025" },
  ];

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />

      <main className="flex-1 p-10 flex gap-6">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Financial</h1>

          <div className="grid grid-cols-2 gap-4 items-start">
            {/* Bank Accounts */}
            <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Bank Accounts</h2>
              <ul className="space-y-6 flex-grow">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/chase-logo.jpg" alt="Chase Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-base font-bold text-gray-900">Chase</p>
                      <p className="text-xs text-gray-500">Saving Account</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/boa.png" alt="BofA Logo" className="w-10 h-10 rounded-full" />
                    <div className="whitespace-nowrap">
                      <p className="text-base font-bold text-gray-900 truncate max-w-[150px]">Bank of America</p>
                      <p className="text-xs text-gray-500">Checking Account</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
              </ul>
              <Link
                to="/activity"
                className="mt-6 inline-block text-sm text-indigo-600 font-semibold hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Investments */}
            <div className="bg-white p-6 rounded-xl shadow h-full flex flex-col">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Investments</h2>
              <ul className="space-y-6 flex-grow">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/fid.png" alt="Fidelity Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-base font-bold text-gray-900">Fidelity</p>
                      <p className="text-xs text-gray-500">Brokerage Account</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/rob.png" alt="Robinhood Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-base font-bold text-gray-900">Robinhood</p>
                      <p className="text-xs text-gray-500">Brokerage Account</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
              </ul>
              <Link
                to="/activity"
                className="mt-6 inline-block text-sm text-indigo-600 font-semibold hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Loans */}
            <div className="bg-white p-6 rounded-xl shadow col-span-2 md:col-span-1 flex flex-col h-full">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">Loans</h2>
              <ul className="space-y-6 flex-grow">
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/chase-logo.jpg" alt="Chase Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-base font-bold text-gray-900">Chase</p>
                      <p className="text-xs text-gray-500">Mortgage</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
                <li className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <img src="assets/sofi.jpg" alt="SoFi Logo" className="w-10 h-10 rounded-full" />
                    <div>
                      <p className="text-base font-bold text-gray-900">SoFi</p>
                      <p className="text-xs text-gray-500">Student Loan</p>
                    </div>
                  </div>
                  <span className="text-green-800 font-semibold">Verified</span>
                </li>
              </ul>
              <Link
                to="/activity"
                className="mt-6 inline-block text-sm text-indigo-600 font-semibold hover:underline"
              >
                View all →
              </Link>
            </div>

            {/* Link Account */}
            <div
              className="bg-gradient-to-r from-purple-600 to-indigo-500 p-6 rounded-xl flex flex-col justify-center items-center text-white cursor-pointer"
              onClick={() => navigate('/financial-release')}
            >
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





