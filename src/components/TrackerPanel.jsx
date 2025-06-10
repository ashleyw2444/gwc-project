import React from "react";
import { Link } from "react-router-dom";

export default function TrackerPanel({ title, viewAllLink, items }) {
  return (
    <div className="w-64 bg-white p-6 rounded-xl shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        {viewAllLink && (
          <Link
            to="/activity"
            className="mt-4 inline-block text-sm text-indigo-600 font-medium hover:underline"
            >
            View all →
            </Link>
        )}
      </div>
      <ul className="space-y-4 text-sm">
        {items.map(({ label, date }, index) => (
          <li key={index}>
            <span className="block font-medium text-indigo-600">{label}</span>
            <span className="text-gray-500">{date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
