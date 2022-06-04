import React, { Fragment } from "react";

const ListTodos = () => {
    return <Fragment>
        <table class="table mt-5 text-center">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
        {/* --Structure Example
        <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
        </tr>*/}      
    </tbody>
  </table></Fragment>;
    // <h1>List Todos</h1>;
};

export default ListTodos;