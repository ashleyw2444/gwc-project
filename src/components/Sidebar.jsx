import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const navItems = [
    { label: "Dashboard", icon: "dashboardIcon.png", path: "/" },
    { label: "Activity", icon: "activityIcon.png", path: "/Activity" },
    { label: "Profile", icon: "profileIcon.png", path: "/" },
    { label: "Security", icon: "securityIcon.png", path: "/" },
    { label: "Schedules", icon: "schedulesIcon.png", path: "/" },
    { label: "Payouts", icon: "billingIcon.png", path: "/" },
    { label: "Settings", icon: "settingsIcon.png", path: "/" },
  ];

  return (
    <aside className="w-60 bg-white p-6 flex flex-col justify-between border-r">
      <img
        src="/assets/clearlogo.svg"
        alt="Clear logo"
        className="w-28 mb-10"
      />

      <ul className="space-y-2 text-gray-800 font-medium">
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              to={item.path}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-indigo-50 transition"
            >
              <img
                src={`/assets/icons/${item.icon}`}
                className="w-5 h-5 transition duration-200 hover:brightness-110 hover:saturate-200"
                alt={item.label}
              />
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      <button className="mt-10 bg-gradient-to-r from-purple-700 to-indigo-600 text-white font-bold py-2 px-4 rounded-xl">
        Logout
      </button>
    </aside>
  );
}
