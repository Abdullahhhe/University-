import './Unevirsity.css';
import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
export default
function Unevirstity(){
  useEffect(()=>{
                  Aos.init({
                      duration:1000,
                      easing:'ease-in-out',
                      once:true
                  })
              },[]);
    return (
      <div className="Unevirsity">
        <h1>جامعة الرشيد</h1>
        <div className="Text">
          <p data-aos="fade-up">
            <span>جامعة الرشيد الدولية الخاصة للعلوم والتكنولوجيا</span>
            هي مؤسسة تعليمية خاصة تقع في منطقة غباغب بمحافظة درعا، سوريا. تأسست
            الجامعة بموجب المرسوم الجمهوري رقم 263 بتاريخ 17 يونيو 2007، وتتميز
            بتقديم برامج تعليمية معتمدة ومصدقة من قبل وزارة التعليم العالي في
            الجمهورية العربية
          </p>
          <p data-aos="fade-down">
            <span className="sp">: ميزات الجامعة</span>- الحرم الجامعي: يمتد على
            مساحة 257,000 متر مربع، ويضم قاعات تدريس حديثة، مختبرات علمية مجهزة،
            ومدرجات، بالإضافة إلى مكتبة ومرافق رياضية. -
          </p>
          <p data-aos="fade-up">
            <span className="sp">: رؤية الجامعة </span>
            تهدف جامعة الرشيد إلى تقديم تعليم نوعي ومتميز يواكب أحدث العلوم
            والمعارف، مع التركيز على ربط الخريجين باحتياجات سوق العمل وتعزيز
            الانتماء
          </p>
        </div>
        <button
          onClick={() => {
            window.location.pathname = "/Home";
          }}
        >
          رجوع
        </button>
      </div>
    );
}