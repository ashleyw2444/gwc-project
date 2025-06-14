// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
// for fonts in the cards
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/600.css"; 

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="mb-8">
          <h2 className="text-lg text-gray-600 mb-1">Hi John Smith,</h2>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to CLEAR!</h1>
        </div>

        <div className="flex gap-10">
          {/* Financial Card */}
          <div className="relative bg-white p-6 pr-8 ml-10 rounded-2xl shadow-md w-[28rem] h-60 font-inter overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-2">Financial</h3>
              <p className="text-base text-gray-700 mb-4">
                Use CLEAR to verify your identity at financial institutions!
              </p>
              <button
                onClick={() => navigate('/Finance')}
                className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-5 rounded-full font-medium transition"
              >
                Verify
              </button>
            </div>
            <img
              src="/assets/icons/creditCardsIcon.jpeg"
              alt="Financial Icon"
              className="absolute right-4 bottom-4 w-32 h-32 opacity-90 z-0"
            />
          </div>

          {/* Healthcare Card */}
          <div className="relative bg-white p-6 pr-8 rounded-2xl shadow-md w-[28rem] h-60 font-inter overflow-hidden">
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-semibold mb-2">Healthcare</h3>
              <p className="text-base text-gray-700 mb-4">
                Use CLEAR to verify your identity at medical locations!
              </p>
              <button
                onClick={() => navigate('/Healthcare')}
                className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-5 rounded-full font-medium transition"
              >
                Verify
              </button>
            </div>
            <img
              src="/assets/icons/healthcareIcon.png"
              alt="Healthcare Icon"
              className="absolute right-4 bottom-4 w-32 h-32 opacity-90 z-0"
            />
          </div>
        </div>

      </main>
    </div>
  );
}
