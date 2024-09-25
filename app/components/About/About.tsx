import { about } from '@/app/lib/data';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
const About = () => {
  const { name, role, description, resume, social } = about;
  return (
    <div id='about' className='about flex items-center flex-col mt-14 '>
      <h1 className='font-bold'>
        Hi, I am <span className='about__name'>{name}.</span>
      </h1>
      <h2 className='font-semibold mt-8'>A {role}.</h2>
      <p className=' mt-8 max-w-[600px]'>{description && description}</p>
      <div className='flex items-center gap-4 mt-8'>
        {resume && (
          <Link target='_blank' href={resume}>
            <span className='btn btn--outline'>Resume</span>
          </Link>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
