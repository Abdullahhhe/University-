import "../degree.css";
export default function Degree() {
  return (
    <div className="P">
      <div className="Seson">
        <button
          onClick={() => {
            window.location.pathname = "/degree sesson";
          }}
        >
          This Sesson
        </button>
      </div>
      <div
        onClick={() => {
          window.location.pathname = "/degree All";
        }}
        className="AllDegree"
      >
        <button>All Degree</button>
      </div>
    </div>
  );
}
