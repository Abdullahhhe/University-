import "../Phisecal/Phisecal.css";
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Information() {
  useEffect(()=>{
            Aos.init({
                duration:1000,
                easing:'ease-in-out',
                once:true
            })
        },[])
  const images = [
    "images/photo_2025-04-18_01-52-34.jpg",
    "images/photo_2025-04-18_01-54-09.jpg",
    "images/photo_2025-04-18_01-54-09.jpg",
    "images/photo_2025-04-18_01-52-44.jpg",
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
  const timer = setInterval(img, 4000);
  const hand = () => {
    clearInterval(timer);
    console.log("down");
  };
  window.addEventListener("popstate", hand);
  return (
    <div className="Phisecal">
      <div className="ima">
        <img src={images[cur]} className="image" alt="s" />
        <div className="Pa">
          <p
            onClick={() => {
              window.location.pathname = "/NameDes";
            }}
          >
            اعضاء الهيئة التعليمية{" "}
          </p>
        </div>
      </div>
      <div className="text">
        <p data-aos="fade-up">
          كلية طب الأسنان في جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا**
          تسعى لتكون رائدة في خدمة المجتمع والبحث العلمي لطلاب ما قبل التخرج،
        </p>
        <hr />
        <p data-aos="fade-up">
          كما تعمل على تحقيق الاعتمادية العالمية عبر اتباع أفضل معايير الجودة
        </p>
        <hr />
        <p data-aos="fade-up">
          جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا توفر مجموعة متنوعة من
          المرافق والموارد لدعم الطلاب في مسيرتهم الأكاديمية.
          <br />
          تشمل هذه المرافق قاعات تدريس حديثة، مختبرات علمية مجهزة بأحدث
          التقنيات، مكتبة جامعية تحتوي على مصادر علمية متنوعة، ملاعب رياضية،
          ومرافق خدمية لضمان بيئة تعليمية متكاملة
          <br />
        </p>
        <button
          onClick={() => {
            window.location.pathname = "/DesntthMt";
          }}
        >
          {" "}
          المواد الجامعية
        </button>
      </div>
    </div>
  );
}
