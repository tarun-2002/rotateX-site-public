import Navbar from "./Navbar";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function WaitlistPage() {
  // For country code dropdown (simple, static for now)
  const [countryCode, setCountryCode] = useState("+91");
  // Company's coordinates (Delhi, India)
  const companyPosition = [28.494349, 77.199529]; // Example: A1 Spacex Building, Neb Sarai, Delhi

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-4 pt-6 pb-8 max-w-md mx-auto w-full mt-24">
        <h1 className="text-2xl font-semibold text-left w-full mb-1 mt-2">Join Waitlist & Earn<br />early rewards</h1>
        <p className="text-gray-600 text-left w-full mb-6 text-base">Add your contact info and our support team will connect with you as soon as possible.</p>
        <form className="w-full flex flex-col gap-4 mb-6">
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input type="text" placeholder="Full name" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
              <select value={countryCode} onChange={e => setCountryCode(e.target.value)} className="bg-gray-50 px-2 py-2 text-sm outline-none">
                <option value="+91">🇮🇳 +91</option>
                <option value="+1">🇺🇸 +1</option>
                <option value="+44">🇬🇧 +44</option>
              </select>
              <input type="tel" placeholder="+91 6352455051" className="flex-1 px-3 py-2 bg-white text-sm outline-none" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" placeholder="hi@example.com" className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-200" />
          </div>
          <button type="submit" className="bg-blue-600 text-white font-semibold rounded-lg py-3 mt-2 w-full flex items-center justify-center gap-2 hover:bg-blue-700 transition">
            Join Waitlist <span className="ml-1">→</span>
          </button>
        </form>
        {/* Live Map using react-leaflet */}
        <div className="w-full mb-6 rounded-xl overflow-hidden border border-gray-200" style={{ height: 200, minHeight: 120 }}>
          <MapContainer center={companyPosition} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={companyPosition}>
              <Popup>
                A1 Spacex Building, Neb Sarai Near Saket Metro Saket, Delhi 110213
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        {/* Contact info cards */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <span className="material-icons text-blue-600">phone</span>
            <span>+91 7000362336</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <span className="material-icons text-blue-600">email</span>
            <span>help@rotatex.club</span>
          </div>
          <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-4 py-3 text-sm">
            <span className="material-icons text-blue-600">location_on</span>
            <span>A1 Spacex Building, Neb Sarai Near Saket Metro Saket, Delhi 110213</span>
          </div>
        </div>
      </main>
    </div>
  );
} 