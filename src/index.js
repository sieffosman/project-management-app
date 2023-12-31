import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Import your main App component

ReactDOM.render(<App />, document.getElementById('root'));

const Project = ({ project, onDelete }) => {
  return (
    <div className="Project">
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <button onClick={() => onDelete(project.id)}>Delete</button>
    </div>
  );
};

export default Project;
