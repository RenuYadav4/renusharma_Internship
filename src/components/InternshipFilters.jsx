import React, { useState, useEffect } from "react";

const InternshipFilters = ({ internships, onFilter }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [selectedWorkType, setSelectedWorkType] = useState("");
  const [minStipend, setMinStipend] = useState("");

  useEffect(() => {
    const filtered = internships.filter((internship) => {
      const query = searchQuery.trim().toLowerCase();

      const matchesSearch =
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query);

      const matchesLocation = selectedLocation
        ? internship.location.toLowerCase() === selectedLocation.toLowerCase()
        : true;

      const matchesDuration = selectedDuration
        ? internship.duration.toLowerCase().includes(selectedDuration.toLowerCase())
        : true;

      const matchesWorkType = selectedWorkType
        ? internship.workType?.toLowerCase() === selectedWorkType.toLowerCase()
        : true;

      const matchesStipend =
        minStipend !== ""
          ? parseInt(internship.stipend.replace(/[^0-9]/g, "")) >= parseInt(minStipend)
          : true;

      return (
        matchesSearch &&
        matchesLocation &&
        matchesDuration &&
        matchesWorkType &&
        matchesStipend
      );
    });

    onFilter(filtered);
  }, [searchQuery, selectedLocation, selectedDuration, selectedWorkType, minStipend, internships]);

  const resetFilters = () => {
    setSearchQuery("");
    setSelectedLocation("");
    setSelectedDuration("");
    setSelectedWorkType("");
    setMinStipend("");
  };

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Search by title or company..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
      />

      <div className="flex flex-wrap gap-4 justify-center">
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>

        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="">Any Duration</option>
          <option value="1 Month">1 Month</option>
          <option value="2 Months">2 Months</option>
          <option value="3 Months">3 Months</option>
        </select>

        <select
          value={selectedWorkType}
          onChange={(e) => setSelectedWorkType(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300"
        >
          <option value="">All Types</option>
          <option value="Remote">Remote</option>
          <option value="In-office">In-office</option>
        </select>

        <input
          type="number"
          placeholder="Min Stipend"
          value={minStipend}
          onChange={(e) => setMinStipend(e.target.value)}
          className="px-4 py-2 rounded-md border border-gray-300"
        />

        <button
          onClick={resetFilters}
          className="text-sm text-red-600 underline"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default InternshipFilters;
