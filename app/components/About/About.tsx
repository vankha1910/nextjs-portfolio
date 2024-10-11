import { about } from '@/app/lib/data';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';
import { motion } from 'framer-motion';
const About = () => {
  const { name, role, description, resume, social } = about;
  return (
    <div id='about' className='about flex items-center flex-col mt-14 '>
      <motion.h1
        className='font-bold'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, I am <span className='about__name'>{name}</span>
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className='font-semibold mt-8 text-center'
      >
        A {role}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className=' mt-8 max-w-[600px] text-center'
      >
        {description && description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className='flex items-center gap-4 mt-8'
      >
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
      </motion.div>
    </div>
  );
};

export default About;
