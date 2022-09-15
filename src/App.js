// import Button from "./Button";
// import styles from "./App.module.css"
import {useState, useEffect} from "react" // useEffect는 최초 랜더 시에만 코드 실행(ex.API 호출 등)

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] =useState("");
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  const onClick = () => setValue((prev) => prev + 1);

  useEffect(
    () => console.log("I render only once."), []); //두 번째 전달인자가 빈 배열이므로 최초 1회만 첫 번째 전달인자의 함수 실행
  useEffect(() => {
    // if(keyword !== "" && keyword.length > 5)  //조건을 걸 수도 있음
    console.log("I render when 'keyword' cahges.")}, [keyword]
  ); // kyeword가 변경될 떄만 첫 번째 전달인자의 함수 실행
  useEffect(() =>
  console.log("I render when 'counter' changes."), [counter]
  );
  return (
    <div>
      <input 
      type="text" 
      placeholder="Search here" 
      onChange={onChange} />
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
