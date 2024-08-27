import React from 'react';
import Project from './project';

const projects = [
  // Add project data here
];

const Portfolio = () => {
  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map(project => (
        <Project
          key={project.title}
          title={project.title}
          image={project.image}
          deployedLink={project.deployedLink}
          repoLink={project.repoLink}
        />
      ))}
    </section>
  );
};

export default Portfolio;
