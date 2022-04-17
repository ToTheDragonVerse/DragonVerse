import { React, useRef } from "react";
import { Container } from "react-bootstrap";
import RoadmapStep from "./RoadmapStep";
export default function Roadmap() {
  return (
    <div id="roadmap">
      <Container>
        <h2
          className="mt-5 text-orange font-xxl"
          style={{ textAlign: "center", fontWeight: "bold" }}
        >
          LAUNCH ROADMAP
        </h2>
        {/* <span className="white-divider"></span> */}
        <p
          className="mt-3 mb-5 text-white txtSize"
          style={{ textAlign: "center" }}
        >
          We are here for the long haul. We have ambitious plans, some of which
          were never before seen in the NFT space so stay tuned. As we value our
          community and its creativity, our roadmap will be updated according to
          your comments and ideas.
        </p>
        {/* <p className="text-white mb-5 txtSize" style={{textAlign: 'center'}}>As we value our community and its creativity, our roadmap will be updated according to your comments and ideas.
</p> */}
        <RoadmapStep
          progress={10}
          percent="10%"
          title="GRAND OPENING"
          detail="Congratulations, you are on the waitlist. Give your name to the host and wait at the bar. Join the community on Discord and get BOTY’d with us."
        />
        <RoadmapStep
          progress={20}
          percent="20%"
          title="SHOTS ON US"
          detail="We will give away Bar Gang collectibles to active BG owners. We will also establish a fund in order to finance the community’s creations, designs, and development."
        />
        <RoadmapStep
          progress={40}
          percent="40%"
          title="TURN UP THE VOLUME"
          detail="Launch of merch store exclusively for Bar Gang NFT owners – show off your Bar Gang apparel to the world on hats, t-shirts, hoodies, posters, and more. Part of the profit will be donated to charity."
        />
        <RoadmapStep
          progress={60}
          percent="60%"
          title="THE GIVE BACK"
          detail="Charity donations to organizations supporting workers in the bar and restaurant industry. We will develop our royalty sharing program."
        />
        <RoadmapStep
          progress={80}
          percent="80%"
          title="MAKE IT RAIN"
          detail="Weekly contests and monthly surprises for Bar Gang holders for a chance to win NFTs, cash prizes, and so much more. We will also create collectible figures and launch collaborations with bars and restaurants. You will have to stay in touch for monthly drops with future benefits."
        />
        <RoadmapStep
          progress={100}
          percent="100%"
          title="GRAND CLOSING"
          detail="Our gang is more like a family. By having a successful launch, we will be able to help other brands launch their own NFT collection in the crypto space. We will create cross community collaborations and partnerships.<br/><br/>          <b>Once 100% sold</b>, our first companion collection launch date will
          be announced. This will be free (+gas) for bar gang holders. We will
          create a program to share royalties and generate passive income
          opportunities.&nbsp;
          <b>
            The longer you hold your collectible, the better the benefits, and
            the bigger the rewards.
          </b>"
        />
      </Container>
    </div>
  );
}
