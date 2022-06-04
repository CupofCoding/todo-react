import React, { Fragment, useEffect, useState } from "react";

//useEffect will make a fetch request to a REST API every time component renders

const ListTodos = () => {

    //set useState
    const [todos, setTodos] = useState([]);
    
    const getTodos = async() => {
        try {

            const response = await fetch("http://localhost:5000/todos");
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
                <tr>
                    <td>{todo.description}</td>
                    {/* loads the results from todo.description */}
                    <td>Edit</td>
                    <td>Delete</td>
                </tr>
                ))}
            </tbody>
        </table>
    </Fragment>
    );
    // <h1>List Todos</h1>;
};

export default ListTodos;