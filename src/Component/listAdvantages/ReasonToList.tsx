import { FaHandshakeSimple } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { LuBadgePercent } from "react-icons/lu";
import { IoFlashOutline } from "react-icons/io5";
import { TbHomeSearch } from "react-icons/tb";
import { LuTimer } from "react-icons/lu";
import './resason.css'
const reasons =[{
    icon:<FaHandshakeSimple />, 
    title: '1. Sell your home faster',
    description: 'Staged homes get a contract in halfthe time of un-staged homes.'
},{
    icon: <LuBadgePercent />, 
    title: '2. Improve your ROI',
    description: 'The average staging costs at, or less than, 1–3% of a home’s list price, which generates a home staging ROI of 8–10%.'
},{
    icon: <IoFlashOutline />, 
    title: '3. Early staging pays off',
    description: 'Homes staged prior to listing sold 79% faster than those that staged some time after being listed on the market.'
},{
    icon:<AiOutlineDollar />, 
    title: '4. Make more money',
    description: 'Staged homes tend to sell for more than 6% above list price.'
},{
    icon:<TbHomeSearch />, 
    title: '5. Stand out among listings',
    description: '90% of buyers first search online. Catch their attention with exceptional visual first impressions.'
},{
    icon:<LuTimer />, 
    title: '6. Decrease holding costs',
    description: 'A quicker sell results in less money spent on additional mortgage payments, interest, taxes, insurance'
},]

const ReasonsToStage = () => {
    return (
      <div className="reasons-to-stage-container">
        <h1>6 Reasons To Stage</h1>
        <div className="reasons-to-stage">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-item">
              <div className="reason-icon">{reason.icon}</div>
              <h3 className="reason-title">{reason.title}</h3>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default ReasonsToStage;