import { Helmet } from "react-helmet";
import Banner from "./Banner";
import Featured from "./Featured";
import ChooseUs from "./ChooseUs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>

      <div className="lg:py-10">
        <Banner></Banner>
      </div>

      <div className="lg:my-12 md:my-8 my-4">
        <Featured></Featured>
      </div>
      <div>
        <ChooseUs></ChooseUs>
      </div>

    </div>
  );
};

export default Home;