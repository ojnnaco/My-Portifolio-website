import React from 'react'
import './Portfolio.css'
import Chatbox from '../../images/Chatbox.png';
import ShoppingChart from '../../images/ShoppingChart.png';
import Tracker from '../../images/Tracker.png'
import Card from '../Card/Card';


const Portfolio = () => {
  return (
    <div className='P'>
    <div className="P-left">
        {/* Left Side  */}
        <span>My Portfolio</span>
        <p>Recent Projects</p>
        <span>Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br/>Officiis totam amet sunt in maxime ipsam?</span>
    </div>
    <div className="P-right">
        {/* Right Side  */}
    <div style={{left: '20rem'}}>
             <Card
            image = {Chatbox}
            title = {'Whatsapp Chatbox'}
            Details = {"Built using HTML5 and CSS3"}
            />
        </div>

    <div style={{top: '12rem'}}>
             <Card
            image = {ShoppingChart}
            title = {'A Shopping Chart'}
            Details = {"Built HTML5, CSS3 and JavaScript"}
            />
        </div>

    <div style={{top: '20rem', left: '35rem'}}>
             <Card
            image = {Tracker}
            title = {'Tasktracker'}
            Details = {"Built Using ReactJs"}
            />
        </div>
    </div>
    </div>
  )
}

export default Portfolio









// const Portfolio = () => {
//   return (
//     <div className='cards'>
//         <div style={{left: '14rem'}}>
//             <Card
//             image = {Chatbox}
//             title = {'Whatsapp Chatbox'}
//             Details = {"Built using HTML5 and CSS3"}
//             />
//         </div>
//     </div>
//   )
// }

// export default Portfolio