import React, {useState} from 'react'
import StrokeProgressRing from './StrokeProgressRing'
import { useRef } from 'react';
import { CircularProgressbar, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import RadialSeparators from "./RadialSeparators";
import ChangingProgressProvider from "./ChangingProgressProvider";

// Radial separators

export default function RoadmapStep(props) {
  const [progress, setProgress] = useState(props.progress);
  const [percent, setPercent] = useState(props.percent);
  const [title, setTitle] = useState(props.title);
  const [detail, setDetail] = useState(props.detail);
  const animation_value = [0, progress]


  return (
    <div className="mt-1 mb-5 d-flex align-items-center justify-content-left" >
       <ChangingProgressProvider values={ animation_value }>
        {progress => (
          <CircularProgressbar value={progress} text={`${progress}%`} />
        )}
      </ChangingProgressProvider>
      
      {/* <CircularProgressbar value={progress} text={`${progress}%`} />; */}
      {/* <StrokeProgressRing radius={100} stroke={10} progress={progress} text={percent}/> */}
      <div className = "roadmap-text">
        <h4 className="text-white font-xl">{title}</h4>
        <span className="left-align-divider"></span>
        <p className="text-white font-lg" dangerouslySetInnerHTML={{__html: detail}}></p>
      </div>
    </div>
  )

}
