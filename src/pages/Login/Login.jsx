import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPass, setShowPass] = useState(false);




    const handleLogin = (e) => {
        e.preventDefault()
        console.log('click login')
    }




    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-4 my-6 bg-slate-200 shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md">



                <div className=" mx-auto text-purple-700">
                    <h1 className="text-3xl font-bold ">Please Login Now!!</h1>
                </div>


                <form onSubmit={handleLogin} className="lg:w-[80%] mx-auto space-y-8  rounded-lg ">

                    <div>
                        <p className="mb-1 font-medium">Your Email:</p>
                        <input type="email" name="email" placeholder="your email" className="input input-bordered w-full" required />
                    </div>

                    <div >
                        <p className="mb-1 font-medium">Your Password:</p>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} name="password" placeholder="your password" className="input input-bordered w-full" required />

                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                        </div>
                    </div>


                    <div>
                        <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Login</button>
                    </div>


                </form>
                <div className="text-center ">
                    <p className="font-semibold mt-6">Dont have an account ? <Link to={'/register'} className="text-red-500">Register</Link></p>
                </div>


            </div>
        </div>
    );
};

export default Login;