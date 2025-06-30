import './Story.css';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { Link } from "react-router-dom";
export default
function Story(){
    useEffect(()=>{
              Aos.init({
                  duration:1000,
                  easing:'ease-in-out',
                  once:true
              })
          },[]);
    return (
      <div className="Storys">
        <div className="All">
          <h1 data-aos="zoom-in">Event</h1>
          <p data-aos="fade-down">
            University or College events, which are open to everyone, are listed
            here. If you're thinking about applying for an undergraduate degree
            at Oxford, please also see the information on open days, events and
            visiting for potential undergraduates. Online and part-time courses
            at the University are offered at the Department for Continuing
            Education. Please see the course listing for more information.
          </p>
          <div className="Images">
            <div className="one">
              <img src="images/photo_2025-03-21_20-06-04.jpg" alt="sorry" />
              <h2 data-aos="zoom-in">This is fllowers</h2>
              <p data-aos="flip-left">
                Crack open the world of animals that lay eggs! From platypuses
                to frogs, snakes to echidnas, discover the 'egg-ceptional'
                animals that start life in an egg. This family-friendly event
                will be held at the Oxford University Museum of Natural History
                on Monday and Tuesday 7-8 April. Visitors will be able to get
                hands-on with touchable museum specimens, play games and make a
                craft inspired by the egg-laying animals in the museum.
                Eggceptional Animals is suitable for all ages. Families are
                invited to drop-in. No booking required.
              </p>
            </div>
            <div className="tow">
              <img src="images/photo_2025-03-21_20-06-04.jpg" alt="sorry" />
              <h2 data-aos="zoom-in">This is fllowers</h2>
              <p data-aos="zoom-in">
                Crack open the world of animals that lay eggs! From platypuses
                to frogs, snakes to echidnas, discover the 'egg-ceptional'
                animals that start life in an egg. This family-friendly event
                will be held at the Oxford University Museum of Natural History
                on Monday and Tuesday 7-8 April. Visitors will be able to get
                hands-on with touchable museum specimens, play games and make a
                craft inspired by the egg-laying animals in the museum.
                Eggceptional Animals is suitable for all ages. Families are
                invited to drop-in. No booking required.
              </p>
            </div>
            <div className="three">
              <img src="images/photo_2025-03-21_20-06-04.jpg" alt="sorry" />
              <h2 data-aos="zoom-in">This is fllowers</h2>
              <p data-aos="fade-up">
                Crack open the world of animals that lay eggs! From platypuses
                to frogs, snakes to echidnas, discover the 'egg-ceptional'
                animals that start life in an egg. This family-friendly event
                will be held at the Oxford University Museum of Natural History
                on Monday and Tuesday 7-8 April. Visitors will be able to get
                hands-on with touchable museum specimens, play games and make a
                craft inspired by the egg-laying animals in the museum.
                Eggceptional Animals is suitable for all ages. Families are
                invited to drop-in. No booking required.
              </p>
            </div>
          </div>
        </div>
        <div className="Event">
          <h2>Event</h2>
          <hr />
          <Link>Regular events in the University Year</Link>
          <hr />
          <Link>Regular events in the University Year</Link>
        </div>
      </div>
    );
}