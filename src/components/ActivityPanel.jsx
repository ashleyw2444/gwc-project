import React from "react";

export default function ActivityPanel({ title, items }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow w-full">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <ul className="space-y-2 text-sm">
        {items.map((item, idx) => (
          <li key={idx} className="flex justify-between items-start">
            <div>
              <span className="block font-medium">{item.label}</span>
              <span className="block text-gray-500">{item.address}</span>
            </div>
            <span className="text-gray-400 whitespace-nowrap">{item.timestamp}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
