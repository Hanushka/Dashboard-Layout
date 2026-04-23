import { Link } from "react-router-dom";

export default function ForgotPassword() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 border border-gray-300">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        
        <h1 className="text-center text-3xl mb-6">Forgot Password</h1>

        {/* Form */}
        <form className="space-y-4">
         
          <div>
            <h2 className="text-lg mb-2">Email address</h2>
            <input
              type="email"
              placeholder="name@example.com"
              className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e66239] border-gray-300"
            />
          </div>

        
          <button
            type="submit"
            className="w-full bg-[#e66239] text-white text-lg py-2 rounded-md font-semibold hover:bg-[#d4522f] transition"
          >
            Send OTP
          </button>
        </form>

        
        <div className="mt-4 text-center">
          <h4 className="text-lg">
            Want to reset your password?{" "}
            <Link
              to="/reset-password"
              className="font-lg text-[#e66239] hover:text-[#d4522f]"
            >
              Reset Password
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
}
