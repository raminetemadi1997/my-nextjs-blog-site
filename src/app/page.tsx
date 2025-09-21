import HomeTemplate from "@/components/templates/HomeTemplate";
import { handlerApi } from "@/services/handlerApi";
import { IHomeResponseApi } from "@/types/Home/Home";

const Home = async () => {
  const data = (await handlerApi("home")) as IHomeResponseApi;

  return <HomeTemplate {...data.data} />;
  
};

export default Home;
