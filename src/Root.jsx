import Nav from "./pages/Shared/Nav";
import { Outlet } from "react-router-dom";
import { useNavigation } from "react-router-dom";
import { RotatingLines } from 'react-loader-spinner'

const Root = () => {
    const navigation = useNavigation()
    return (
        <div className="container mx-auto lg:px-20 md:px-16 px-2 font-poppins">
            <div className="mb-10 mt-4">
                <Nav></Nav>
            </div>
            {
                navigation.state === "loading" ?
                    <div>
                        <RotatingLines
                            visible={true}
                            height="100"
                            width="200"
                            color="grey"
                            strokeWidth="5"
                            animationDuration="0.75"
                            ariaLabel="rotating-lines-loading"
                            wrapperStyle={{}}
                            wrapperClass=""
                        />

                    </div>
                    :
                    <Outlet></Outlet>
            }



        </div>
    );
};

export default Root;