import Navigationbar from "../Layouts/Navbar";
import JoinDiscord from "../Components/JoinDiscord";
import WhitelistForm from "../Components/WhitelistForm";

const Whitelist = () => {
  return (
      <div className="body">
        <Navigationbar />
        <WhitelistForm />
        <JoinDiscord />
      </div>
  )
}

export default Whitelist
