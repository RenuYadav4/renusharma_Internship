import React from 'react';
import { FaStar, FaUserCircle } from 'react-icons/fa';

const Testimonials = () => {
    return (
        <div className="w-full py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-8">
                    What Our Interns Say
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Testimonial 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">Amazing Experience!</h3>
                        </div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Intern 1"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">John Doe</p>
                                <p className="text-sm text-gray-500">Software Engineering Intern</p>
                            </div>
                        </div>
                        <p className="italic text-lg text-gray-600 mb-4">
                            "The internship was a transformative experience. I had the opportunity to work on real-world projects and enhance my technical skills."
                        </p>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">Highly Recommend!</h3>
                        </div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Intern 2"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Jane Smith</p>
                                <p className="text-sm text-gray-500">Marketing Intern</p>
                            </div>
                        </div>
                        <p className="italic text-lg text-gray-600 mb-4">
                            "I gained so much insight into the marketing field, and the mentorship was invaluable. This internship helped me grow both professionally and personally."
                        </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">Highly Recommend!</h3>
                        </div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Intern 2"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Jane Smith</p>
                                <p className="text-sm text-gray-500">Marketing Intern</p>
                            </div>
                        </div>
                        <p className="italic text-lg text-gray-600 mb-4">
                            "I gained so much insight into the marketing field, and the mentorship was invaluable. This internship helped me grow both professionally and personally."
                        </p>
                    </div><div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">Highly Recommend!</h3>
                        </div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Intern 2"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Jane Smith</p>
                                <p className="text-sm text-gray-500">Marketing Intern</p>
                            </div>
                        </div>
                        <p className="italic text-lg text-gray-600 mb-4">
                            "I gained so much insight into the marketing field, and the mentorship was invaluable. This internship helped me grow both professionally and personally."
                        </p>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                        <div className="flex items-center mb-4">
                            <FaStar className="text-yellow-400 mr-2" />
                            <h3 className="text-xl font-semibold text-gray-800">Incredible Learning Opportunity!</h3>
                        </div>
                        <div className="flex items-center mb-4">
                            <img
                                src="https://randomuser.me/api/portraits/men/32.jpg"
                                alt="Intern 3"
                                className="w-12 h-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <p className="font-semibold text-gray-800">Alice Johnson</p>
                                <p className="text-sm text-gray-500">UX/UI Design Intern</p>
                            </div>
                        </div>
                        <p className="italic text-lg text-gray-600 mb-4">
                            "This internship gave me the chance to collaborate on real design projects, and I learned so much about user experience and interface design."
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
