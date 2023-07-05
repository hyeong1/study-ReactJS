import { useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(toDo);
    if (toDo === "") {
      return;
    }
    setToDos((currentArray) => [toDo, ...currentArray]); // currentArray에 새로운 toDo 추가
    setToDo(""); // submit 하면 input 비우기
  };
  // todo 삭제
  const deleteToDo = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex)); // index 일치하지 않는 todo만 남김(index 일치하는 todo 삭제)
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            {item}
            <button
              style={{
                marginLeft: "5px",
                border: "none",
                color: "white",
                backgroundColor: "tomato",
              }}
              onClick={() => deleteToDo(index)} // onClick함수는 deleteToDo를 호출하는데 삭제할 todo의 index와 함께 호출함
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
