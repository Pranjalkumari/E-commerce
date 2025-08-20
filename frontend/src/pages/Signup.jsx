import { useState } from "react";
import useSignup from "../hooks/useSignup";
import { Link } from "react-router-dom";

const Login = () => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const {loadingSignup,signup} = useSignup()

  const onSubmitHandler = async(e)=>{
    e.preventDefault();

    
      signup(name,email,password);
      setName("");
      setEmail("");
      setPassword("");
  }

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">Sign Up</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
            <Link to="/login">
          <p
            className="cursor-pointer"
          >
            Login Here
          </p>
          </Link>
        
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
      {loadingSignup ? <span>Loading...</span>:<span>SignUp</span>}
      </button>
    </form>
  );
};

export default Login;
