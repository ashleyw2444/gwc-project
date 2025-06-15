import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';

import { 
  Calendar, 
  FileText, 
  Pill, 
  Shield, 
  CheckCircle, 
  Users,
  Settings,
  ArrowRight,
  Clock,
  AlertCircle,
  Heart,
  Activity,
  User,
  Lock,
  Eye,
  MoreHorizontal
} from 'lucide-react';


const TrackerPanel = ({ title, viewAllLink, items }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <button className="text-purple-600 text-sm font-medium hover:text-purple-700">View All</button>
      </div>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                {item.label.includes('Hospital') && <Heart className="w-5 h-5 text-purple-600" />}
                {item.label.includes('Doctor') && <User className="w-5 h-5 text-purple-600" />}
                {item.label.includes('Vaccination') && <Shield className="w-5 h-5 text-purple-600" />}
              </div>
              <div>
                <p className="font-medium text-gray-900">{item.label.replace(/[🏥👨‍⚕️💉]/g, '').trim()}</p>
                <p className="text-sm text-gray-600">{item.date}</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400" />
          </div>
        ))}
      </div>
    </div>
  );
};


export default function Healthcare() {
  const navigate = useNavigate(); 

  const [selectedConsent, setSelectedConsent] = useState(null);

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

    const handleNavigate = (path) => {
    console.log(`Navigating to: ${path}`);
  };

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 p-10 flex gap-6">
        <div className="flex-1 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Healthcare</h1>
              <p className="text-gray-600 mt-1">Secure access to your medical information and services</p>
            </div>
            <div className="flex items-center space-x-2 bg-green-50 rounded-full px-4 py-2">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-sm font-medium text-green-900">HIPAA Secured</span>
            </div>
          </div>

          {/* Verified Section */}
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="bg-purple-50 p-4 rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
                      <User className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>
                  
                  {/* Green checkmark circle */}
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div>
                  <p className="text-gray-600 text-sm font-medium">Verified Identity</p>
                  <p className="text-2xl font-bold text-gray-900">John Smith</p>
                  <div className="flex items-center space-x-4 mt-2">
                    <div className="flex items-center space-x-1">
                      <Shield className="w-4 h-4 text-purple-600" />
                      <span className="text-sm text-gray-700">Level 3 Verification</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Lock className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-gray-700">HIPAA Compliant</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3">
                <button
                  className="bg-purple-50 text-purple-700 border border-purple-200 px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-100 hover:border-purple-300 transition-all duration-200"
                >
                  Reverify Identity
                </button>
                <button
                  onClick={() => navigate('/medical-release')}
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-purple-700 transition-all duration-200"
                >
                  Manage Consent
                </button>
              </div>
            </div>
          </div>

          {/* Quick Actions Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Check In to Appointment</p>
                  <p className="text-sm text-gray-600">Quick & contactless check-in</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                  <FileText className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Access Medical Records</p>
                  <p className="text-sm text-gray-600">View your health information</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                  <Pill className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">Pick Up Prescription</p>
                  <p className="text-sm text-gray-600">Secure pharmacy verification</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
            </div>

            <div className="group bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-purple-200 transition-all duration-200 cursor-pointer">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                  <Shield className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold">View Insurance Info</p>
                  <p className="text-sm text-gray-600">Manage coverage details</p>
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-600 transition-colors" />
              </div>
            </div>
          </div>

          {/* Consent Management */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            <div className="flex items-center justify-between mb-6">
              <div>  
                <h3 className="text-xl font-semibold text-gray-900 text-left mb-2">Data Sharing Preferences</h3>
                <p className="text-sm text-gray-600">Control how your medical data is shared with healthcare providers</p>
              </div>
              <button 
                className="px-6 py-2 bg-purple-600 text-white rounded-lg font-medium text-sm hover:bg-purple-700 transition-colors"
                onClick={() => navigate('/medical-release')}
              >
                Manage All
              </button>
            </div>
            
            <div className="space-y-4">
              {consentItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-5 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors border border-gray-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-4 h-4 rounded-full ${item.status === 'shared' ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <p className="font-semibold text-gray-900">{item.title}</p>
                        {item.status === 'shared' ? (
                          <Eye className="w-4 h-4 text-green-600" />
                        ) : (
                          <AlertCircle className="w-4 h-4 text-yellow-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{item.provider}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.status === 'shared' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {item.status === 'shared' ? 'Actively Shared' : 'Paused'}
                    </span>
                    <button className="p-2 hover:bg-gray-200 rounded-lg transition-colors">
                      <MoreHorizontal className="w-4 h-4 text-gray-500" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info Section */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <div className="flex items-start -space-x-40">
                <Shield className="w-5 h-5 text-blue-600 mt-0.4 ml-72" />
                <div>
                  <p className="text-sm font-medium text-blue-900">Your Privacy is Protected</p>
                  <p className="text-xs text-blue-700 mt-1">All data sharing complies with HIPAA regulations. You can modify permissions at any time.</p>
                </div>
              </div>
            </div>


            
          </div>
        </div>

        <TrackerPanel title="Your Tracker" viewAllLink="#" items={healthcareItems} />
      </main>
    </div>
  );
}