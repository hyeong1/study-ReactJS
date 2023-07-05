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
    setToDos((currentArray) => [toDo, ...currentArray]); // currentArray�� ���ο� toDo �߰�
    setToDo(""); // submit �ϸ� input ����
  };
  // todo ����
  const deleteToDo = (index) => {
    setToDos(toDos.filter((item, toDoIndex) => index !== toDoIndex)); // index ��ġ���� �ʴ� todo�� ����(index ��ġ�ϴ� todo ����)
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
              onClick={() => deleteToDo(index)} // onClick�Լ��� deleteToDo�� ȣ���ϴµ� ������ todo�� index�� �Բ� ȣ����
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
