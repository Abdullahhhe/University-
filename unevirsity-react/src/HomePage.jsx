import "./HomePage.css";
import { Link } from "react-router-dom";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Home() {
   useEffect(()=>{
                Aos.init({
                    duration:1000,
                    easing:'ease-in-out',
                    once:true
                })
            },[]);
  return (
    <div className="Parents">
      <h1 data-aos="fade-up">
        اهلا بكم في <span>الرشيد</span>
      </h1>
      <div className="List">
        <ul>
          <li>
            <Link className="link" to="/Sign-In">
              طريقة التسجيل
            </Link>
          </li>
          <li>
            <Link className="link" to="/Unevirsity">
              الجامعة
            </Link>
          </li>
          <li>
            <Link className="link" to="/LogIn">
              حساب الطالب
            </Link>
          </li>
        </ul>
      </div>
      <div className="images">
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-06-58.jpg"
          alt="sorry"
        />
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-07-02.jpg"
          alt="sorry"
        />
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-07-05.jpg"
          alt="sorry"
        />
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-07-07.jpg"
          alt="sorry"
        />
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-07-10.jpg"
          alt="sorry"
        />
        <img
          data-aos="fade-down"
          src="./images/photo_2025-03-21_23-29-25.jpg"
          alt="sorry"
        />
      </div>
    </div>
  );
}
