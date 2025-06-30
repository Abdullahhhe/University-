import './Phisecal.css';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default function Phisecal() {
  useEffect(()=>{
                      Aos.init({
                          duration:1000,
                          easing:'ease-in-out',
                          once:true
                      })
                  },[]);
    const images=[
        "images/photo_2025-04-06_04-22-31.jpg",
        "images/photo_2025-04-06_04-22-32.jpg",
        "images/photo_2025-04-06_04-22-43.jpg"
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
            data-aos="fade-down"
            onClick={() => {
              window.location.pathname = "/name Phesecal";
            }}
          >
            اعضاء الهيئة التعليمية{" "}
          </p>
        </div>
      </div>
      <div className="text" data-aos="zoom-in">
        🚩• كــلــيــة الـعـلـوم الـطـبـيـة - قـسـم الـعـلاج الـفـيـزيـائـــي .
        📌 تم افتتاح كلية العلوم الطبية - قسم العلاج الفيزيائي في العام
        الدراسي2019 2020 ، وهي الكلية الوحيدة على مستوى القطر بين الجامعات
        الخاصة (جامعة الرشيد الخاصة للعلوم والتكنولوجيا). ● أولاً : مـا بـعـد
        الــتــخــرج ❓ ☜ يحصل الخريج على إجازة بالمعالجة الفيزيائية ، تؤهله
        للعمل بصورة مستقلة والحصول على ترخيص لمركز معالجة فيزيائية . ☜ يمكن
        الإكمال في الدكتوراه خارج القطر (كندا _الاردن_استراليا). ☜ يمكن العمل
        بمركز معالجة فيزيائية. ☜ أو في معالجات فيزيائي منزلية . ●ثانياً:
        الـدراســة الـجـامـعـيـة ❓ ✓ مدة الدراسة : أربع سنوات . ✓ تتألف الخطة
        الدراسية من 142 ساعة معتمدة، وذلك وفق خطة دراسية متطورة في المعالجة
        الفيزيائية للمرضى المصابين بأمراض الجهاز الحركي والأمراض العصبية
        والعضلية وكذلك لمعالجة إصابات الرياضيين ومعالجة مبتوري الأطراف ومعالجة
        الأمراض القلبية والتنفسية و معالجة أمراض الأطفال. ✓ مما يسهم قسم العلاج
        الفيزيائي بإعداد كوادر لديها القدرة على التدريب والمعالجة . ✓ الفرع
        يحتوي على مواد مشتركة بين الصيدلة والأسنان مثل
        (التشريح_الفيزيولوجيا_البيولوجيا) ويبدأ بعدها في السنة الثانية المواد
        الاختصاصية بالفرع . ●ثالثا: أسـالـيـب الـمـعـالـجـة الـفـيـزيـائــيــة
        ❓ » يوجد عدة أساليب للمعالجة الفيزيائية تتكامل مع بعضها لإعطاء النتائج
        العلاجية المثلى : 1- العلاج الكهربائي . 2 - العلاج الحراري . 3- العلاج
        اليدوي . 4- العلاج الحركي . 5- العلاج المائي .
        <button
          onClick={() => {
            window.location.pathname = "/PhisecalMt";
          }}
        >
          {" "}
          المواد الجامعية
        </button>
      </div>
    </div>
  );
}
