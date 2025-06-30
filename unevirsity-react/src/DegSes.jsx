import './DegSes.css';
export default
function DegSes(){
     const queryParams = new URLSearchParams(window.location.search);
     const arr = queryParams.get("arr");
     const newArr = arr.split(",");
     console.log(newArr);
     const newArray=newArr.map((e)=>{
        return (
            <li>{e}</li>
        );
     })
    return(
        <div className="degreeS">
            <ul>
                {newArray}
            </ul>
        </div>
    )
}