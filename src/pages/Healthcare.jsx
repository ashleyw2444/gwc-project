import { useNavigate } from 'react-router-dom'; // ← Add this!
import Sidebar from '../components/Sidebar';
import TrackerPanel from "../components/TrackerPanel";

export default function Healthcare() {
  const navigate = useNavigate(); // ← Initialize the hook

  const healthcareItems = [
    { label: "🏥 Hospital 1", date: "22 September 2020" },
    { label: "👨‍⚕️ Doctor 1", date: "18 September 2020" },
    { label: "💉 Vaccination Clinic 1", date: "22 September 2020" },
  ];


    const consentItems = [
    { title: "Medical Records", provider: "NYC Medical Center", status: "shared" },
    { title: "Insurance Information", provider: "Mount Sinai Hospital", status: "shared" },
    { title: "Prescription Data", provider: "TeleHealth Inc.", status: "shared" },
    { title: "Vaccination Status", provider: "NYC Pharmacy", status: "paused" }
  ];


  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 flex gap-6">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Healthcare</h1>

          {/* Verified Section */}
          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-2 rounded-full flex items-center justify-center relative">
                <img
                  src="assets/purple-fingerprint-icon.png"
                  alt="Fingerprint Icon"
                  className="w-16 h-16"
                />
                
               {/* Green checkmark circle */}
                <div 
                  className="absolute bottom-4 right-4 w-4 h-4 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: '#1F9C95' }}
                >
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path 
                      fillRule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                      clipRule="evenodd" 
                    />
                  </svg>
                </div>
                
              </div>
              <div>
                <p className="text-gray-500 text-sm">Verified as:</p>
                <p className="text-xl font-semibold text-gray-900">John Smith</p>
              </div>
            </div>
            <div className="space-x-4">
              <button
                onClick={() => navigate('/medical-release')}
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white active:bg-purple-200 transition-colors duration-150"

              >
                Reverify Identity
              </button>
              <button
                onClick={() => navigate('/medical-release')}
                className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-purple-600 hover:text-white active:bg-purple-200 transition-colors duration-150"
              >
                Manage Consent
              </button>
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-purple-600 text-2xl">📅</span>
              <p className="text-gray-800 font-medium">Check In to Appointment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-purple-600 text-2xl">📁</span>
              <p className="text-gray-800 font-medium">Access Medical Records</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-purple-600 text-2xl">💊</span>
              <p className="text-gray-800 font-medium">Pick Up Prescription</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4 hover:shadow-lg hover:scale-105 transition-all duration-200 cursor-pointer">
              <span className="text-purple-600 text-2xl">🛡️</span>
              <p className="text-gray-800 font-medium">View Insurance Info</p>
            </div>
          </div>

            {/* Consent Management */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">Data Sharing Preferences</h3>
                <button className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg font-medium text-sm hover:bg-purple-200 transition-colors"
                 onClick={() => navigate('/medical-release')} >
                  Manage All
                </button>
              </div>
              
              <div className="space-y-4">
                {consentItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className={`w-3 h-3 rounded-full ${item.status === 'shared' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                      <div>
                        <p className="font-medium text-gray-900">{item.title}</p>
                        <p className="text-sm text-gray-600">{item.provider}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                        item.status === 'shared' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {item.status}
                      </span>
                      <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                        
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


        <TrackerPanel title="Your Tracker" viewAllLink="#" items={healthcareItems} />
      </main>
    </div>
  );
}
