import React, { useEffect, useState } from "react";
import Create from "./Create";
import axios from "axios";

function Home() {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3001/get")
            .then((result) => setTodos(result.data))
            .catch((err) => console.log(err));
    }, []);

    const handeEdit = (id, done) => {
        axios
            .put("http://localhost:3001/update/" + id, { done: done })
            .then((result) => {
                location.reload();
            })
            .catch((err) => console.log(err));
    };

    const handleDelete = (id) => {
        axios
            .delete("http://localhost:3001/delete/" + id)
            .then((result) => {
                location.reload();
            })
            .catch((err) => console.log(err));
    };

    return (
        <div>
            <h2>To-Do List</h2>
            <Create />
            {todos.length == 0 ? (
                <h3>No Items</h3>
            ) : (
                todos.map((todo) => (
                    <>
                        <li>
                            <input
                                type="checkbox"
                                checked={todo.done}
                                onClick={() => handeEdit(todo._id, todo.done)}
                            ></input>
                            {todo.task}
                            <button
                                type="button"
                                onClick={() => handleDelete(todo._id)}
                            >
                                delete
                            </button>
                        </li>
                    </>
                ))
            )}
        </div>
    );
}

export default Home;
