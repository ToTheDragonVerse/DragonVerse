import React from "react";
import Clock from "./Clock";
import BGImage from "./slider";
import Ladningpage from './Landingpage'
import PricingPlans from "./PricingPlan/index";
import { Modal } from "react-bootstrap";

export default function Dashboard() {

  const class_name = "launch-board";
  return (
    <div className="dashboard">
      {/* <BGImage src={"final-website-cover.jpg"}> */}
      <Ladningpage/>

    
      {/* </BGImage> */}
    </div>
  );
}
