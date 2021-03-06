import React from "react";
import { Link } from "react-router-dom";
import RegisterBg from "../../assets/images/register.jpg";
import { Input } from "../../components";

const Register = () => {
  return (
    <div className="md:grid md:grid-cols-3">
      <div className="md:col-span-2">
        <img src={RegisterBg} className="md:h-screen bg-contain bg-center" />
      </div>
      <div className="flex items-center p-5">
        <div className="w-full">
          <form>
            <h1>Register</h1>
            <div className="h-3" />
            <Input label="Full Name" type="text" placeholder="Full Name" />
            <div className="h-3" />
            <Input label="Email" type="email" placeholder="Email" />
            <div className="h-3" />
            <Input label="Password" type="password" placeholder="Password" />
            <div className="h-3" />
            <button
              type="button"
              className="bg-green-500 text-white font-semibold rounded w-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 py-2 hover:bg-green-600"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-10">
            Sudah punya akun ?{" "}
            <a href="#" className="hover:font-bold	">
              <Link to="/login">Login</Link>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Register;
