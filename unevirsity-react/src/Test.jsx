import 'aos/dist/aos.css';
import Aos from 'aos';
import { useEffect } from 'react';
export default
function Test(){
    useEffect(()=>{
        Aos.init({
            duration:1000,
            easing:'ease-in-out',
            once:true
        })
    },[])
    return (
      <div>
        <div data-aos="fade-up">
          <h1>one</h1>
        </div>
        <div data-aos="zome-in">
          <h2>tow</h2>
        </div>
        <div data-aos="flip-left">
          <h2>three for</h2>
        </div>
      </div>
    );
}