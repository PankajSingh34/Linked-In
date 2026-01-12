import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComponent from "../components/GoggleLogin.jsx";

const LandingPage = () => {
  return (
    <div>
      {/* Build your landing page here step by step */}
      <div className="w-full min-h-screen bg-white">
        <div className="max-w-6xl mx-auto px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* LEFT SIDE - Content */}
            <div className="space-y-8">
              <h1 className="text-5xl lg:text-6xl font-light text-gray-800 leading-tight">
                Welcome to your Professional Community
              </h1>

              <div className="space-y-4">
                {/* Google Login Component */}
                <GoogleLoginComponent />

                {/* Sign in with email button */}
                <Link to="/login">
                  <button className="w-full border border-blue-600 text-blue-600 rounded-full py-3 px-6 font-medium hover:bg-blue-50 transition-colors">
                    Sign in with email
                  </button>
                </Link>
              </div>

              <p className="text-sm text-gray-600">
                By clicking Continue to join or sign in, you agree to LinkedIn's{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  User Agreement
                </a>
                ,{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
                , and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Cookie Policy
                </a>
                .
              </p>
              <p className="text-gray-700">
                New to LinkedIn?{" "}
                <Link
                  to={"/signup"}
                  href="#"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  Join now
                </Link>
              </p>
            </div>

            {/* RIGHT SIDE - Image */}
            <div className="relative">
              <div className="bg-gradient-to-bg from-orange-400 via-pink-500 to-purple-600 rounded-lg p-8 text-white">
                <div className="text-6xl font-bold mb-4">find your</div>
                <div className="flex items-center">
                  <span className="text-6xl font-bold mr-4">in</span>
                  <div className="w-16 h-16 bg-white rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-2xl">in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
