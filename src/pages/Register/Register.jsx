import { useContext, useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';




const Register = () => {

    const [showPass, setShowPass] = useState(false);
    const [errorRegister, setErrorRegister] = useState('');
    const { createUser } = useContext(AuthContext);





    const handleLogin = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, photo, password);



        // validation for password
        setErrorRegister('');

        if (password.length < 6) {

            return toast.error(" passwords must be 6 characters!");
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z]).+$/.test(password)) {

            return toast.error("password must have small and capital letter!");
        }




        // create user
        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                toast.success("Registration complete Successfully")
                e.target.reset();
            })
            .catch((error) => {
                setErrorRegister(error.message);

            })

    }



    return (
        <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col justify-center  lg:w-[100vh] mx-auto space-y-3 my-6 bg-slate-200 shadow-xl lg:px-0 px-5  lg:py-12 py-6 rounded-md">



                <div className=" mx-auto text-purple-700">
                    <h1 className="text-3xl font-bold mb-6">Please Register Now!!</h1>
                </div>


                <form onSubmit={handleLogin} className="lg:w-[80%] mx-auto space-y-5  rounded-lg ">

                    <div >
                        <p className="mb-1 font-medium">User Name</p>
                        <input type="text" name="name" placeholder="user name" className="input input-bordered w-full" />
                    </div>

                    <div >
                        <p className="mb-1 font-medium">Photo Url</p>
                        <input type="text" name="photo" placeholder="photo url" className="input input-bordered w-full" />
                    </div>

                    <div>
                        <p className="mb-1 font-medium">User Email</p>
                        <input type="email" name="email" placeholder="user email" className="input input-bordered w-full" required />
                    </div>

                    <div >
                        <p className="mb-1 font-medium"> Password</p>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered w-full" required />

                            <span onClick={() => setShowPass(!showPass)} className="absolute top-3 right-3">{showPass ? <FiEyeOff className="text-xl" ></FiEyeOff> : <FiEye className="text-xl"></FiEye>}</span>

                        </div>
                    </div>


                    <div>
                        <button className="btn text-white text-lg w-full bg-purple-600" type="submit">Register</button>
                    </div>




                </form>



                <div className="text-center ">
                    <p className="font-medium mt-6 text-sm">Do not have an account ?   <Link to={'/login'} className="btn-active text-purple-700 btn-link">Login</Link></p>
                </div>

                <div className="text-center">

                    <p className="text-red-500 text-semibold">{errorRegister.replace('auth/', '')}</p>
                </div>


            </div>
        </div>
    );
};

export default Register;