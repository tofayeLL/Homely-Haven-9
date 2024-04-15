import home from '../../assets/images/home.png';
import agent from '../../assets/images/agent.png';
import buy from '../../assets/images/buy.png';
import list from '../../assets/images/list.png';
import chooseImage from '../../assets/images/choose.jpg';
// animater css
import 'animate.css';

const ChooseUs = () => {
    return (
        <div>


            <div className="p-5 mx-auto sm:p-10 md:p-2  ">

                <div className="flex flex-col justify-center items-center py-3 space-y-3 my-6">
                    <h1 className="text-3xl font-bold animate__animated animate__backInDown animate__delay-0.5s animate__repeat-1">Why Choose Us</h1>
                    <p className='animate__animated animate__backInDown animate__delay-0.5s animate__repeat-1'>We offer perfect real estate services</p>
                </div>


                <div>
                    <img src={chooseImage} alt="" className="w-full h-60 sm:h-96 rounded-lg object-cover object-center " />
                </div>




                <div className="flex flex-col max-w-6xl mx-auto rounded">

                    <div className="m-4 mx-auto -mt-36 lg:max-w-6xl sm:px-0 sm:mx-12 lg:rounded-md  bg-[#ffffff] shadow-lg ">

                        <div className="space-y-2 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 place-items-center place-content-center ">
                            {/* 1 */}
                            <div className='spacey-2 lg:border-r p-4 '>
                                <div className='my-6 '>
                                    <img src={home} alt="" className='lg:w-[40%] w-[30%]' />

                                </div>
                                <h4 className="font-semibold">Find Your Future Home</h4>
                                <p><small className='lg:text-xs'>we  help you find a new home by offering a smart real state experience</small></p>

                            </div>
                            {/* 2 */}
                            <div className='spacey-2 lg:border-r p-5 '>
                                <div className='my-6 text-center'>
                                    <img src={agent} alt="" className='lg:w-[40%] w-[30%]' />

                                </div>
                                <h4 className="font-semibold">Experienced agents</h4>
                                <p><small>Find an agent who knows your market best</small></p>

                            </div>
                            {/* 3 */}
                            <div className='spacey-2 lg:border-r p-4 '>
                                <div className='my-6 '>
                                    <img src={buy} alt="" className='lg:w-[40%] w-[30%]' />

                                </div>
                                <h4 className="font-semibold">Buy or rent homes</h4>
                                <p><small>Millions of houses and apartments in you favourite cities</small></p>

                            </div>
                            {/* 4 */}
                            <div className='spacey-2 p-4 '>
                                <div className='my-6 text-center'>
                                    <img src={list} alt="" className='lg:w-[40%] w-[30%]' />
                                </div>
                                <h4 className="font-semibold">List your own property</h4>
                                <p><small>Register or sign up now sell or rent your own properties </small></p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChooseUs;