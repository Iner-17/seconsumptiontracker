import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import "../App.css";
import Navigation from "../components/Navigation";
import { Link } from "react-router-dom";

function Register() {
  return (
    <>
      <div className="bg-gradient-to-t to-[#DEF6FF] from-[#8B9EE8]">
        <div className="container h-[92vh] flex items-center justify-center ">
          <div className="flex flex-col gap-3 login-card bg-white h-auto py-10 px-15 rounded-2xl">
            <h1 className="text-center mb-5 text-2xl font-semibold text-font-black">
              Create an account
            </h1>
            <input
              type="text"
              name=""
              id=""
              placeholder="Email address*"
              className="border-2 border-[#00000018] rounded-lg px-5 py-3 focus:border-cta-blue focus:ring-0 focus:outline-0 text-[1.2em] w-80 emailBtn"
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Password*"
              className="border-2 border-[#00000018] rounded-lg px-5 py-3 focus:border-cta-blue focus:ring-0 focus:outline-0 text-[1.2em] w-80 passBtn"
            />

            <button className="mt-3 bg-cta-blue hover:bg-blue-600 text-[#ffffff] font-semibold rounded-lg px-5 py-3 continueBtn cursor-pointer">
              Register
            </button>

            <p className="mt-3 font-light text-sm text-center">
              Already have an account? &nbsp;
              <Link to="/login" className="text-cta-blue cursor-pointer">
                Login here
              </Link>
            </p>

            <div class="mt-5 flex items-center gap-2">
              <hr class="flex-grow border-t border-gray-300" />
              <span class="text-gray-500 text-sm">OR</span>
              <hr class="flex-grow border-t border-gray-300" />
            </div>

            <button className="mt-5 flex items-center gap-3 text-left bg-trasparent border-2 border-[#00000018] text-font-black font-semibold rounded-lg px-5 py-3 continueBtn cursor-pointer">
              <FcGoogle className="text-2xl" /> Continue with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
