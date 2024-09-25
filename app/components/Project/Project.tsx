import React from 'react';
import { projects } from '@/app/lib/data';
import ProjectItem from '../ProjectItem';
const Project = () => {
  return (
    <section id='projects' className='text-center mt-20'>
      <h2 className='font-bold mb-8'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projects.map((project) => (
          <ProjectItem key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
