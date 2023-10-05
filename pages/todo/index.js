import React, { useState } from 'react';

function Index() {
  const [input, setInput] = useState('');
  const [todo, setTodo] = useState([]);
  const [upinput, setUpinput] = useState('');
  const [editingTodoId, setEditingTodoId] = useState(null);

  const obj = {
    name: input,
    id: Date.now(),
  };

  const AddTodo = () => {
    setTodo((prev) => [...prev, obj]);
    setInput('');
  };

  const DeleteTodo = (todoId) => {
    const filterData = todo.filter((prev) => prev.id !== todoId);
    setTodo(filterData);
  };

  const UpdateTodo = (todoId) => {
    const data = todo.find((prev) => prev.id === todoId);
    setUpinput(data.name);
    setEditingTodoId(todoId);
  };

  const SaveTheTodo = () => {
    const updatedTodoList = todo.map((item) => {
      if (item.id === editingTodoId) {
        return { ...item, name: upinput };
      }
      return item;
    });

    setTodo(updatedTodoList);
    setUpinput('');
    setEditingTodoId(null);
  };

  return (
    <div>
      <h1>This is a todo app</h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={AddTodo}>Add Todo</button>
      <br />
      {todo.map((val) => (
        <div key={val.id}>
          {val.id === editingTodoId ? (
            <>
              <input type="text" value={upinput} onChange={(e) => setUpinput(e.target.value)} />
              <button onClick={SaveTheTodo}>Save</button>
            </>
          ) : (
            <>
              <h5>{val.name}</h5>
              <button onClick={() => DeleteTodo(val.id)}>Delete This</button>
              <button onClick={() => UpdateTodo(val.id)}>Update TODO</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
}

export default Index;
