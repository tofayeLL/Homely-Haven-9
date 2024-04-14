import { useLoaderData, useParams } from "react-router-dom";


const FeaturedDetails = () => {
    const cards = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const card = cards.find(card => card.id === parseInt(idInt));
    console.log(card, idInt )
  
   
    return (
        <div>
           <h1>Featured details</h1>
               
            
        </div>
    );
};

export default FeaturedDetails;