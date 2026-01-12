import "./App.css";
import Navbar1 from "./components/navbar1.jsx";
import LandingPage from "./Pages/LandingPage.jsx";
import Footer from "./components/footer.jsx";
import { Route, Routes } from "react-router-dom";
import Signup from "./Pages/Signup.jsx";
import Login from "./Pages/Login.jsx";
import Feed from "./Pages/Feed.jsx";
import Navbar2 from "./components/Navbar2.jsx";

function App() {
  const isLoggedIn = true; // Replace with actual authentication logic
  return (
    <div className="bg-gray-200 w-full h-full box-border">
      {/* Navbar appears on all pages */}

      {isLoggedIn ? <Navbar2 /> : <Navbar1 />}
      {/* Routes - different pages go here */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      {/* Footer appears on all pages */}
      <Footer />
    </div>
  );
}

export default App;
