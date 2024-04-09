import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    const links = <>
    <li className="font-medium"><NavLink to={'/'}>Home</NavLink></li>
    <li className="font-medium"><NavLink to={'/update'}>Update Profile</NavLink></li>
    <li className="font-medium"><NavLink to={'/faq'}>FAQ ?</NavLink></li>
    </>
    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                           
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl font-bold">HomelyHaven</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-2">
                        {
                            links
                        }
                        
                    </ul>
                </div>
                <div className="navbar-end">
                  <Link to={'/login'}><button className="btn">Login</button></Link>
                </div>
            </div>

        </div>
    );
};

export default Nav;