import { useState } from 'react';
import './index.css';
import leftArrow from "./icons/left.svg"
import rightArrow from "./icons/right.svg"

// images
import monday from "./imgs/monday.PNG"
import tuesday from "./imgs/tuesday.HEIC"
import wednesday from "./imgs/wednesday.HEIC"
import thursday from "./imgs/thursday.HEIC"
import friday from "./imgs/friday.HEIC"
import saturday from "./imgs/saturday.HEIC"
import sunday from "./imgs/sunday.JPG"


function App() {

  const [position, setPosition] = useState(410);

  function moveRight(){
    setPosition(position + 100)
  }

  function moveLeft(){
    setPosition(position - 100)
  }

  return (
    <div className="App">

        <div className="circle" style={{left: `${position}px`}}></div>

      <div className="centerContainer">
        <h3>MONDAY</h3>
        <h3>TUESDAY</h3>
        <h3>WEDNESDAY</h3>
        <h3>THURSDAY</h3>
        <h3>FRIDAY</h3>
        <h3>SATURDAY</h3>
        <h3>SUNDAY</h3>
      </div>

      <div className="content">
      <img src={leftArrow} alt="left arrow" onClick={moveLeft} className='arrow'/>

        {
          position === 410?
          <div className="contentLayout">
          <img src={monday} alt='monday' className='img1'></img>
          <p>🐭 on ✈️ coming to 🇬🇧 to see 🐹!!!</p></div>: null
        }

        {
          position === 510?
          <div className="contentLayout">
          <img src={tuesday} alt='tuesday' className='img2'></img>
          <p>🐭 & 🐹 go to big 🏰!!!</p></div>: null
        }

        {
          position === 610?
          <div className="contentLayout">
          <img src={wednesday} alt='wednesday' className='img3'></img>
          <p>Enjoying creamy 🍦 together. Applause!!! 👏</p></div>: null
        }

        {
          position === 710?
          <div className='contentLayout'>
          <img src={thursday} alt='thursday' className='img4'></img>
          <p>🐭 to the 🌙~~~</p></div>: null
        }

        {
          position === 810?
          <div className="contentLayout">
          <img src={friday} alt='friday' className='img5'></img>
          <p>Enjoying little talk talk on the 🏔️ together! You chincha wanted to bobo me here I KNOWW~~~ kkkkk</p></div>: null
        }

        {
          position === 910?
          <div className="contentLayout">
          <img src={saturday} alt='saturday' className='img6'></img>
          <p>Little 🍰 time together in park!!!</p></div>: null
        }

        {
          position === 1010?
          <div className="contentLayout">
          <img src={sunday} alt='sunday' className='img7'></img>
          <p>Chincha 고마워 for coming to UK 🐭! Happy to see gugu starting new job tomorrow. Let's go smash it!!! 🐹 and chinshi will be cheering for you. 💋</p></div>: null
        }

        <img src={rightArrow} alt="right arrow" onClick={moveRight} className='arrow'/>

      </div>
    </div>
  );
}

export default App;
