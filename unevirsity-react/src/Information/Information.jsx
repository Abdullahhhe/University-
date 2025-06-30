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
    "images/photo_2025-04-07_02-56-19.jpg",
    "images/photo_2025-04-07_02-56-38.jpg",
    "images/photo_2025-04-07_02-57-29.jpg",
    "images/photo_2025-04-07_02-57-31.jpg",
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
          عن الكلية حرصت الكلية على طرح خطط وبرامج هندسية تحقق أعلى المعايير
          العالمية وتتماشى مع معايير الجودة.
        </p>
        <hr />
        <p data-aos="fade-up">
          كما عملت باستمرار على تطوير هذه الخطط بما يتناسب مع تطورات العصر
          واحتياجات المجتمع المتغيرة.
        </p>
        <hr />
        <p data-aos="fade-up">
          وإيماناً منها بأهمية الدمج والتلازم بين الجانبين العملي والنظري فقد
          سعت الكلية الى توفير مختبرات مزودة بأحدث الأجهزة والتقنيات لتطوير
          المهارات العملية للطلبة,
          <br />
          تعمل الكلية على تخريج مهندسين قادرين على المنافسة في التصميم والإبداع
          في مجالات العمل المختلفة، وترعى الموهوبين والمبدعين والمتفوقين من خلال
          إرسالهم إلى دورات متقدمة داخل سورية وخارجها لتطوير قدراتهم ومساعدتهم
          في الحصول على التخصصات العلمية العليا ,
          <br />
        </p>
        <p data-aos="fade-up">
          الاقسام:
          <br />
          1-الهندسة المعلوماتية
          <br /> 2-هندسة الاتصالات
          <br /> 3-هندسة الميكاترونيكس
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
