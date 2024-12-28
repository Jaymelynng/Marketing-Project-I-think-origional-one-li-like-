"use client";

import React, { useState } from "react";
import {
  Calendar,
  CheckSquare,
  Camera,
  Clock,
  Mail,
  Image,
  Sparkles,
  Star,
  ChevronLeft,
  BellDot,
} from "lucide-react";

export default function CalendarDetails() {
  const [selectedDate, setSelectedDate] = useState(15);

  const generateCalendarDays = () => {
    return Array.from({ length: 30 }, (_, i) => ({
      day: i + 1,
      content:
        i + 1 === 15
          ? [
              { type: "Holiday", title: "Holiday Special Promotion" },
              { type: "Winter", title: "Winter Program" },
            ]
          : [],
    }));
  };

  return (
    <div className="flex h-screen" style={{ background: "#ffffff" }}>
      {/* Left Sidebar */}
      <div className="w-72 shadow-lg p-4" style={{ background: "#cec4c1" }}>
        <h2
          className="text-xl font-serif mb-6 flex items-center"
          style={{ color: "#737373" }}
        >
          <Sparkles className="w-6 h-6 mr-2" style={{ color: "#b48f8f" }} />
          Jayme's Marketing Project ✨
        </h2>
        <nav className="space-y-3">
          <a href="/" className="block w-full">
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
              <Star className="w-6 h-6 mr-4" />
              <span>Dashboard</span>
            </div>
          </a>
          <a href="/calendar-details" className="block w-full">
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg bg-gray-100"
              style={{ color: "#b48f8f" }}
            >
              <Calendar className="w-6 h-6 mr-4" />
              <span>Calendar Details</span>
            </div>
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full">
          {/* Calendar Area */}
          <div className="flex-1 p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <ChevronLeft className="w-6 h-6" style={{ color: "#737373" }} />
                <h1 className="text-xl font-medium">
                  Calendar with Tasks and Content Integration
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <BellDot className="w-6 h-6" style={{ color: "#737373" }} />
                <span className="text-lg">November 15, 2024</span>
              </div>
            </div>

            {/* Calendar Title and Actions */}
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-xl font-medium">Marketing Calendar</h2>
              <div className="flex gap-4">
                <button className="px-6 py-2 rounded-lg bg-purple-500 text-white flex items-center gap-2">
                  + Add Task
                </button>
                <button className="px-6 py-2 rounded-lg bg-blue-500 text-white flex items-center gap-2">
                  + Add Content
                </button>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-6 gap-4">
              {generateCalendarDays().map(({ day, content }) => (
                <div
                  key={day}
                  className={`aspect-square rounded-lg p-4 cursor-pointer ${
                    day === selectedDate ? "bg-white shadow-lg" : "bg-[#d6c1bf]"
                  }`}
                  onClick={() => setSelectedDate(day)}
                >
                  <span
                    className={`text-lg font-medium ${
                      day === selectedDate ? "text-[#b48f8f]" : "text-white"
                    }`}
                  >
                    {day}
                  </span>
                  {content.map((item, i) => (
                    <div
                      key={i}
                      className={`mt-2 text-xs px-2 py-1 rounded truncate ${
                        item.type === "Holiday"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {item.title}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Task Details */}
          <div className="w-96 border-l p-8">
            <div className="mb-8">
              <h3 className="text-red-500 font-medium mb-4">Required Tasks</h3>
              <div className="mb-6">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium">
                    Share Thanksgiving Camp Photos
                  </h4>
                  <span className="text-sm">Due 10:00 AM</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Upload photos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Select top 3</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Add overlays</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input type="checkbox" className="form-checkbox" />
                    <span>Schedule posts</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-blue-500 font-medium mb-4">Content</h3>
              <div>
                <h4 className="font-medium">Holiday Special Promotion</h4>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                  <Clock className="w-4 h-4" />
                  <span>2:00 PM</span>
                </div>
                <a href="#" className="text-blue-500 text-sm mt-2 block">
                  View in iClass
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
