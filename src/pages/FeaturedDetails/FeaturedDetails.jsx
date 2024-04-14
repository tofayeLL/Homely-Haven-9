import { useLoaderData, useParams } from "react-router-dom";


const FeaturedDetails = () => {
    const cards = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === parseInt(idInt));
    const { image, estate_title, price, area, location, segment_name, description, status, facilities } = card;


    return (
        <div>

            <div className="p-5 mx-auto sm:p-10 md:p-16  ">

                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <div className="mb-8">
                        <h1 className="inline-block text-2xl font-semibold sm:text-3xl">{estate_title}</h1>
                        <p>Location:  <span className="opacity-80">{location}</span></p>
                    </div>

                    <div>
                        <img src={image} alt="" className="w-full h-60 sm:h-96 bg-gray-500 rounded-lg" />
                    </div>

                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-violet-300">

                        <div className="space-y-4 divide-y">

                            <div>
                                <span className="font-semibold">segmentName</span>
                                <p> {segment_name}</p>
                            </div>

                            <div className="space-y-2 pt-3">
                                <p><span className="font-medium">Price:</span> {price}</p>
                                <p><span className="font-medium">Area:</span> {area}</p>
                                <p><span className="font-medium">Status:</span> {status}</p>
                                <div>
                                    <p className="font-semibold">Facilities</p>
                                    {
                                        facilities.map((item, index) => <li key={index}>{item}</li>)
                                    }
                                </div>


                            </div>


                            <div className="py-4">
                                <p className="font-semibold">OverView</p>
                                <p>{description}</p>

                            </div>

                        </div>

                        <div className="">
                            <p>Insert the actual text content here</p>
                        </div>

                    </div>


                </div>

            </div>


        </div>
    );
};

export default FeaturedDetails;