import React, { useState } from 'react';
import { FaSearch, FaBriefcase } from 'react-icons/fa';  // Importing search and briefcase icons
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import heroImage from '../assets/heroIntern.png'

const Landing = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isProfileOpen, setIsProfileOpen] = useState(false);


  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const internships = [
    { title: "Software Engineering Intern", description: "Work with the engineering team on innovative projects.", role: "Software Engineering" },
    { title: "Marketing Intern", description: "Assist the marketing team with content creation and campaigns.", role: "Marketing" },
    { title: "Graphic Design Intern", description: "Design digital and print media for our campaigns.", role: "Design" },
    { title: "Data Science Intern", description: "Assist in data analysis and machine learning model development.", role: "Data Science" },
    { title: "Product Management Intern", description: "Support product managers in market research and product design.", role: "Product Management" },
    { title: "UX/UI Design Intern", description: "Help design user-centric products with a focus on user experience.", role: "Design" },
    { title: "Software Engineering Intern", description: "Work with the engineering team on innovative projects.", role: "Web Developer" },
    { title: "Marketing Intern", description: "Assist the marketing team with content creation and campaigns.", role: "Marketing" },
    { title: "Graphic Design Intern", description: "Design digital and print media for our campaigns.", role: "Design" },
    { title: "Data Science Intern", description: "Assist in data analysis and machine learning model development.", role: "Data Science" },
    { title: "Product Management Intern", description: "Support product managers in market research and product design.", role: "Product Management" },
    { title: "UX/UI Design Intern", description: "Help design user-centric products with a focus on user experience.", role: "Design" },
  ];

  // Filter internships based on search query
  const filteredInternships = internships.filter((internship) =>
    internship.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-4 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
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
              filteredInternships.map((internship, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-2xl font-semibold text-gray-800">{internship.title}</h3>
                  <p className="text-lg text-gray-600 mt-2">{internship.description}</p>
                  <p className="mt-4 text-sm text-gray-500">Role: <span className="font-semibold text-gray-700">{internship.role}</span></p>
                  <button className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md transition duration-300 transform hover:scale-105">
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p className="text-xl text-gray-600">No internships found for this search.</p>
            )}
          </div>
        </div>
      </div>
      {/* <Profile/> */}
      <Testimonials/>
      <About/>
    </div>
  );
};

export default Landing;
