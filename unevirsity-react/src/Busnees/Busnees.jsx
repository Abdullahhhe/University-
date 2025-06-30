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
    "/images/photo_2025-04-18_01-34-12.jpg",
    "images/photo_2025-04-18_01-34-12 (2).jpg",
    "images/photo_2025-04-18_01-34-10.jpg",
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
              window.location.pathname = "/NameBusnees";
            }}
          >
            اعضاء الهيئة التعليمية{" "}
          </p>
        </div>
      </div>
      <div className="text">
        <p data-aos="fade-up">
          كلية علوم الإدارة في جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا
          تهدف إلى تأهيل كوادر إدارية قادرة على القيادة والمساهمة في قطاع
          الإدارة والأعمال محليًا ودوليًا،
        </p>
        <hr />
        <p data-aos="fade-up">
          وفق المعايير العصرية. تسعى الكلية إلى التعاون مع جامعات عالمية لتطوير
          برامج دراسية تلبي المتطلبات الحديثة
        </p>
        <hr />
        <p data-aos="fade-up">
          كما تساهم في قطاع الأعمال السوري والعربي والدولي من خلال اتباع أفضل
          معايير الجودة في التعليم والأبحاث.
          <br />
        </p>
        <button
          onClick={() => {
            window.location.pathname = "/BusneesMt";
          }}
        >
          {" "}
          المواد الجامعية
        </button>
      </div>
    </div>
  );
}
