import ActivityPanel from "../components/ActivityPanel";
import Sidebar from '../components/Sidebar';

export default function ActivityPage() {
  const financialItems = [
    { label: "🏦 Chase", address: "123 Main St, NY", timestamp: "9:41 AM" },
    { label: "🏦 Bank of America", address: "456 Broadway, NY", timestamp: "Yesterday" },
    { label: "🏦 Wells Fargo", address: "789 Wall St, NY", timestamp: "2 days ago" },
    { label: "🏧 CitiBank ATM", address: "10 Park Ave, NY", timestamp: "May 20, 2025" },
  ];

  const healthcareItems = [
    { label: "🏥 Mount Sinai Hospital", address: "100 Madison Ave, NY", timestamp: "9:15 AM" },
    { label: "👨‍⚕️ Dr. Lee - GP", address: "200 W 57th St, NY", timestamp: "Yesterday" },
    { label: "💉 CVS Vaccination", address: "321 Lexington Ave, NY", timestamp: "2 days ago" },
    { label: "🧪 LabCorp Diagnostic", address: "55 E 34th St, NY", timestamp: "May 21, 2025" },
    { label: "🏥 NYU Langone ER", address: "550 1st Ave, NY", timestamp: "May 18, 2025" },
  ];

  return (
    <div className="flex h-screen font-inter bg-[#f6f8ff]">
          
      <Sidebar />
      
      <main className="flex-1 p-10">
        <div className="p-10 font-inter bg-[#f6f8ff] h-screen">
          <h1 className="text-3xl font-bold mb-6">Your Activity</h1>
          <div className="grid grid-cols-2 gap-6">
            <ActivityPanel title="Financial" items={financialItems} />
            <ActivityPanel title="Healthcare" items={healthcareItems} />
          </div>
        </div>
      </main>
    </div>
  );
}

