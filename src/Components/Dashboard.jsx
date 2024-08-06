import React from "react";
import ReceiveAudit from "./Receiveauditgraph";
import SendAudit from "./SendAuditgraph";
import TechGraph from "./technologiesradar";
import SkillsGraph from "./skillsgraph";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';import './graphs.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    let token = localStorage.getItem('token')
    // return <Hello/>
    return (<div className="piecharts"> <SendAudit/> <ReceiveAudit/> <SkillsGraph/> <TechGraph/> </div>)
}

export default Dashboard