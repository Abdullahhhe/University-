import './College.css'
import { Link } from 'react-router-dom';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default
function College(){
  useEffect(()=>{
                    Aos.init({
                        duration:1000,
                        easing:'ease-in-out',
                        once:true
                    })
                },[]);
    return (
      <div className="College">
        <div className="Pharm pharm">
          <Link className='Link' to="/pharm">Pharm College</Link>
        </div>
        <div className="Enge">
          <Link className='Link' to="/Information">Engenerr College</Link>
        </div>
        <div className="Pharm Desn">
          <Link className='Link' to="/Desntth">Desnte College</Link>
        </div>
        <div className="Pharm Low">
          <Link className='Link' to="/Low">Low College</Link>
        </div>
        <div className="Pharm Besn">
          <Link className='Link' to="/Busnees">Besness College</Link>
        </div>
        <div className="Pharm Phsi">
          <Link className='Link' to="/phisecal">Phsical College</Link>
        </div>
        <div className="Artical Eng">
          <Link className='Link' to="/ArticalEng">Articall Engenering</Link>
        </div>
      </div>
    );
}