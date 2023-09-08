import React, { useState } from 'react';

const AddProjectForm = ({ addProject }) => {
  const [project, setProject] = useState({ name: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (project.name.trim() === '') return;
    addProject({ ...project, id: Date.now() });
    setProject({ name: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Project Name"
        value={project.name}
        onChange={(e) => setProject({ ...project, name: e.target.value })}
      />
      <textarea
        placeholder="Project Description"
        value={project.description}
        onChange={(e) => setProject({ ...project, description: e.target.value })}
      ></textarea>
      <button type="submit">Add Project</button>
    </form>
  );
};

export default AddProjectForm;
