import Navigationbar from "../Layouts/Navbar";
import Dashboard from "../Components/Dashboard";
import Roadmap from "../Components/Roadmap";
import Storyline from "../Components/Storyline";
import About from "../Components/About";
import Membership from "../Components/Membership";
import DevelopStages from "../Components/DevelopStages";
// import Roadmap from "./Components/Roadmap_";
import Team from "../Components/Team";
import Faq from "../Components/Faq";
import JoinDiscord from "../Components/JoinDiscord";
import DropCount from "../Components/DropCount";

const Home = () => {
  return (
      <div className="body">
        <Navigationbar />
        <Dashboard />
        {/* <ConnectWallet /> */}
        <About />
        <Storyline />
        <Membership />
        <DevelopStages />
        <Roadmap />
        {/* <About /> */}
        <DropCount />
        {/* <Viproom /> */}
        {/* <Roadmap /> */}
        {/* <FuturePlan />
        <Breakdown /> */}
        <Team />
        <Faq />
        <JoinDiscord />
      </div>
  )
}

export default Home
