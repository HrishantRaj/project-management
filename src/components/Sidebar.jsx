import { useState } from "react"
import Button from "./Button"

export default function Sidebar({ addProjectFlag, onHandleAddProject, projects }) {
    let initialProject = [
        {
            name: "abc"
        },
        {
            name: "def"
        }
    ]




    // function onHandleAdd() {
    //     ()=>onHandleAddProject();
    //     setProjects((prevProjects)=>prevProjects.concat(initialProject))
    // }

    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h1 className="mb-8 font-bold uppercase md:text-xl text-stone-100">Your Projects</h1>
            <div>
                {/* <button className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
                    onClick={() => onHandleAddProject()}>
                    + Add Project
                </button> */}
                <Button onClick={() => onHandleAddProject()}>+ Add Project</Button>
            </div>
            <ul>
                {projects.map((project) =>
                    <li key={project.name}>{project.name}</li>
                )}
            </ul>
        </aside>
    )
}