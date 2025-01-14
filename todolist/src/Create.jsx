import React, { useState } from "react";
import axios from "axios";

function Create() {
    const [task, setTask] = useState();
    const handleAdd = () => {
        axios
            .post("http://localhost:3001/add", { task: task })
            .then((result) => {
                location.reload();
            })
            .catch((err) => console.log(err));
    };
    return (
        <>
            <input
                type="text"
                onChange={(input) => setTask(input.target.value)}
            />
            <button type="button" onClick={handleAdd}>
                Add
            </button>
        </>
    );
}

export default Create;
