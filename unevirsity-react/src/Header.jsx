import "./Header.css";
export default function Home() {
  return (
    <div className="Parent">
      <img src="./images/photo_2025-03-21_03-21-38.jpg" alt="Sorry"></img>
      <ul>
        <li>
          <a
            onClick={() => {
              window.location.pathname = "/home";
            }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              window.location.pathname = "/College";
            }}
          >
            Colleges
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              window.location.pathname = "/Story";
            }}
          >
            Story
          </a>
        </li>
        <li>
          <a
            onClick={() => {
              window.location.pathname = "/Info";
            }} 
          >
            Info
          </a>
        </li>
      </ul>
      <input placeholder="Unevirsity" />
    </div>
  );
}
