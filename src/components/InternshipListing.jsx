import React, { useState } from "react";
import internshipData from "../data/internship.json";
import {
  FaMapMarkerAlt,
  FaClock,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const InternshipListing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [stipendFilter, setStipendFilter] = useState("All");

  const handleSearchChange = (e) => setSearchQuery(e.target.value);

  const uniqueLocations = ["All", ...new Set(internshipData.map((i) => i.location))];

  const getStipendValue = (stipendStr) => {
    // Remove non-digits (like ₹, commas, " /month")
    const num = stipendStr.replace(/[^\d]/g, "");
    return parseInt(num, 10);
  };

  const filteredInternships = internshipData.filter((internship) => {
    const query = searchQuery.trim().toLowerCase();
    const matchesSearch =
      internship.title.toLowerCase().includes(query) ||
      internship.company.toLowerCase().includes(query);

    const matchesLocation =
      locationFilter === "All" || internship.location === locationFilter;

    const stipendValue = getStipendValue(internship.stipend);

    const matchesStipend =
      stipendFilter === "All" ||
      (stipendFilter === "Below 5000" && stipendValue < 5000) ||
      (stipendFilter === "5000 - 10000" && stipendValue >= 5000 && stipendValue <= 10000) ||
      (stipendFilter === "Above 10000" && stipendValue > 10000);

    return matchesSearch && matchesLocation && matchesStipend;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white py-10 px-4 md:px-16">
      <h1 className="mt-20 text-4xl font-bold text-center text-gray-800 mb-12">
        <FaBriefcase className="inline mr-3 text-green-600" />
        Internship Listings
      </h1>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100 mb-10">
          <div className="flex items-center gap-3 mb-4 text-green-700 font-semibold text-lg">
            <FaFilter className="text-xl" />
            <span>Filter Internships</span>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-4">
            {/* Search Bar */}
            <div className="relative col-span-1 md:col-span-2">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Search by title or company..."
                className="w-full px-6 py-3 pl-12 text-base rounded-lg shadow-inner border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>

            {/* Location Filter */}
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-green-100 text-green-800 font-medium border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              {uniqueLocations.map((loc, idx) => (
                <option key={idx} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            {/* Stipend Filter */}
            <select
              value={stipendFilter}
              onChange={(e) => setStipendFilter(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-yellow-100 text-yellow-800 font-medium border border-yellow-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="All">All Stipends</option>
              <option value="Below 5000">Below ₹5000</option>
              <option value="5000 - 10000">₹5000 - ₹10000</option>
              <option value="Above 10000">Above ₹10000</option>
            </select>
          </div>
        </div>
      </div>

      {/* Internship Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {filteredInternships.length > 0 ? (
          filteredInternships.map((internship, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-2xl transition duration-300 flex flex-col justify-between border border-gray-100"
            >
              <div>
                <h3 className="text-xl font-bold text-green-800">{internship.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{internship.company}</p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt />
                    <span>{internship.location}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaCalendarAlt />
                    <span>Duration: {internship.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <FaMoneyBillWave className="text-yellow-700" />
                    <span>Stipend: {internship.stipend}</span>
                  </div>

                  <div className="flex items-center p-1 w-fit rounded-xl gap-1 bg-purple-200 text-gray-800 font-medium">
                    <FaClock />
                    <span>{internship.posted}</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6">
                <Link to={`/internship/${internship.id}`}>
                  <button className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition duration-200">
                    View Details
                  </button>
                </Link>
                <Link to={`/internship/${internship.id}`}>
                  <button className="bg-green-600 hover:bg-green-700 text-white font-semibold p-2 md:px-5 md:py-2 rounded-md transition duration-200">
                    Apply Now
                  </button>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-center col-span-3 text-gray-600 mt-8">
            No internships found for the selected filters.
          </p>
        )}
      </div>
    </div>
  );
};

export default InternshipListing;
