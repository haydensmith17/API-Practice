import { useState } from "react"

function Counter() {
    const [count, setCount] = useState(0)

    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count++)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}


function Greeting({name}) {
    return (
        <>
        {name ? (
            <h1>Hello, {name}</h1>
        ) : (
            <h1>Hello, Guest</h1>
        )}
        </>
    )
}

function App() {
    return (
        <div>
            <Greeting name="Alice"/>
            <Greeting />
        </div>
    )
}

const todos = ["Buy groceries", "Walk the dog", "Learn React"];

function ToDoList({ todos }) {
    return (
        <>
            {todos && todos.length > 0 ? (
                todos.map((element, index) => {
                    <h1 key={index}>{element}</h1>
                })
            ) : (
                <h1>No ToDos</h1>
            )}
        </>
    )
}

function App1() {
    return (
        <ToDoList todos={todos}/>
    )
}