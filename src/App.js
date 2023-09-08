import React, { useState } from 'react';
import Project from '.';
import AddProjectForm from './AddProjectForm';

function App() {
  const [projects, setProjects] = useState([]);

  const addProject = (project) => {
    setProjects([...projects, project]);
  };

  const deleteProject = (id) => {
    const updatedProjects = projects.filter((project) => project.id !== id);
    setProjects(updatedProjects);
  };

  return (
    <div className="App">
      <h1>Project Management App</h1>
      <AddProjectForm addProject={addProject} />
      <ul>
        {projects.map((project) => (
          <Project key={project.id} project={project} onDelete={deleteProject} />
        ))}
      </ul>
    </div>
  );
}

export default App;
