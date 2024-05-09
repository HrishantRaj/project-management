import { useState } from "react";
import Sidebar from "./components/Sidebar";
import AddProjectForm from "./components/AddProjectForm";
import NoProjectSelected from "./components/NoProjectSelected";

function App() {
  let initialProject = [{ name: "", description: "", dueDate: "", tasks: [] }];

  const [addProject, setAddProject] = useState(false);
  const [projects, setProjects] = useState(initialProject);

  function handleAddProject() {
    setAddProject(true);
  }

  function handleSaveNewProject(project) {
    setProjects(projects => {
      projects.push(project);
    })
  }

  function handleAddProjectTasks() {

  }

  return (
    <main className="h-screen my-1 flex gap-8">
      <Sidebar addProjectFlag={addProject} onHandleAddProject={handleAddProject} projects={projects} />
      {addProject ? <AddProjectForm /> : <NoProjectSelected onHandleAddProject={handleAddProject}/>}
    </main>
  );
}

export default App;
