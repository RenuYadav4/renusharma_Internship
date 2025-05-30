import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Landing from "./Pages/Landing"
import Signup from "./Pages/Signup"
import Login from "./Pages/Login"
import Profile from "./components/Profile"
import { useEffect, useRef, useState } from "react"
import InternshipDetails from "./components/InternshipDetails"
import internshipData from './data/internship.json';
import InternshipListing from "./components/InternshipListing"
import Contact from "./components/Contact"



function App() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef();


  const toggleProfileSidebar = () => {
    setIsProfileOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isProfileOpen]);

  return (
    <BrowserRouter>
      <Navbar onProfileClick={toggleProfileSidebar} />
      {/* <Profile isOpen={isProfileOpen} /> */}
      {/* Profile Sidebar Overlay
      <div ref={profileRef}>
        <Profile isOpen={isProfileOpen} />
      </div> */}

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/internship/:id" element={<InternshipDetails internships={internshipData} />} />
        <Route path="/internships" element={<InternshipListing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

       {/* Profile Sidebar Overlay*/}
       <div ref={profileRef}>
        <Profile isOpen={isProfileOpen} />
      </div>
    </BrowserRouter>
   

  )
}

export default App
