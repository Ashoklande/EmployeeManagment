import React, { useState } from "react";

const Login = ({onsubmitHandle}) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submithandler = (e) => {
    e.preventDefault();
    onsubmitHandle(email,password)
    setemail("");
    setpassword("");
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submithandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            required
            className="rounded-full text-white outline-none border-2 py-3 px-5 border-emerald-600 text-xl bg-transparent placeholder:text-gray-400"
            type="email"
            placeholder="Enter your mail"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            required
            className="rounded-full text-white outline-none border-2 py-3 px-5 mt-10 border-emerald-600 text-xl bg-transparent placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="rounded-full text-white outline-none border-none bg-red-500 py-3 px-5 mt-5 border-emerald-600 text-xl  placeholder:text-gray-400">
            Login in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
