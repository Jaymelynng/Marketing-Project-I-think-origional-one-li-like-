"use client";

import { useState } from "react";
import {
  Calendar,
  CheckSquare,
  Camera,
  Clock,
  Mail,
  Image,
  Sparkles,
  Star,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Dashboard() {
  const [selectedGym, setSelectedGym] = useState("all");
  const router = useRouter();

  return (
    <div className="flex h-screen" style={{ background: "#ffffff" }}>
            {/* Left Sidebar */}     {" "}
      <div className="w-72 shadow-lg p-4" style={{ background: "#cec4c1" }}>
               {" "}
        <h2
          className="text-xl font-serif mb-6 flex items-center"
          style={{ color: "#737373" }}
        >
                   {" "}
          <Sparkles className="w-6 h-6 mr-2" style={{ color: "#b48f8f" }} />   
                Jayme's Marketing Project ✨        {" "}
        </h2>
               {" "}
        <nav className="space-y-3">
                    {/* Button Using Link Component */}         {" "}
          <Link href="/" passHref>
                       {" "}
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
                            <Star className="w-6 h-6 mr-4" />             {" "}
              <span>Dashboard</span>           {" "}
            </div>
                     {" "}
          </Link>
                   {" "}
          <Link href="/calendar-details" passHref>
                       {" "}
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
                            <Calendar className="w-6 h-6 mr-4" />             {" "}
              <span>Calendar Details</span>           {" "}
            </div>
                     {" "}
          </Link>
                   {" "}
          <Link href="/tasks" passHref>
                       {" "}
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
                            <CheckSquare className="w-6 h-6 mr-4" />           
                <span>Tasks</span>           {" "}
            </div>
                     {" "}
          </Link>
                   {" "}
          <Link href="/media" passHref>
                       {" "}
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
                            <Camera className="w-6 h-6 mr-4" />             {" "}
              <span>Media</span>           {" "}
            </div>
                     {" "}
          </Link>
                   {" "}
          <Link href="/emails" passHref>
                       {" "}
            <div
              className="w-full flex items-center px-5 py-3 text-left rounded-lg hover:shadow-md transition-all hover:bg-gray-100 hover:text-[#b48f8f] cursor-pointer"
              style={{ color: "#737373" }}
            >
                            <Mail className="w-6 h-6 mr-4" />             {" "}
              <span>Emails</span>           {" "}
            </div>
                     {" "}
          </Link>
                 {" "}
        </nav>
             {" "}
      </div>
            {/* Main Content */}     {" "}
      <div className="flex-1 p-10" style={{ background: "#ffffff" }}>
               {" "}
        <header className="flex justify-between items-center mb-10">
                   {" "}
          <div>
                       {" "}
            <h1
              className="text-3xl font-serif flex items-center"
              style={{ color: "#8b8585" }}
            >
                            <Star className="w-8 h-8 mr-3" />             
              Marketing Command Center            {" "}
            </h1>
                       {" "}
            <p className="text-sm ml-10" style={{ color: "#8b8585" }}>
                            Where Marketing Magic Happens ✨            {" "}
            </p>
                     {" "}
          </div>
                   {" "}
          <button
            className="px-8 py-3 rounded-lg flex items-center transition-all shadow-sm hover:shadow-md"
            style={{ background: "#b48f8f", color: "#ffffff" }}
          >
                        Create New ✨          {" "}
          </button>
                 {" "}
        </header>
                {/* Stats Cards */}       {" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                   {" "}
          <div
            className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            style={{ background: "#d6c1bf", borderColor: "#ffffff" }}
          >
                       {" "}
            <div className="flex items-center justify-between">
                           {" "}
              <div>
                               {" "}
                <h3 className="text-sm" style={{ color: "#737373" }}>
                                    Today's Tasks                {" "}
                </h3>
                               {" "}
                <p className="text-3xl font-bold" style={{ color: "#ffffff" }}>
                                    5                {" "}
                </p>
                             {" "}
              </div>
                           {" "}
              <Clock className="w-10 h-10" style={{ color: "#ffffff" }} />     
                   {" "}
            </div>
                     {" "}
          </div>
                   {" "}
          <div
            className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            style={{ background: "#d6c1bf", borderColor: "#ffffff" }}
          >
                       {" "}
            <div className="flex items-center justify-between">
                           {" "}
              <div>
                               {" "}
                <h3 className="text-sm" style={{ color: "#737373" }}>
                                    Pending Posts                {" "}
                </h3>
                               {" "}
                <p className="text-3xl font-bold" style={{ color: "#ffffff" }}>
                                    3                {" "}
                </p>
                             {" "}
              </div>
                           {" "}
              <Camera className="w-10 h-10" style={{ color: "#ffffff" }} />     
                   {" "}
            </div>
                     {" "}
          </div>
                   {" "}
          <div
            className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            style={{ background: "#d6c1bf", borderColor: "#ffffff" }}
          >
                       {" "}
            <div className="flex items-center justify-between">
                           {" "}
              <div>
                               {" "}
                <h3 className="text-sm" style={{ color: "#737373" }}>
                                    Scheduled Emails                {" "}
                </h3>
                               {" "}
                <p className="text-3xl font-bold" style={{ color: "#ffffff" }}>
                                    2                {" "}
                </p>
                             {" "}
              </div>
                           {" "}
              <Mail className="w-10 h-10" style={{ color: "#ffffff" }} />       
                 {" "}
            </div>
                     {" "}
          </div>
                   {" "}
          <div
            className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden"
            style={{ background: "#d6c1bf", borderColor: "#ffffff" }}
          >
                       {" "}
            <div className="flex items-center justify-between">
                           {" "}
              <div>
                               {" "}
                <h3 className="text-sm" style={{ color: "#737373" }}>
                                    Media Items                {" "}
                </h3>
                               {" "}
                <p className="text-3xl font-bold" style={{ color: "#ffffff" }}>
                                    128                {" "}
                </p>
                             {" "}
              </div>
                           {" "}
              <Image className="w-10 h-10" style={{ color: "#ffffff" }} />     
                   {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Upcoming Tasks Section */}       {" "}
        <div
          className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden mb-10"
          style={{ background: "#ffffff", borderColor: "#cec4c1" }}
        >
                   {" "}
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#8b8585" }}>
                        Today's Tasks          {" "}
          </h3>
                   {" "}
          <div className="space-y-4">
                       {" "}
            <div
              className="p-4 rounded-lg border"
              style={{ borderColor: "#cec4c1", background: "#f9f9f9" }}
            >
                           {" "}
              <div className="flex justify-between items-center">
                               {" "}
                <div>
                                   {" "}
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "#8b8585" }}
                  >
                                        Upload Thanksgiving Photos              
                       {" "}
                  </h4>
                                   {" "}
                  <p className="text-sm" style={{ color: "#737373" }}>
                                        9:00 AM                  {" "}
                  </p>
                                 {" "}
                </div>
                               {" "}
                <span className="text-sm font-bold text-red-600">High</span>   
                         {" "}
              </div>
                         {" "}
            </div>
                       {" "}
            <div
              className="p-4 rounded-lg border"
              style={{ borderColor: "#cec4c1", background: "#f9f9f9" }}
            >
                           {" "}
              <div className="flex justify-between items-center">
                               {" "}
                <div>
                                   {" "}
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "#8b8585" }}
                  >
                                        Review Social Media Posts              
                       {" "}
                  </h4>
                                   {" "}
                  <p className="text-sm" style={{ color: "#737373" }}>
                                        11:00 AM                  {" "}
                  </p>
                                 {" "}
                </div>
                               {" "}
                <span className="text-sm font-bold text-yellow-600">
                                    Medium                {" "}
                </span>
                             {" "}
              </div>
                         {" "}
            </div>
                       {" "}
            <div
              className="p-4 rounded-lg border"
              style={{ borderColor: "#cec4c1", background: "#f9f9f9" }}
            >
                           {" "}
              <div className="flex justify-between items-center">
                               {" "}
                <div>
                                   {" "}
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: "#8b8585" }}
                  >
                                        Send Newsletter Draft                  {" "}
                  </h4>
                                   {" "}
                  <p className="text-sm" style={{ color: "#737373" }}>
                                        2:00 PM                  {" "}
                  </p>
                                 {" "}
                </div>
                               {" "}
                <span className="text-sm font-bold text-green-600">Low</span>   
                         {" "}
              </div>
                         {" "}
            </div>
                     {" "}
          </div>
                 {" "}
        </div>
                {/* Calendar Section */}       {" "}
        <div
          className="p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden mb-10"
          style={{ background: "#ffffff", borderColor: "#cec4c1" }}
        >
                   {" "}
          <h3 className="text-2xl font-bold mb-6" style={{ color: "#8b8585" }}>
                        Content Calendar          {" "}
          </h3>
                   {" "}
          <div className="grid grid-cols-6 gap-4">
                       {" "}
            {Array.from({ length: 30 }).map((_, index) => (
              <div
                key={index}
                className={`
                  relative aspect-square border rounded-lg p-4 cursor-pointer
                  ${
                  index === 14 ? "bg-white" : "bg-[#b48f8f] hover:bg-gray-200"
                }
                `}
                style={{ borderColor: "#ffffff" }}
              >
                               {" "}
                <div
                  className="font-medium text-lg"
                  style={{
                    color: index === 14 ? "#b48f8f" : "#ffffff",
                    fontWeight: "bold",
                  }}
                >
                                    {index + 1}               {" "}
                </div>
                               {" "}
                {index === 14 && (
                  <div className="absolute bottom-4 left-4 right-4">
                                       {" "}
                    <div className="bg-purple-100 text-purple-800 text-xs rounded px-2 mb-2 truncate">
                                            Holiday Camp Promo                  
                       {" "}
                    </div>
                                       {" "}
                    <div className="bg-blue-100 text-blue-800 text-xs rounded px-2 truncate">
                                            Winter Program                    {" "}
                    </div>
                                     {" "}
                  </div>
                )}
                             {" "}
              </div>
            ))}
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </div>
  );
}
