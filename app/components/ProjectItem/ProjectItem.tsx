import { Project } from '@/app/lib/type';
import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import Image from 'next/image';
import { motion } from 'framer-motion';
const ProjectItem = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className='project p-8'
    >
      <Image
        alt='avatar'
        src={project.image}
        width={1900}
        height={1000}
        className='mb-4 rounded flex-1 object-cover md:h-[175px] lg:h-[160px] xl:h-[226px]'
      ></Image>
      <h3 className='font-semibold mb-4'>{project.name}</h3>
      <p className='mb-4'>{project.description}</p>
      {project.stack && (
        <ul className='flex gap-4 justify-center mb-6 flex-wrap'>
          {project.stack.map((item) => (
            <li className='font-medium text-sm' key={item}>
              {item}
            </li>
          ))}
        </ul>
      )}
      <div className='flex justify-center gap-4'>
        {project.sourceCode && (
          <Link
            href={project.sourceCode}
            target='_blank'
            rel='noopener noreferrer'
            className='link link--icon'
          >
            <GitHubIcon />
          </Link>
        )}
        {project.livePreview && (
          <Link
            href={project.livePreview}
            target='_blank'
            rel='noopener noreferrer'
            className='link link--icon'
          >
            <LaunchIcon />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectItem;
