export default function Healthcare() {
  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      {/* Sidebar */}
      <aside className="w-60 bg-white p-6 flex flex-col justify-between border-r">
        <img src="/assets/clearlogo.png" alt="Clear logo" className="w-28 mb-10" />
        <ul className="space-y-4 text-gray-800 font-medium">
          <li className="text-purple-600 font-bold">Dashboard</li>
          <li>Activity</li>
          <li>Profile</li>
          <li>Security</li>
          <li>Schedules</li>
          <li>Payouts</li>
          <li>Settings</li>
        </ul>
        <button className="mt-10 bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold py-2 px-4 rounded-xl">
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 flex gap-6">
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold text-gray-900">Healthcare</h1>

          {/* Verified Section */}
          <div className="bg-white p-6 rounded-xl shadow flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-purple-100 p-4 rounded-full">
                <span className="text-3xl">🌀</span>
              </div>
              <div>
                <p className="text-gray-500 text-sm">Verified as:</p>
                <p className="text-xl font-semibold text-gray-900">John Smith</p>
              </div>
            </div>
            <div className="space-x-4">
              <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">
                Reverify Identity
              </button>
              <button className="border border-purple-600 text-purple-600 px-4 py-2 rounded-md text-sm font-medium">
                Manage Consent
              </button>
            </div>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <span className="text-purple-600 text-2xl">📅</span>
              <p className="text-gray-800 font-medium">Check In to Appointment</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <span className="text-purple-600 text-2xl">📁</span>
              <p className="text-gray-800 font-medium">Access Medical Records</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <span className="text-purple-600 text-2xl">💊</span>
              <p className="text-gray-800 font-medium">Pick Up Prescription</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow flex items-center gap-4">
              <span className="text-purple-600 text-2xl">🛡️</span>
              <p className="text-gray-800 font-medium">View Insurance Info</p>
            </div>
          </div>

          {/* Consent Management */}
          <div className="bg-white p-6 rounded-xl shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Consent Management</h2>
              <button className="text-sm text-indigo-600 font-medium hover:underline">Edit Preferences →</button>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-800">
              <p>✅ Share Medical Record<br /><span className="text-gray-500">NYC Medical Center</span></p>
              <p>✅ Share Insurance Info<br /><span className="text-gray-500">Mount Sinai Hospital</span></p>
              <p>✅ Share Prescription Data<br /><span className="text-gray-500">TeleHealth Inc.</span></p>
              <p>✅ Share Vaccination Status<br /><span className="text-gray-500">NYC Pharmacy</span></p>
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
              <span className="block font-medium text-indigo-600">🏥 Hospital 1</span>
              <span className="text-gray-500">22 September 2020</span>
            </li>
            <li>
              <span className="block font-medium text-indigo-600">👨‍⚕️ Doctor 1</span>
              <span className="text-gray-500">18 September 2020</span>
            </li>
            <li>
              <span className="block font-medium text-indigo-600">💉 Vaccination Clinic 1</span>
              <span className="text-gray-500">22 September 2020</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
