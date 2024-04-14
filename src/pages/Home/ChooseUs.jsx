import home from '../../assets/images/home.png';
import agent from '../../assets/images/agent.png';
import buy from '../../assets/images/buy.png';
import list from '../../assets/images/list.png';
import chooseImage from '../../assets/images/choose.jpg'

const ChooseUs = () => {
    return (
        <div>

            <div className="p-5 mx-auto sm:p-10 md:p-2  ">
                
                <div className="flex flex-col justify-center items-center py-3 space-y-3 my-6">
                    <h1 className="text-3xl font-bold">Why Choose Us</h1>
                    <p>We offer perfect real estate services</p>

                </div>

                <div>

                    <img src={chooseImage} alt="" className="w-full h-60 sm:h-96 rounded-lg object-cover " />

                </div>


                <div className="flex flex-col max-w-6xl mx-auto rounded">


                    <div className="m-4 mx-auto -mt-16 lg:max-w-6xl sm:px-0 sm:mx-12 lg:rounded-md  bg-[#ffffff] shadow-lg ">

                        <div className="space-y-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1   ">
                            {/* 1 */}
                        <div className='spacey-2 lg:border-r p-6'>
                            <div className='my-6 '>
                                <img src={home} alt="" className='w-[40%]' />

                            </div>
                            <h4 className="font-semibold">Find Your Future Home</h4>
                            <p><small>we  help you find a new home by offering a smart real state experience</small></p>

                        </div>
                            {/* 2 */}
                        <div className='spacey-2 lg:border-r p-6'>
                            <div className='my-6 text-center'>
                                <img src={agent} alt="" className='w-[40%]' />

                            </div>
                            <h4 className="font-semibold">Find Your Future Home</h4>
                            <p><small>we  help you find a new home by offering a smart real state experience</small></p>

                        </div>
                            {/* 3 */}
                        <div className='spacey-2 lg:border-r p-6'>
                            <div className='my-6 '>
                                <img src={buy} alt="" className='w-[40%]' />

                            </div>
                            <h4 className="font-semibold">Find Your Future Home</h4>
                            <p><small>we  help you find a new home by offering a smart real state experience</small></p>

                        </div>
                            {/* 4 */}
                        <div className='spacey-2 p-6'>
                            <div className='my-6 text-center'>
                                <img src={list} alt="" className='w-[40%]' />

                            </div>
                            <h4 className="font-semibold">Find Your Future Home</h4>
                            <p><small>we  help you find a new home by offering a smart real state experience</small></p>

                        </div>
                           
                        </div>
                     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;