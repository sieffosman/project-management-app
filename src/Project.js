import React from 'react';

const Project = ({ project, onDelete }) => {
  return (
    <li>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={() => onDelete(project.id)}>Delete</button>
    </li>
  );
};

export default Project;
