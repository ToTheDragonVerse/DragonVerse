import React from 'react'
import { Container } from 'react-bootstrap'
import BreakdownItem from './BreakdownItem'

export default function Breakdown() {
  return (
    <Container>
      <div id="breakdown">
        <div className="breakdown-header">
          <div className="gradient-border">
            <h1 className="text-white font-xxl" style={{textAlign:'center', fontWeight: 'bold'}}>THE BREAKDOWN</h1>
            <span className="circle-1"></span>
            <span className="circle-2"></span>
          </div>
        </div>
        <BreakdownItem 
          title="Innovation"
          detail=" With the Bar Gang, digital art is essential. You will discover different ways to use your collectible in the next phases."
          cls="font-lgr"
        />
        <BreakdownItem 
          title="Collection"
          detail="We encourage our community members to share ideas & suggestions, and be an integral part of the Bar Gang’s growth."
          cls="font-lgr"
        />
        <BreakdownItem 
          title="Unique"
          detail="Once you mint a Bar Gang NFT, you will be the only holder in the future BOTYVerse and beyond."
          cls="font-lgr"
        />
        <BreakdownItem 
          title="Community"
          detail="Be a part of a fun and pioneering community where effective communication & common goals will lead to continued community success."
          cls="font-lgr"
        />
        <BreakdownItem 
          title="Long Term"
          detail="We are not a project but a movement. Don't get involved with the hype, choose consistency and vision. The Bar Gang collection is designed to evolve, grow, and lead."
          cls="font-lgr"
        />
      </div>
    </Container>
  )
}
