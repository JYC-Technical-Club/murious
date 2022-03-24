import React from 'react'
import './EVENTS.css'
import e1 from './images/e1.jpeg'
import e2 from './images/e2.jpeg'
import e3 from './images/e3.jpeg'
import e4 from './images/e4.jpeg'
import e5 from './images/e5.jpeg'
import e6 from './images/e6.jpeg'
import e7 from './images/e7.jpeg'
import e8 from './images/e8.jpeg'
import e9 from './images/e9.jpeg'
import e10 from './images/e10.jpeg'
import e11 from './images/e11.jpeg'
import e12 from './images/e12.jpeg'
import Card from '../CARDS/CARDS';
import { useEffect } from 'react';
function EVENTS() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='event-page' id='events-murious'>
      <div className="events-head-bg"></div>
    <div className='events-jyc'>
      <div className='events-heading'>
        Events
        <div className='eventsheading-u'/>
      </div>
      <div className='events-container'>
        {/* EVENT 6 */}
        <Card
          img={e1}
          title=""
          date=""
          heading="The Expanse-Hackathon" 
          about="An 18-hour hackathon, a place for students to learn new skills and to work on several problems and find the best solution for it with their developing skills. 
          So get ready to put your brains to work and convert all the technical thoughts into reality."
          link='//forms.gle/SqNMC955wrDke42c8' 
          />

<Card
img ={e5}
title="Project Euclid"
date=""
heading="Project Euclid"
about="An open to all 2-hour long programming challenge to test your ability to code complex problems and compete to solve them in the quickest time possible. Feel free to sink in the comfort zone of any programming language you wish to write your code in.

The amalgamation of your coding skills and a tad bit of luck will help you emerge as the champion.
Put your nerd caps on and let logic lead the way."
link="//forms.gle/48n5UovsaGrEwxWAA"/>
  <Card
 img ={e4}
 title="Web- O -Fiesta "
 date=""
 heading="Web- O -Fiesta "
 about="

 A designing event where a design will be displayed for around 2 minutes and the participants have to recreate the design in the given time period.
 
 Get your magical web spells handy as you dive deep into an immersive experience of web page replica.
 
 Show your Web Development Skill and experience and grab a chance to win prizes."
 link="//forms.gle/nC5PfT4ndwS8Z6vL7"/>
        <Card
          img ={e2}
          title="The Continental"
          date=""
          heading="The Continental"
          about="
            Welcome to The world of Continental, grounds which will give you a 'John Wick' experience.
          Become bounty hunters and complete the given tasks on time, failing that will make you excommunicado.
          'Fortis fortuna adiuvat'          
          Prove your skills and challenge your capabilities, and become the best bounty hunter of The Continental!
          So get ready with your coding skills to emerge victorious.
          
          Note: Basic coding language is required to participate in this event."
          link="//forms.gle/rU6fjjP7v9eTXaXE7" 
        />
        <Card
          img ={e3}
          title="CODE QUEST"
          date=""
          heading="CodeRelay"
          about="

          Everyone knows the relay race but here we are with something unique and an enthralling experience for the students of JUIT.
          
          An Open-to-all event with a baton. 
          A baton of mouse and a pen. It is played by teams of 4 as the relay race. We tell the question to the first member, he solves 1/4th problem, passes on the mouse and the pen to the second member and he continues for the next quarter until the last person solves the problem. 
          
          The first team to solve all problems wins."
          link="//forms.gle/LhJdyGZby2Uh8Wvg9"/>
      
     
       
        <Card
       img ={e6}
       title="Carve The Campus"
       date=""
       heading="Carve The Campus"
       about="

       A Three day event for all the photographers to test your skills and boost them too, competing against the best. 
       Get your camera gear ready to capture our college  campus on move and come out with your best two takes.
       
        It’s an opportunity for all of you to create your own stories which mirror your own expressions.
       
       “The pictures are there, and you just take them."
       link="//forms.gle/MftKYDo11V57yox7A"/>
        <Card

       img ={e7}
       heading="Story-in-Sixty"
       about="

       A Three day event for all the film making enthusiasts to test your skills and boost them too, competing against the best. 
       Get your camera gear ready to capture our college campus on move and come out with a short 60 second video.
       
       It’s an opportunity for all of you to create your own stories which mirror your own expressions.
       
       “Experience the beauty of time-lapse like you’ve never seen it before”.
       "
       link="//forms.gle/bS1QtKUcXXbwBYKt8"/>
        <Card

       img ={e8}
       title="CLICK AND BLINK"
       date=""
       heading="VALORANT tournament"
       about=" 

       Relax, settle down, We've got this. And We're not leaving until we're done out here, yeah?"
       link="//forms.gle/BqPCGvt7dFXviHYe9"/>

<Card

img ={e9}
title="Battlegrounds Mobile India (BGMI) tournament"
date=""
heading="Battlegrounds Mobile India (BGMI) tournament"
about="

Set in a virtual world, where multiple players make strategies to battle it out and be the last man standing on the battleground. 
"
link="//forms.gle/RCLCRAGkgzRPS7GX7"/>

<Card

img ={e10}
title="FIFA tournament"
date=""
heading="FIFA tournament"
about="

Good players win games, Great one break records, Legends change the game. Get ready to choose your favourite teams and players to show off your skills on the football field. Pass, chase, defend, shoot the ball and
score the goal. "
link="//forms.gle/BUeU6MnaogFnvEzU8"/>

<Card

img ={e11}
title="CLICK AND BLINK"
date=""
heading="Mr. Raj Jain ( Alumnus of 2007 batch - ECE branch)"
about=" Founder and CEO of Knoewit (a learning community built on artificial intelligence)"
link=""/>

<Card

img ={e12}
title="CLICK AND BLINK"
date=""
heading="Mr. Ankit Khare (Alumnus 2008 Batch - ECE Branch)"
about="Chief Technical Officer, Shivalik Small Finance Bank"/>

      </div>
    </div>
    </div>

  );
}

export default EVENTS;