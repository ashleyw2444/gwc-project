import Sidebar from '../components/Sidebar';

export default function MedicalReleaseForm() {
  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />

      <main className="flex-1 p-10 overflow-auto">
        <div className="max-w-3xl mx-auto space-y-8">
          {/* Title and description */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Medical Release Form</h1>
            <p className="mt-4 text-gray-700 text-lg">
              I, John Doe, authorize CLEAR to release confidential information about me. You may release a copy of my medical records, or summary or narrative of my protected health information to Family Medical Center.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-6 bg-white p-8 rounded-xl shadow">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="firstName">
                Patient First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="Enter first name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="lastName">
                Patient Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Enter last name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="signature">
                Patient Signature
              </label>
              <textarea
                id="signature"
                placeholder="Type full name as signature"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-2 rounded-md font-medium hover:bg-purple-700 transition"
            >
              Submit Form
            </button>
          </form>
        </div>
      </main>
    </div>
  );
}
