"use client";

import React, { useState } from "react";
import {
  Calendar,
  Clock,
  Camera,
  Mail,
  MessageSquare,
  Image as ImageIcon,
  Star,
  Layout,
} from "lucide-react";

export default function ContentCreationForm() {
  const [contentType, setContentType] = useState("social");
  const [formData, setFormData] = useState({
    title: "",
    type: "regular",
    scheduledDate: "",
    scheduledTime: "",
    description: "",
    mediaRequired: false,
    caption: "",
    hashtags: "",
    callToAction: "",
    channelType: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto p-8">
        <div className="mb-8">
          <h1
            className="text-2xl font-serif flex items-center gap-3"
            style={{ color: "#8b8585" }}
          >
            <Star className="w-8 h-8" />
            Content Creation Hub
          </h1>
          <p className="text-sm mt-1" style={{ color: "#8b8585" }}>
            Create and schedule your marketing content
          </p>
        </div>

        {/* Content Type Selection */}
        <div className="flex gap-4 mb-8">
          {[
            { id: "social", icon: MessageSquare, label: "Social Media" },
            { id: "email", icon: Mail, label: "Email" },
            { id: "inGym", icon: Layout, label: "In-Gym Marketing" },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => setContentType(type.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-all ${
                contentType === type.id
                  ? "bg-[#d6c1bf] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <type.icon className="w-5 h-5" />
              {type.label}
            </button>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Info */}
          <div
            className="bg-white rounded-lg border p-6"
            style={{ borderColor: "#cec4c1" }}
          >
            <h2
              className="text-lg font-medium mb-4"
              style={{ color: "#8b8585" }}
            >
              Basic Information
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#737373" }}
                >
                  Title
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border"
                  placeholder="Enter content title"
                  style={{ borderColor: "#cec4c1" }}
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#737373" }}
                >
                  Content Series
                </label>
                <select
                  className="w-full px-4 py-2 rounded-lg border"
                  style={{ borderColor: "#cec4c1" }}
                >
                  <option>12 Days of Gymnastics</option>
                  <option>Thankful Thursday</option>
                  <option>Holiday Special</option>
                  <option>Camp Promotion</option>
                </select>
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div
            className="bg-white rounded-lg border p-6"
            style={{ borderColor: "#cec4c1" }}
          >
            <h2
              className="text-lg font-medium mb-4"
              style={{ color: "#8b8585" }}
            >
              Scheduling
            </h2>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#737373" }}
                >
                  Date
                </label>
                <div className="relative">
                  <Calendar
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "#737373" }}
                  />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-2 rounded-lg border"
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  style={{ color: "#737373" }}
                >
                  Time
                </label>
                <div className="relative">
                  <Clock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                    style={{ color: "#737373" }}
                  />
                  <input
                    type="time"
                    className="w-full pl-12 pr-4 py-2 rounded-lg border"
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            className="bg-white rounded-lg border p-6"
            style={{ borderColor: "#cec4c1" }}
          >
            <h2
              className="text-lg font-medium mb-4"
              style={{ color: "#8b8585" }}
            >
              Content
            </h2>

            {contentType === "social" && (
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Caption
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border"
                    rows={4}
                    placeholder="Write your caption here..."
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Hashtags
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border"
                    placeholder="#gymnastics #fun"
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
              </div>
            )}

            {contentType === "email" && (
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Subject Line
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 rounded-lg border"
                    placeholder="Enter email subject"
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Email Content
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border"
                    rows={6}
                    placeholder="Write your email content here..."
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
              </div>
            )}

            {contentType === "inGym" && (
              <div className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Marketing Material Type
                  </label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border"
                    style={{ borderColor: "#cec4c1" }}
                  >
                    <option>Poster</option>
                    <option>Handout</option>
                    <option>Banner</option>
                    <option>Display</option>
                  </select>
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    style={{ color: "#737373" }}
                  >
                    Content Description
                  </label>
                  <textarea
                    className="w-full px-4 py-2 rounded-lg border"
                    rows={4}
                    placeholder="Describe the marketing material..."
                    style={{ borderColor: "#cec4c1" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Media Upload */}
          <div
            className="bg-white rounded-lg border p-6"
            style={{ borderColor: "#cec4c1" }}
          >
            <h2
              className="text-lg font-medium mb-4"
              style={{ color: "#8b8585" }}
            >
              Media
            </h2>
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center"
              style={{ borderColor: "#d6c1bf" }}
            >
              <Camera
                className="w-12 h-12 mx-auto mb-4"
                style={{ color: "#b48f8f" }}
              />
              <p className="text-sm" style={{ color: "#737373" }}>
                Drag and drop your media here, or click to browse
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-8 py-3 rounded-lg text-white flex items-center gap-2"
              style={{ background: "#b48f8f" }}
            >
              Create Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
