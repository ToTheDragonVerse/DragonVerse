import React from "react";
import { Container, Image } from "react-bootstrap";

export default function FuturePlan() {
  return (
    <div id="futureplan">
      <Container>
        <h4 className="text-white" style={{ textAlign: "center" }}>
          {/* <span className="underline"></span> */}
        </h4>
        {/* <p
          className="text-white mb-5 pb-3 txtSize"
          style={{ textAlign: "center" }}
        >
          <b>Once 100% sold</b>, our first companion collection launch date will
          be announced. This will be free (+gas) for bar gang holders. We will
          create a program to share royalties and generate passive income
          opportunities.{" "}
          <b>
            The longer you hold your collectible, the better the benefits, and
            the bigger the rewards.
          </b>
        </p> */}
        <div className="futurePlantxt">
          <h2
            className="mt-5 text-orange font-xxl"
            style={{ textAlign: "center", fontWeight: "bold" }}
          >
            FUTURE PLANS
          </h2>
          <p
            className="mt-3 mb-5 text-white txtSize"
            style={{ textAlign: "center" }}
          >
            Future plans after all roadmap activations happen will be split into
            multiple phases and will include:
          </p>
          <ul className="mb-5 pb-5">
            <li>
              {" "}
              <img src="image/checkmark.png" width="20px" />
              Play to earn daily BOTY Point tokens
            </li>
            <li>
              <img src="image/checkmark.png" width="20px" />
              Bar Gang mobile app dating game
            </li>
            <li>
              {" "}
              <img src="image/checkmark.png" width="20px" />
              Breeding, staking and royalty distributions
            </li>
            <li>
              <img src="image/checkmark.png" width="20px" />
              Co own bars & restaurants on the Metaverse
            </li>
            <li>
              <img src="image/checkmark.png" width="20px" />
              Partner with us to create your own NFT project
            </li>
            <li>
              <img src="image/checkmark.png" width="20px" />
              Collabs with other projects and brands
            </li>
          </ul>
        </div>
        {/* <div className="future-plan-info mb-5 text-white">
          <Image 
            src="image/future-plan-bg.png"
            className="w-100"
          />
          <span className="plan1 Plan">
            Mobile Application Game.
          </span>
          <span className="plan2 Plan">
            Metaverse Development and Integrations.
          </span>
          <span className="plan3 Plan">
            Collabs With Other Projects & Brands.
          </span>
          <span className="plan4 Plan">
            More to come later.
          </span>
          <span className="plan-title text-orange PlanHdng">
            Future Plans
          </span>
          <span className="plan-desc">
            Future plans after all roadmap activations happen will be split into mutiple phases and will include:
          </span>
        </div> */}
      </Container>
    </div>
  );
}
