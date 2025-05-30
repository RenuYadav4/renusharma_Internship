import React, { useState } from 'react';
import { FaSearch, FaBriefcase } from 'react-icons/fa';  // Importing search and briefcase icons
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import heroImage from '../assets/heroIntern.png';
import internshipData from '../data/internship.json';
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaMoneyBillWave } from "react-icons/fa";
import { Link } from 'react-router-dom';



const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  // const [isProfileOpen, setIsProfileOpen] = useState(false);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const internships = internshipData;

  // Filter internships based on search query
  const filteredInternships = internships.filter((internship) => {
    const query = searchQuery.trim().toLowerCase();
    return (
      internship.title.toLowerCase().includes(query) ||
      internship.company.toLowerCase().includes(query)
    );
  });
  

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 md:px-16">
        <div className="flex mt-20 flex-col md:flex-row items-center justify-between gap-8">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800 mb-4">
              Kick Start Your Career <span className="text-green-600">with</span> Top Internships
            </h1>
            <p className="text-md md:text-lg text-gray-600 mb-6">
              Join top internships and take the first step toward your dream career. Explore various roles today!
            </p>
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 transform hover:scale-105">
              Find Internships
            </button>
          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 lg:mr-[-200px]">
            <img
              src={heroImage}
              alt="Internship Hero"
              className="w-full h-auto max-w-md mx-auto md:mx-0 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="w-full  py-8 px-4 md:px-16 bg-purple-50 ">
        <div className="max-w-lg mx-auto text-center ">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for Opportunities"
              className="w-full px-6 py-3 pl-12 text-xl rounded-lg shadow-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-300"
            />
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600" />
          </div>
        </div>
      </div>

      {/* Explore Opportunities Section */}
      <div className="w-full py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-6">
            <FaBriefcase className="inline text-green-600 mr-3" />
            Explore Internship Opportunities
          </h2>
          <p className="text-lg text-gray-600 mb-10">
            Discover a variety of exciting internship roles that match your career interests. Apply now and take the first step toward your dream job!
          </p>

          {/* Internships Grid (Two items per row) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 overflow-y-auto max-h-[500px]">
            {filteredInternships.length > 0 ? (
              filteredInternships.map((internship, index) => {
                // Sample posted date logic (mocking 7 days ago)
                const postedDaysAgo = 7;

                return (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-2xl font-semibold text-gray-800">{internship.title}</h3>
                      <p className="text-lg text-gray-600 mt-1">{internship.company}</p>

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
                        <div className="flex items-center p-1 w-27 rounded-xl gap-1 bg-purple-200">
                          <FaClock />
                          <span>{internship.posted}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-end gap-4 mt-6">
                      <Link to={`/internship/${internship.id}`}>
                        <button className="cursor-pointer bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-md transition duration-200">
                          View Details
                        </button>
                      </Link>
                      <Link to={`/internship/${internship.id}`}>
                      <button className="cursor-pointer bg-green-600 hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition duration-200">
                        Apply Now
                      </button>
                      </Link>
                    </div>

                    
                  </div>
                );
              })
            ) : (
              <p className="text-xl text-gray-600">No internships found for this search.</p>
            )}
          </div>

        </div>
      </div>
      {/* <Profile/> */}
      <Testimonials />
      <section id="about-section" >
      <About />
      </section>
      
    </div>
  );
};

export default Landing;
