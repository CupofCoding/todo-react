import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

//useEffect will make a fetch request to a REST API every time component renders

const ListTodos = () => {

    //set useState
    const [todos, setTodos] = useState([]);

    //delete function
    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`/todos/${id}`, {
                method: "DELETE"
            });
            // `template strings` needed to make variables within the strings. 

            setTodos(todos.filter(todo => todo.todo_id !== id))
            // selects state.sets a condition for if todos fit that condition then it only returns those (returns all other ids not matching the one deleted.)
            // console.log(deleteTodo);
        } catch (error) {
            console.error(error.message)
        }
    }
    
    const getTodos = async() => {
        try {
            // const response = await fetch("${window.location.hostname}:5000/todos");

            const response = await fetch(`${window.location.hostname}:5000/todos`).then((response) => {
                this.setState({ res: response.data });
          });


            const jsonData = await response.json();
            //parse first to get json data after things are added

            //affected State triggers
            setTodos(jsonData);

            //console.log(jsonData)
        } catch (error) {
            console.error(error.message)
        }
    };

    //useEffect keeps making requests each time a render happens. 
    useEffect(() => {
        getTodos();
    }, []);
    // ', []' sets the restriction for 1 request. 

    //current State
    console.log(todos);

    return (<Fragment>
        <table className="table mt-5 text-center">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {/* --Structure Example for mapping
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>*/}
                {todos.map(todo => (
                <tr key={todo.todo_id}>
                    {/* key sets objects as unique */}
                    <td>{todo.description}</td>
                    {/* loads the results from todo.description */}
                    <td><EditTodo todo = {todo}/></td>
                    {/* todo is now passed as a prop to the EditTodo component */}
                    <td>
                        <button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>Delete</button>
                        {/* onclick; specify unique id that we want to delete associated with it. */}
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
    );
    // <h1>List Todos</h1>;
};

export default ListTodos;