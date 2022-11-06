import './App.css';
import {usesState, useState} from "react";

function App() {
  const [todo,setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const addTodo = () => {
    if(todo !== ""){
    setTodos([...todos,todo]);
    setTodo("");
    }
   };
  return (
    <div className="App">
     <h1>React Todo App</h1>
     <div className="input-wrapper">
      <input 
      type="text" 
      placeholder="Create a new todo"
      value={todo}
      onChange={(e)=>{setTodo(e.target.value);
      }}
      />
      <button className="add-button" onClick={addTodo}>Add</button>
     </div>
    </div>
  );
}

export default App;
