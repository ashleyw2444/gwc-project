import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { 
  Plane, 
  MapPin, 
  Clock, 
  Shield, 
  CheckCircle, 
  AlertCircle, 
  Calendar,
  Users,
  Wifi,
  Coffee,
  Car,
  Hotel,
  CreditCard,
  Bell,
  Settings,
  Plus,
  ArrowRight
} from 'lucide-react';


const TrackerPanel = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Live Flight Tracker</h3>
        <Bell className="w-5 h-5 text-gray-400" />
      </div>
      
      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Plane className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-gray-900">UA 1847</p>
              <p className="text-sm text-gray-600">New York → San Francisco</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-green-600">On Time</p>
            <p className="text-xs text-gray-500">Gate B12</p>
          </div>
        </div>
        
        <div className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <Plane className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-gray-900">DL 2156</p>
              <p className="text-sm text-gray-600">Los Angeles → Chicago</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-orange-600">Delayed 25min</p>
            <p className="text-xs text-gray-500">Gate A8</p>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function Travel() {
  const navigate = useNavigate();

    const [selectedTrip, setSelectedTrip] = useState(0);

  const upcomingTrips = [
    {
      id: 1,
      destination: "San Francisco",
      from: "New York (JFK)",
      date: "Today, June 14",
      time: "2:30 PM - 5:45 PM",
      flight: "UA 1847",
      gate: "B12",
      seat: "14A",
      status: "On Time",
      statusColor: "green",
      boarding: "1:50 PM",
      terminal: "Terminal 4"
    },
    {
      id: 2,
      destination: "London",
      from: "San Francisco (SFO)",
      date: "July 18, 2025",
      time: "10:15 AM - 6:30 AM+1",
      flight: "BA 286",
      gate: "G7",
      seat: "12F",
      status: "Scheduled",
      statusColor: "blue",
      boarding: "9:15 AM",
      terminal: "International Terminal"
    }
  ];

  const quickActions = [
    { icon: Plane, label: "Check Flight Status", color: "blue" },
    { icon: MapPin, label: "Airport Maps", color: "green" },
    { icon: Car, label: "Ground Transport", color: "purple" },
    { icon: Hotel, label: "Hotel Bookings", color: "orange" }
  ];

    const recentActivity = [
    { action: "Identity verified at JFK Terminal 4", time: "2 hours ago", icon: Shield, color: "green" },
    { action: "Boarding pass added to wallet", time: "3 hours ago", icon: Plane, color: "blue" },
    { action: "TSA PreCheck activated", time: "1 day ago", icon: CheckCircle, color: "green" }
  ];



  

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
      <Sidebar />



            <div className="flex-1 overflow-auto">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Travel Dashboard</h1>
              <p className="text-gray-600 mt-1">Manage your trips with secure, seamless identity verification</p>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center space-x-2">
                <Plus className="w-4 h-4" />
                <span>Add Trip</span>
              </button>
            </div>
          </div>
        </div>



        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Current Trip Card */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Plane className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">Next Flight</h2>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/20 rounded-full px-3 py-1">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm font-medium">Identity Ready</span>
                  </div>
                </div>


                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-blue-100 text-sm">From</p>
                    <p className="text-xl font-semibold">{upcomingTrips[0].from}</p>
                    <p className="text-blue-100 text-sm mt-2">Flight {upcomingTrips[0].flight}</p>
                  </div>
                  <div>
                    <p className="text-blue-100 text-sm">To</p>
                    <p className="text-xl font-semibold">{upcomingTrips[0].destination}</p>
                    <p className="text-blue-100 text-sm mt-2">Gate {upcomingTrips[0].gate} • Seat {upcomingTrips[0].seat}</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-blue-500">
                  <div>
                    <p className="text-blue-100 text-sm">Departure</p>
                    <p className="font-semibold">{upcomingTrips[0].date} • {upcomingTrips[0].time.split(' - ')[0]}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-blue-100 text-sm">Boarding</p>
                    <p className="font-semibold">{upcomingTrips[0].boarding}</p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <button
                      key={index}
                      className="flex flex-col items-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all group"
                    >
                      <div className={`w-12 h-12 rounded-lg bg-${action.color}-100 flex items-center justify-center group-hover:bg-${action.color}-200 transition-colors mb-3`}>
                        <action.icon className={`w-6 h-6 text-${action.color}-600`} />
                      </div>
                      <span className="text-sm font-medium text-gray-700 text-center">{action.label}</span>
                    </button>
                  ))}
                </div>
              </div>


{/* Upcoming Trips */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Upcoming Trips</h3>
                  <button className="text-blue-600 text-sm font-medium hover:text-blue-700">View All</button>
                </div>
                
                <div className="space-y-4">
                  {upcomingTrips.map((trip, index) => (
                    <div key={trip.id} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                            <Plane className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">{trip.from} → {trip.destination}</p>
                            <p className="text-sm text-gray-600">{trip.flight} • {trip.date}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                            trip.statusColor === 'green' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                          }`}>
                            {trip.status}
                          </span>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div>
                          <p className="text-gray-500">Time</p>
                          <p className="font-medium text-gray-900">{trip.time}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Gate</p>
                          <p className="font-medium text-gray-900">{trip.gate}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Seat</p>
                          <p className="font-medium text-gray-900">{trip.seat}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center space-x-2 text-green-600">
                          <Shield className="w-4 h-4" />
                          <span className="text-sm font-medium">Identity Verified</span>
                        </div>
                        <button className="flex items-center space-x-1 text-blue-600 text-sm font-medium hover:text-blue-700">
                          <span>View Details</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Content */}
            <div className="space-y-6">
              <TrackerPanel />
              
              {/* Identity Status */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Identity Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-900">TSA PreCheck</span>
                    </div>
                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-900">Global Entry</span>
                    </div>
                    <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded">Active</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <Shield className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-blue-900">CLEAR Plus</span>
                    </div>
                    <span className="text-xs text-blue-700 bg-blue-100 px-2 py-1 rounded">Premium</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-full bg-${activity.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <activity.icon className={`w-4 h-4 text-${activity.color}-600`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{activity.action}</p>
                        <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Airport Services */}
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Airport Services</h3>
                <div className="space-y-3">
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Wifi className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Free WiFi</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Coffee className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Dining & Shops</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                  
                  <button className="w-full flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:border-blue-300 hover:bg-blue-50 transition-colors">
                    <div className="flex items-center space-x-3">
                      <Car className="w-5 h-5 text-gray-600" />
                      <span className="font-medium text-gray-900">Ground Transport</span>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}