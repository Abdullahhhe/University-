import "./SignIn.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default function SignIn() {
  useEffect(()=>{
            Aos.init({
                duration:1000,
                easing:'ease-in-out',
                once:true
            })
        },[])
  const images = [
    "./images/photo_2025-03-21_19-33-44.jpg",
    "./images/photo_2025-03-21_19-28-45.jpg",
    "./images/photo_2025-03-21_20-03-31.jpg",
    "./images/photo_2025-03-21_20-03-38.jpg",
    "./images/photo_2025-03-21_20-06-00.jpg",
    "./images/photo_2025-03-21_20-06-04.jpg",
    "./images/photo_2025-03-21_20-06-07.jpg",
  ];
  let cur = 0;
  function img() {
    const image = document.querySelector(".image");
    image.classList.add("hidden");
    setTimeout(() => {
      cur = (cur + 1) % images.length;
      image.src = images[cur];
      image.classList.remove("hidden");
    }, 1000);
  }
  const timer=setInterval(img, 4000);
  const hand = () => {
    clearInterval(timer);
    console.log("down");
  };
  window.addEventListener("popstate",hand);

  return (
    <div className="Par">
      <img className="image" src={images[cur]} alt="Sorry" />
      <div className="sign">
        <ul>
          <li data-aos="fade-up" className="title">
            :شروط التسجيل
          </li>
          <hr />
          <li data-aos="fade-down" className="a">
            الحصول على شهادة ثانوية
          </li>
          <li data-aos="fade-down" className="a">
            تحقيق المعدل المطلوب للفرع المسجل
          </li>
          <li data-aos="fade-down" className="a">
            التقديم على المفاضلة
          </li>
          <li data-aos="fade-down" className="a">
            الدفع النقدي مبلغ 50,000 ل.س في الحساب 773217 في بنك الشام
          </li>
          <li data-aos="fade-down" className="a">
            تجاوز امتحان القبول
          </li>
          <li data-aos="fade-down" className="une">
            {" "}
            بالعلم نحقق ذاتنا
          </li>
          <button
            onClick={() => {
              window.location.pathname = "/Home";
              clearInterval(img);
            }}
          >
            رجوع
          </button>
        </ul>
      </div>
    </div>
  );
}
