import { Project } from '@/app/lib/type';
import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
const ProjectItem = ({ project }: { project: Project }) => {
  return (
    <div className='project p-8'>
      <h3 className='font-semibold mb-4'>{project.name}</h3>
      <p className='mb-4'>{project.description}</p>
      {project.stack && (
        <ul className='flex gap-4 justify-center mb-6 '>
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
    </div>
  );
};

export default ProjectItem;
