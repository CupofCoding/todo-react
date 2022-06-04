import React, { Fragment, useState } from "react";

const EditTodo = ({ todo }) => {
    // set { todo } as a prop to be exported. 

    const [description, setDescription] = useState(todo.description);
    // goal is the edit the description so it needs to pull data from the existing description. Value needs to be set to the field to match. 

    //edit description function
    const updateDescription = async(e) => {
        e.preventDefault();
        // stops refesh

        try {
            const body = { description };
            //data needs to be packaged again
            const response = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                // default fetch request is GET. reassign method to PUT to update
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            
            window.location = "/"
            //refreshes the browser to show updates.
            // console.log(response)
        } catch (error) {
            console.error(error.message)            
        }
    }

    return (
    <Fragment>
        {/* <!-- Button to Open the Modal --> */}
        <button type="button" className="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.todo_id}`}>Edit</button>
        {/* modals target and match specific IDs. so setting it to target(#) id is best practice otherwise it will target first index values. */}
        
        {/* <!-- The Modal --> */}
        <div className="modal" id={`id${todo.todo_id}`} onClick={() => setDescription(todo.description)}>
            {/* Default behaviour for clicking outside of window will close the modal. onClick resets to unupdated description data. */}

            {/* template string is selecting id then specified id */}
            <div className="modal-dialog">
                <div className="modal-content">
                    
                    {/* <!-- Modal Header --> */}
                    <div className="modal-header">
                        <h4 className="modal-title">Edit Description</h4>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    
                    {/* <!-- Modal body --> */}
                    <div className="modal-body"> 
                    <input type="text" className="form-control" value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    {/* Data to be updated. onChange allows data to be changed, but doesn't send it. Only changes description state. */}
                    
                    {/* <!-- Modal footer --> */}
                    <div className="modal-footer">
                        <button type="button" className="btn btn-warning" data-bs-dismiss="modal" onClick={e => updateDescription(e)}>Edit</button>
                        {/* button doesn't have correlation to the edit model button unless there's a prop passed in the exported component; once connected, onClick sends the description data to update */}
                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)}>Close</button>
                        {/* pulls the data again while discarding the changes that haven't been updated */}
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

    // Modal Code FROM W3Schools
    //     {/* <!-- Button to Open the Modal --> */}
    //     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">Open modal</button>
        
    //     {/* <!-- The Modal --> */}
    //     <div class="modal" id="myModal">
    //         <div class="modal-dialog">
    //             <div class="modal-content">
                    
    //                 {/* <!-- Modal Header --> */}
    //                 <div class="modal-header">
    //                     <h4 class="modal-title">Modal Heading</h4>
    //                     <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
    //                 </div>
                    
    //                 {/* <!-- Modal body --> */}
    //                 <div class="modal-body"> Modal body...</div>
                    
    //                 {/* <!-- Modal footer --> */}
    //                 <div class="modal-footer">
    //                     <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </Fragment>
    )};

export default EditTodo;