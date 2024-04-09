import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <div className="flex flex-col justify-center items-center h-[100vh] lg:space-y-6 space-y-3">
                <h1 className="lg:text-5xl md:text-3xl text-xl font-semibold">404</h1>
                <h2 className="lg:text-5xl md:text-3xl text-xl font-semibold">Page Not Found</h2>
                <Link to={'/'}><button className="btn bg-green-300">Go Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;