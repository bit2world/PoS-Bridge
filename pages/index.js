import Navbar from "../components/Navbar";
import BridgeTokenCard from "../components/BridgeTokenCard"
import { useAppContext } from "../context/AppContext";
const config = require("../config/config.json");


const Home = () => {
  const appContext = useAppContext();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar account={appContext[0]} />
      <BridgeTokenCard />
    </div>
  )
}

export default Home;