import Banner from "./Banner";
import Featured from "./Featured";

const Home = () => {
    return (
        <div>
         
          <div className="py-8">  
          <Banner></Banner>
          </div>
          <div className="my-10">
            <Featured></Featured>
          </div>
          
        </div>
    );
};

export default Home;