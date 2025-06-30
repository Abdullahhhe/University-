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
    "images/photo_2025-04-18_01-03-43.jpg",
    "images/photo_2025-04-18_01-03-40.jpg",
    "images/photo_2025-04-18_01-03-42.jpg",
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
              window.location.pathname = "/name Information";
            }}
          >
            اعضاء الهيئة التعليمية{" "}
          </p>
        </div>
      </div>
      <div className="text">
        <p data-aos="fade-up">
          عن الكلية : كلية الحقوق في جامعة الرشيد الدولية الخاصة للعلوم
          والتكنولوجيا تهدف إلى تزويد الطلاب بمهارات البحث العلمي، وتشجيعهم على
          إعداد الكتب القانونية والدراسات التي تتناول المستجدات الاجتماعية
          والاقتصادية والسياسية .
        </p>
        <hr />
        <p data-aos="fade-up">
          تعمل الكلية على تخريج محامين وقضاة وضباط وأشخاص قانونين بكفاءة عالية
          نظرا لمشروعها العلمي الكامل والمتكافئ مع العصر الحديث ، والكادر
          التعليمي رفيع المستوى صاحب كفاءات وشهادات عالمية في مجالات القانون
          المتعددة .
        </p>
        <hr />
        <p data-aos="fade-up">
          مدة الدراسة في الكلية أربع سنوات حيث ان النظام التعليمي العتمد هو نظام
          الساعات
          <br />
        </p>
        
        <button
          onClick={() => {
            window.location.pathname = "/InforMt";
          }}
        >
          {" "}
          المواد الجامعية
        </button>
      </div>
    </div>
  );
}
