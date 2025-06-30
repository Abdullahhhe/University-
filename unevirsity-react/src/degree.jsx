import './degree.css';
import { useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default
function Degree(){
  const nave=useNavigate();
    const queryParams=new URLSearchParams(window.location.search);
    const name=queryParams.get("name");
    const level=queryParams.get("level");
    const arr=queryParams.get("arr");
    const newArr=arr.split(",");
    console.log(name , level);
    console.log(newArr);

  const {id}=useParams();
    return (
      <div className="P">
      <div className='inf'>
        Number Unevirsity{id}
        <br/>
        Name :{name}
        <br/>
        Level :{level}
      </div>
        <div className="Seson">
          <button onClick={() => {
            window.location.pathname="/degree sesson";
            nave(
              `/degree sesson?arr=${newArr}`
            );
          }}>This Sesson</button>
        </div>
        <div onClick={() => {
            window.location.pathname = "/degree All";
        }} className="AllDegree">
          <button>All Degree</button>
        </div>
      </div>
    );
}