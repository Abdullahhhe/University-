import "./LogIn.css";
import { useNavigate } from "react-router-dom";
let num = 0;
let pass = "";
export default function LogIn() {
  const nave=useNavigate();
  let studen = [
    {
      id: "201020077",
      name: "Abdullah",
      Level: "5",
      passowrd: "0808",
      arr: ["since : 100   A+", "math : 70    B-", "phesical : 80  B"],
    },
    {
      id: "201020078",
      name: "Amer",
      Level: "2",
      passowrd: "1234",
      arr: ["since : 50   A+", "math : 40    B-", "phesical : 30  B"],
    },
    {
      id: "201020079",
      name: "Hamza",
      Level: "3",
      passowrd: "4321",
      arr: ["since : 10   A+", "math : 20    B-", "phesical : 30  B"],
    },
    {
      id: "201020076",
      name: "Ayssar",
      Level: "1",
      passowrd: "0000",
      arr: ["since : 0   A+", "math : 15    B-", "phesical : 25  B"],
    },
  ];
  function on() {
    for (let i = 0; i < studen.length; i++) {
      if (num === studen[i].id && pass === studen[i].passowrd) {
        nave(`/${studen[i].id}?name=${studen[i].name}&level=${studen[i].Level}&arr=${studen[i].arr}`);
        window.location.pathname = `/:${studen[i].id}`;
        console.log(studen[i]);
      }
    }
    if (
      num !== studen[studen.length - 1].id ||
      pass === studen[studen.length - 1].passowrd
    ) {
      alert("the number is false");
    }
  }
  console.log(pass);
  return (
    <div className="LogIn">
      <div className="Log">
        <h1>Alrashed Unevirsity</h1>
        <div className="form">
          <input
            className="text"
            type="text"
            placeholder="Your Number"
            onChange={(event) => {
              num = event.target.value;
            }}
          />
          <input
            className="passowrd"
            type="password"
            placeholder="Your Passowrd"
            onChange={(event) => {
              pass = event.target.value;
            }}
          />
          <button
            onClick={(event) => {
              event.preventDefault();
              on();
            }}
            className="log"
            type="submit"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
