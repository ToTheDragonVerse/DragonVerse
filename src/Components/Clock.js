import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import moment from "moment";

export default function Clock({ class_name }) {
  var moment = require("moment-timezone");

  const [launchTime, setLanuchTime] = useState(
    new moment("2021-12-27T17:00:00-05:00")
  );
  const [today, setToday] = useState(new moment());
  const [days, setDays] = useState(launchTime.diff(today, "d"));
  const [hours, setHours] = useState(launchTime.diff(today, "h") % 24);
  const [minutes, setMinutes] = useState(launchTime.diff(today, "m") % 60);
  const [seconds, setSeconds] = useState(launchTime.diff(today, "s") % 60);
  useEffect(() => {
    setTimeout(() => {
      setToday(moment());
      setDays(launchTime.diff(today, "d"));
      setHours(launchTime.diff(today, "h") % 24);
      setMinutes(launchTime.diff(today, "m") % 60);
      setSeconds(launchTime.diff(today, "s") % 60);
    }, 1000);
  }, [today]);

  return (
    <div className={`${class_name}`}>
      {/* <h3 className="mt-3">Mint on December 23rd Presale: 5pm EST
<span className="right-top">th</span></h3> */}
      <ListGroup className="clock-listgroup" horizontal>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{days}</p>
          <p className="unit">DAYS</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{hours}</p>
          <p className="unit">HOURS</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{minutes}</p>
          <p className="unit">MINUTES</p>
        </ListGroup.Item>
        <ListGroup.Item className="clock-listgroupitem">
          <p className="number">{seconds}</p>
          <p className="unit">SECOND</p>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
