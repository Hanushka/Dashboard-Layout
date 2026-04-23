import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [remember, setRemember] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/dashboard");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 ">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-md p-10 border-2 border-gray-300">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-20 h-20 object-contain"
          />
        </div>

        <h1 className="text-center text-3xl mb-8">Sign in to your account</h1>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <h2 className="text-lg mb-2">Email address</h2>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          {/* Password and Forgot Password */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg">Password</h2>
              <Link
                to="/forgot-password"
                className="text-md font-medium text-[#e66239]  hover hover:text-[#d4522f] "
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
              className="h-4 w-4 rounded border-gray-300 text-[#e66239] focus:ring-[#e66239]"
            />
            <h3 className="ml-2 text-md">Remember me</h3>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="w-full bg-[#e66239] text-white text-lg py-2 rounded-md font-semibold hover:bg-[#d4522f] transition"
          >
            Sign in
          </button>
        </form>

        <div className="mt-6 text-center">
          <h4 className="text-xl text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-xl text-[#e66239] hover:text-[#d4522f]"
            >
              Sign up
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
