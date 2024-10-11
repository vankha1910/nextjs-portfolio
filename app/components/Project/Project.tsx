import React from 'react';
import { projects } from '@/app/lib/data';
import ProjectItem from '../ProjectItem';
import { motion } from 'framer-motion';
const Project = () => {
  return (
    <section id='projects' className='text-center mt-20'>
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='font-bold mb-8'
      >
        Projects
      </motion.h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
        {projects.map((project, index) => (
          <ProjectItem index={index} key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Project;
