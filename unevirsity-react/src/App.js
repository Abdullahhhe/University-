import "aos/dist/aos.css";
import Aos from "aos";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
/*Home */
import Home from "./HomePage.jsx";
import Sign from "./SignIn.jsx";
import Unevirsity from "./Unevirsity.jsx";
import Login from "./LogIn.jsx";
import Degree from "./degree.jsx";
import DegSes from "./DegSes.jsx";
import DegAll from "./DegAll.jsx";
/*End Home */import Info from "./Info.jsx";
import College from "./College.jsx";
/*Pharm */
import Pharm from "./Pharm/Pharm.jsx";
import PharmMt from "./Pharm/PharmMt.jsx";
import NamePharm from "./Pharm/NamePhar.jsx";
/*End Pharm */
/*Phisecal */
import Phisecal from "./Phisecal/Phisecal.jsx";
import NamePhes from "./Phisecal/NamePhes.jsx";
import PhisecalMt from "./Phisecal/PhisecalMt.jsx";
/*End Phisecal */
/*Information */
import Information from "./Information/Information.jsx";
import NameInfo from "./Information/NameInfo.jsx";
import InforMt from "./Information/InforMt.jsx";
/*End Information */
import Story from "./Story.jsx";
/*Low */
import Low from "./Low/Low.jsx";
import LowMt from "./Low/LowMt.jsx";
import NameLow from "./Low/NameLow.jsx";
/*End Low */
/*Busnees */
import Busnees from "./Busnees/Busnees.jsx"
import BusneesMt from "./Busnees/BusneesMt.jsx"
import NameBusnees from "./Busnees/NameBusn.jsx"
/*End Busnees */
/*Desntth */
import Desntth from "./Desntth/Desntth.jsx";
import DesntthMt from "./Desntth/DesntthMt.jsx";
import NameDes from "./Desntth/NameDes.jsx";
/*End Desntth */
/*Archu */
import ArticalEng from "./ArticalEng/ArticalEng.jsx";
import ArticalEngMt from "./ArticalEng/ArticalEngMt.jsx";
import NameArti from "./ArticalEng/NameArti.jsx";
/*End Archu */
function App() {
  useEffect(()=>{
          Aos.init({
              duration:1000,
              easing:'ease-in-out',
              once:true
          })
      },[])
  return (
    <div className="App">
      <Header />
      <hr />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Story" element={<Story />} />
          <Route path="/Sign-In" element={<Sign />} />
          <Route path="/Unevirsity" element={<Unevirsity />} />
          <Route path="/LogIn" element={<Login />} />
          <Route path="/:id" element={<Degree />} />
          <Route path="/degree sesson" element={<DegSes />} />
          <Route path="/degree All" element={<DegAll />} />
          <Route path="/College" element={<College />} />
          <Route path="/pharm" element={<Pharm />} />
          <Route path="/phisecal" element={<Phisecal />} />
          <Route path="/name Phesecal" element={<NamePhes />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/name Information" element={<NameInfo />} />
          <Route path="/InforMt" element={<InforMt />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/PhisecalMt" element={<PhisecalMt />} />
          <Route path="/PharmMt" element={<PharmMt />} />
          <Route path="/NamePharm" element={<NamePharm />} />
          <Route path="/Low" element={<Low />} />
          <Route path="/LowMt" element={<LowMt />} />
          <Route path="/NameLow" element={<NameLow />} />
          <Route path="/Busnees" element={<Busnees />} />
          <Route path="/BusneesMt" element={<BusneesMt />} />
          <Route path="/NameBusnees" element={<NameBusnees />} />          
          <Route path="/Desntth" element={<Desntth />} />          
          <Route path="/DesntthMt" element={<DesntthMt />} />          
          <Route path="/NameDes" element={<NameDes />} />          
          <Route path="/ArticalEng" element={<ArticalEng />} />          
          <Route path="/ArticalEngMt" element={<ArticalEngMt />} />          
          <Route path="/NameArti" element={<NameArti />} />          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
