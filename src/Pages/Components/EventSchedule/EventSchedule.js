import React, { useState } from "react";
import './EventSchedule.css'
import image1 from './Group 7.svg'
import image2 from './Ellipse 5.png'
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faAngleDown} from "@fortawesome/free-solid-svg-icons"

 
function Eventschedule() {
 
  const [isOpen1, setIsOpen1] = useState(false)
 
  const onClickEvent1 = () => {
    setIsOpen1(!isOpen1);
  }
 
  const [isOpen2, setIsOpen2] = useState(false)
 
  const onClickEvent2 = () => {
    setIsOpen2(!isOpen2);
  }

  const [isOpen3, setIsOpen3] = useState(false)
 
  const onClickEvent3 = () => {
    setIsOpen3(!isOpen3);
  }
 
 
 
  return (
 <div>
    <div className="event-schedule" id="event-schedule-murious">
      <Header/>
      <div className="events-schedule-name">
 
        <div className="schedule-1">
          <div className={`schedule-wrapper-1 ${isOpen1 ? 'schedule-wrapper-1-active' : ''} `}>
 
            <div className="schedule-heading">
 
              <div className="schedule-heading-titlebox">
                <div className="date-time">25 <br></br> March</div>
                <div className="schedule-heading-m">Day-1</div>
                <div onClick={onClickEvent1} className="more-options-m">
                    <div className="more-option-show">
                      <FontAwesomeIcon icon={faAngleDown}/>
                    </div>
                    <div className="more-option-hide"></div>
                </div>
              </div>
 
              <div className="list">
                <div className="list-item">
                  05:00PM  -   Inaguration (LT 3)
                </div>
 
                <hr></hr>
 
                <div className="list-item">
                  06:00PM  -   Hackathon Starts (LT 1,2)
                </div>
 
                <hr></hr>
 
                <div className="list-item">
                  07:00PM - 08:00PM  -   Valorant [GS] (CL 3,4)
                </div>

                <hr></hr>

                <div className="list-item">
                  09:00PM - 12:00AM  -   Valorant [GS] (CL 3,4)
                </div>

                <hr></hr>

                <div className="list-item">
                  09:00PM Onwards -   BGMI [3 Matches] (LT 1)
                </div>
 
              </div>
            </div>
          </div>
 
          <div className="schedule-2">
            <div className={`schedule-wrapper-2 ${isOpen2 ? 'schedule-wrapper-2-active' : ''} `}>
 
              <div className="schedule-heading">
                <div className="schedule-heading-titlebox">
                  <div className="date-time">26 <br></br> March</div>
                  <div className="schedule-heading-m">Day-2</div>
                  <div onClick={onClickEvent2} className="more-options-m"><div className="more-option-show"><FontAwesomeIcon icon={faAngleDown}/></div><div className="more-option-hide"></div></div>
                </div>
 
                <div className="list">
                  <div className="list-item">
                    12:00PM   -    Hackathon Ends
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    12:00PM - 01:00PM  -   Talk By Mr. Ankit Khare (LT 3)
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    03:00PM - 06:00PM  -    The Continental (LT 3)
                  </div>

                   <hr></hr>
 
                  <div className="list-item">
                    06:30PM - 08:00PM  -    Web-O-Fiesta (CR 4)
                  </div>

                  <hr></hr>
 
                  <div className="list-item">
                    07:00PM  Onwards  -    FIFA (DK)
                  </div> 

                  <hr></hr>
 
                 <div className="list-item">
                  09:30PM  Onwards  -  Valorant [Finals BO3] (Auditorium)
                 </div>

                 <hr></hr>
 
                <div className="list-item">
                  09:30PM  Onwards  -   BGMI [2 Matches] (LT 1)
                </div> 


                </div>

              </div>
            </div>                  
          </div>


          <div className="schedule-3">
            <div className={`schedule-wrapper-3 ${isOpen3 ? 'schedule-wrapper-3-active' : ''} `}>
 
              <div className="schedule-heading">
                <div className="schedule-heading-titlebox">
                  <div className="date-time">27 <br></br> March</div>
                  <div className="schedule-heading-m">Day-3</div>
                  <div onClick={onClickEvent3} className="more-options-m"><div className="more-option-show"><FontAwesomeIcon icon={faAngleDown}/></div><div className="more-option-hide"></div></div>
                </div>
 
                <div className="list">
                  <div className="list-item">
                    09:00AM - 11:00AM  -   Project Euclid (CR 4)
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    12:00PM - 01:00PM  -   Talk By Mr. Raj (LT 3)
                  </div>
 
                  <hr></hr>
 
                  <div className="list-item">
                    02:00PM - 05:00PM  -    Code Relay (CR 4)
                  </div>

                  <hr></hr>

                  <div className="list-item">
                    06:00PM  Onwards  -    Synchrotron (Auditorium)
                  </div> 


                </div>
                
              </div>
            </div>                  
          </div>

        </div>
      </div>
    </div>

<div className="circle1">
  <img src={image1}/>
  <img src={image1}/>
</div>

<div className="circle2">
  <img src={image2}/>
</div>

 </div>
  )
}
 
 
 
export default Eventschedule


