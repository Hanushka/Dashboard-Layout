import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border border-gray-300">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-24 h-24 object-contain"
          />
        </div>

      
        <h1 className="text-center text-3xl mb-6">Create your account</h1>

        {/* Form */}
        <form className="space-y-4">
        
          <div>
            <h2 className="text-lg mb-2">Full name</h2>
            <input
              type="text"
              placeholder="Jane Doe"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          <div>
            <h2 className="text-lg mb-2">Email address</h2>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          <div>
            <h2 className="text-lg mb-2">Password</h2>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          <div>
            <h2 className="text-lg mb-2">Confirm password</h2>
            <input
              type="password"
              placeholder="Repeat password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={agree}
              onChange={() => setAgree(!agree)}
              className="h-5 w-5 rounded border-gray-300 text-[#e66239] focus:ring-[#e66239]"
            />
            <h3 className="ml-2 text-md">I agree to the terms and privacy</h3>
          </div>

          
          <button
            type="submit"
            className="w-full bg-[#e66239] text-white text-lg py-3 rounded-md font-semibold hover:bg-[#d4522f] transition"
          >
            Sign Up
          </button>
        </form>

        
        <div className="mt-6 text-center">
          <h4 className="text-xl">
            Already have an account?{" "}
            <Link
              to="/signin"
              className="font-xl text-[#e66239] hover:text-[#d4522f]"
            >
              Sign in
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
