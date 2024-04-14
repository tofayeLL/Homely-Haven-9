import { useEffect, useState } from "react";
import FeaturedCards from "../FeaturedCards/FeaturedCards";


const Featured = () => {
    const [data, setData] = useState([]);
   
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
           
    }, [])
  
 





    return (
        <div>
            
            <div>
                <h1 className="text-3xl font-bold">Featured Properties{data.length}</h1>
                <p>Browse our latest hot offers</p>
            </div>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                {
                    data.map(item =>
                        <FeaturedCards
                        item = {item}
                        key={item.id}></FeaturedCards>)
                }
            </div>

        </div>
    );
};

export default Featured;