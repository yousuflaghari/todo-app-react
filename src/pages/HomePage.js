import React, { useState } from "react";
import './homepage.css';

const HomePage = () => {
    const [Todos, setTodos] = useState([]);
    const [input, setinput] = useState('');
    const [newinput, setnewinput] = useState("");
    const [editIndex, setEditIndex] = useState();

    const handleChange = (event) => {
        setinput(event.target.value);
    };

    const addtodo = () => {
        setTodos([...Todos, input])
    };

    const deletetodo = (i) => {
        const filtered = Todos.filter(((todo, index) => index !== i));
        setTodos(filtered);
        console.log(Todos, filtered);
    }

    const update = (i) => {
        setEditIndex(i);
        setnewinput(Todos[i]);
    }

    const saveChanges = () => {
        const temp = [...Todos];
        temp[editIndex] = newinput;
        setTodos(temp);
        setEditIndex(null);
    }

    console.log(Todos);

    return (
        <>
            <h1 className="h1">whats needs to be done</h1>
            <input className="input" value={input} onChange={handleChange} ></input>
            <button className="btn" onClick={addtodo} >ADD</button>
            {Todos.map((todo, i) => (<>
                {editIndex === i ? <>
                    <input value={newinput} onChange={e => setnewinput(e.target.value)} />
                    <button onClick={saveChanges}>Save changes</button>
                </> :   <p>{todo}</p>}
                <button onClick={() => deletetodo(i)} >delete</button>
                <button onClick={() => update(i)}>Edit</button>
            </>))}

        </>
    );
}
export default HomePage;
