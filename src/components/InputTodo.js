import React, { Fragment, useState } from "react";      //useState is required for React Hooks

//simple component
const InputTodo = () => {

    const [description, setDescription] = useState("")      //description is the state, setDescription is the only way to change the state. useState shows the default value of an empty string. Whatever text is in the string is what's shown and unchangeable without an onChange. 

    //This bit submits the data
    const onSubmitForm = async e => {
        e.preventDefault();     //stops page from refressing automatically
        try {
            const body = { description };
            const response = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            });    //fetch makes a GET request by default.

            console.log(response);
            
        } catch (error) {
            console.error(error.message)            
        }
    }


    return (
        <Fragment>
        <h1 className="text-center mt-5">Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
            {/*form is now linked to function onSubmit */}
            <input 
            type="text" 
            className="form-control" 
            value={description} 
            onChange={e => setDescription(e.target.value)}
            />    
            {/* value = state, onChange = event based on condition, setDescription targets input value to change*/}
            <button className="btn btn-success">Add</button>
        </form>
        </Fragment>
    );
};

export default InputTodo;