import React, { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { LuEye } from "react-icons/lu";
import logo from "../assets/logo.png";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="w-full md:w-1/2 flex flex-col justify-center p-8 md:p-16 lg:p-20">
        <button className="flex flex-row gap-2 items-center text-gray-500 w-[62px] h-[30px] mb-8 md:absolute md:top-10 md:left-10 text-sm">
          <IoIosArrowBack /> Back
        </button>
        <div className="mt-8 md:mt-0 lg:mt-[180px]">
          <h2 className="text-3xl font-bold text-red-600 mb-2">Sign In</h2>
          <p className="mb-6">Enter your email and password to sign in!</p>
        </div>
        <div className="flex flex-row">
          <div className="text-black w-[182px] border border-1px"></div>
          <span>or</span>
          <div className="text-black w-[182px] border border-1px"></div>
        </div>
        <form className="space-y-4">
          <div>
            <label className="block mb-1" htmlFor="email">
              Email*
            </label>
            <input
              className="w-full p-3 border rounded"
              type="email"
              id="email"
              placeholder="mail@sinnnmple.com"
            />
          </div>
          <div className="mb-4 relative">
            <label className="block mb-1" htmlFor="password">
              Password*
            </label>
            <input
              className="w-full p-3 border rounded pr-10"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Min. 8 characters"
            />
            <div
              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <LuEyeOff size={20} /> : <LuEye size={20} />}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Keep me logged in
            </label>
            <a className=" text-lg font-semibold text-red-600" href="#">
              Forget password?
            </a>
          </div>
          <button className="w-full bg-red-600 text-white py-3 rounded mb-4">
            Sign In
          </button>
          <p className="">
            Not registered yet?{" "}
            <a className="text-red-600 text-lg font-semibold" href="#">
              Create an Account
            </a>
          </p>
        </form>
      </div>
      <div className="hidden md:flex md:w-1/2 bg-custom-red items-center justify-center rounded-t-3xl md:rounded-none md:rounded-l-3xl p-8 md:p-0">
        <div className="text-white text-center space-y-60">
          <img src={logo} alt="Logo" className="mx-auto mb-8" />
          <div className="py-5 px-6 border-2 border-white rounded-lg mb-20">
            <p>Learn more about Air Drive on</p>
            <h1 className="text-4xl font-bold">Spark.pl</h1>
          </div>
          <div className="flex justify-around font-semibold mt-36">
            <a href="#" className="hover:underline">
              License
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Blog
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
