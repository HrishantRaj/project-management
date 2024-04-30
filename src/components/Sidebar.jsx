import { useState } from "react"

export default function Sidebar() {
    let initialProject = [
        {
            name : "abc"
        },
        {
            name : "def"
        }
    ]

    const [projects,setProjects] = useState(initialProject);

    function onHandleAdd() {
        setProjects((prevProjects)=>prevProjects.concat(initialProject))
    }

    return (
        <div className="">
            <h1>Your Projects</h1>
            <button onClick={onHandleAdd}>Add Project</button>
            <ul>
                {projects.map((project)=>
                    <li>{project.name}</li>
                )}
            </ul>
        </div>
    )
}