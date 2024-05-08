import { useRef } from "react";
import Input from "./Input";

export default function AddProjectForm() {
    const nameRef = useRef("");
    const descriptionRef = useRef("");
    const dateRef = useRef("");

    let project = {
        name: "",
        description: "",
        date: ""
    }

    function handleCancel() {
        document.getElementById('projectForm').reset();
    }

    function handleSaveProject() {
        project.name = nameRef.current.valueOf;
        project.description = descriptionRef.current.valueOf;
        project.date = dateRef.current.valueOf;
        console.log(project);
        // ()=>onHandleSaveNewProject(project)
    }

    return (
        // <form id="projectForm">
        //     <button onClick={handleCancel}>Cancel</button>
        //     <button onClick={handleSaveProject}>Save</button>
        //     {/* <input type="button" value="Cancel"/>
        //     <input type="button" value="Save"/> */}
        //     {/* <input type="submit" value="Save"/> */}
        //     <div>
        //         <label>Title</label><br/>
        //         <input type="text" id="title" ref={nameRef}/><br/><br/>
        //     </div>
        //     <div>
        //         <label>Description</label><br/>
        //         <input type="text"  id="description" ref={descriptionRef}/><br/><br/>
        //     </div>
        //     <div>
        //         <label>Due Date</label><br/>
        //         <input type="date" id="date" ref={dateRef}/><br/><br/>
        //     </div>
        // </form>
        <div>
            <menu>
                <li><button>Cancel</button></li>
                <li><button>Save</button></li>
            </menu>
            <div>
                <Input label="Title" type="text" id="title"/>
                <Input label="Description" isTextArea id="description"/>
                <Input label="Due Date" type="date" id="date"/>
            </div>
        </div>
    )
}