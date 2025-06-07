import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaEnvelope, FaUser } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-r from-purple-100 to-green-100 flex items-center justify-center py-12 px-4">
      <motion.div
        className="bg-white mt-5 shadow-2xl rounded-3xl p-10 max-w-3xl w-full"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        whileHover={{ scale: 1.02, rotate: [0, 1.5, -1.5, 0] }}
      >
        <h2 className="text-4xl font-extrabold text-center text-green-700 mb-4 drop-shadow-md">
          Let’s Talk!
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We'd love to hear from you. Whether it's a suggestion, question, or
          feedback — send it our way!
        </p>

        {submitted && (
          <motion.div
            className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-center mb-6 shadow-sm"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            🎉 Thank you! Your message has been submitted.
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-green-500" />
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-12 py-3 rounded-xl shadow-inner border focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-700 bg-gray-50"
            />
          </div>

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-purple-500" />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-12 py-3 rounded-xl shadow-inner border focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-700 bg-gray-50"
            />
          </div>

          <div className="relative">
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message..."
              required
              value={formData.message}
              onChange={handleChange}
              className="w-full px-6 py-3 rounded-xl shadow-inner border focus:outline-none focus:ring-2 focus:ring-green-400 text-gray-700 bg-gray-50 resize-none"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-green-500 to-purple-500 text-white font-bold py-3 rounded-xl shadow-lg transition duration-300 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FaPaperPlane className="text-white" />
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
