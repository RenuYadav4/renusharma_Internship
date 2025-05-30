import React from "react";
import { useParams } from "react-router-dom";
import {
    FaMapMarkerAlt,
    FaClock,
    FaCalendarAlt,
    FaMoneyBillWave,
    FaHeart,
    FaShareAlt,
    FaExternalLinkAlt,
} from "react-icons/fa";

const InternshipDetails = ({ internships }) => {
    const { id } = useParams();
    const internship = internships.find((item) => item.id.toString() === id);

    if (!internship) {
        return <div className="p-6 text-xl text-red-600">Internship not found.</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-12">
            {/* Top Section - Overview */}
            <div className="bg-white mt-30 p-6 rounded-lg shadow-md">
                <div className="flex justify-between items-start">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">{internship.title}</h1>
                        <p className="text-xl text-gray-600 mt-1">{internship.company}</p>
                        <div className="mt-4 space-y-2 text-sm text-gray-700">
                            <div className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                <span>{internship.location}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaClock />
                                <span>Posted {internship.postedDaysAgo} days ago</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaCalendarAlt />
                                <span>Duration: {internship.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaMoneyBillWave className="text-yellow-600" />
                                <span>Stipend: {internship.stipend}</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 text-xl text-gray-600">
                        <button className="hover:text-red-500 transition">
                            <FaHeart />
                        </button>
                        <button className="hover:text-blue-500 transition">
                            <FaShareAlt />
                        </button>
                    </div>
                </div>
            </div>

            {/* About Company */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-2">About the Company</h2>
                <p className="text-gray-700 mb-4">{internship.aboutCompany}</p>
                <a
                    href={internship.companyWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:underline"
                >
                    Visit Company Website <FaExternalLinkAlt className="ml-2" />
                </a>
            </div>

            {/* Internship Description */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">Internship Details</h2>
                <div className="space-y-4 text-gray-700">
                    <div>
                        <h3 className="font-semibold">Description:</h3>
                        <p>{internship.description}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">Work You Will Do:</h3>
                        <p>{internship.work}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold">More Info:</h3>
                        <p>{internship.more}</p>
                    </div>
                </div>
            </div>

            {/* Skills Required */}
            <div className="bg-white p-6 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4">Skills Required</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    {internship.skills.map((skill, index) => (
                        <li key={index} className="ml-4">{skill}</li>
                    ))}
                </ul>
            </div>
            <button className="bg-green-600 cursor-pointer hover:bg-green-700 text-white font-semibold px-5 py-2 rounded-md transition duration-200">
                Continue Applying
            </button>
        </div>
    );
};

export default InternshipDetails;
