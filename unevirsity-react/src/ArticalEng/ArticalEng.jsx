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
    "images/photo_2025-04-18_02-18-20.jpg",
    "images/photo_2025-04-18_02-18-17.jpg",
    "images/photo_2025-04-18_02-18-20 (3).jpg",
    "images/photo_2025-04-18_02-18-20 (2).jpg",
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
              window.location.pathname = "/NameArti";
            }}
          >
            اعضاء الهيئة التعليمية{" "}
          </p>
        </div>
      </div>
      <div className="text">
        <p data-aos="fade-up">
          كلية الهندسة المعمارية في جامعة الرشيد الدولية الخاصة للعلوم
          والتكنولوجيا تهدف إلى إعداد مهندسين ذوي مستوى عالٍ من المهنية،
        </p>
        <hr />
        <p data-aos="fade-up">
          وقادرين على إيجاد حلول هندسية ناجحة وملائمة للبيئة المعمارية والسكنية
          والتجارية تعتمد الكلية نظام الساعات المعتمدة، وتستمر الدراسة فيها لمدة
          خمس سنوات
        </p>
        <hr />
        <p data-aos="fade-up">
          تطمح كلية الهندسة المعمارية في جامعة الرشيد إلى تخريج مهندسين رفيعي
          المستوى والقادرين على بناء مشاريع مهنية عالية المستوى ومحاكاة الواقع
          والحضاراة القديمة
          <br />
        </p>
        <p data-aos="fade-up">
          <br />
          1-الرومانية
          <br /> 2- الفينيقية
          <br /> 3-لأشورية
          <br /> 4-وحتى الفرعونية
          <br />
        </p>
        <button
          onClick={() => {
            window.location.pathname = "/ArticalEngMt";
          }}
        >
          {" "}
          المواد الجامعية
        </button>
      </div>
    </div>
  );
}
