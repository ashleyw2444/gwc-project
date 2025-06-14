// src/pages/Dashboard.jsx
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import "@fontsource/inter/400.css"; 
import "@fontsource/inter/600.css"; 

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />

      <main className="flex-1 p-10 overflow-y-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-lg text-gray-600 mb-1">Hi John Smith,</h2>
          <h1 className="text-3xl font-bold text-gray-900">Welcome to CLEAR!</h1>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10 px-4">
          {/* Financial */}
          <Card 
            title="Financial" 
            description="Verify your identity at financial institutions." 
            image="/assets/icons/creditCardsIcon.jpeg"
            onClick={() => navigate('/Finance')} 
          />

          {/* Healthcare */}
          <Card 
            title="Healthcare" 
            description="Use biometric verification for clinics and pharmacies." 
            image="/assets/icons/healthcareIcon.png"
            onClick={() => navigate('/Healthcare')} 
          />

          {/* Travel */}
          <Card 
            title="Travel" 
            description="Speed through airport security with CLEAR." 
            image="/assets/icons/travel-icon.png"
            onClick={() => navigate('/Travel')} 
          />
        </div>

        {/* User Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          {/* Activity Summary */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Your Activity</h2>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Verified at CVS Pharmacy – June 10</li>
              <li>✅ Used CLEAR at JFK Airport – May 22</li>
              <li>✅ Verified identity at Chase Bank – May 15</li>
            </ul>
          </div>

          {/* Security Overview */}
          <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Security Status</h2>
            <p className="text-green-700 font-medium">✔ Your identity is protected by biometric encryption.</p>
            <p className="text-sm mt-2 text-gray-500">
              Last biometric verification: 3 days ago <br />
              No suspicious activity detected.
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}

// Reusable Card Component
function Card({ title, description, image, onClick }) {
  return (
    <div className="relative bg-white p-6 pr-8 rounded-2xl shadow-md w-full h-60 font-inter overflow-hidden">
      <div className="relative z-10 text-center">
        <h3 className="text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-base text-gray-700 mb-4">{description}</p>
        <button
          onClick={onClick}
          className="bg-indigo-700 hover:bg-indigo-600 text-white py-2 px-5 rounded-full font-medium transition"
        >
          Verify
        </button>
      </div>
      <img
        src={image}
        alt={`${title} Icon`}
        className="absolute right-4 bottom-4 w-28 h-28 opacity-90 z-0"
      />
    </div>
  );
}
