import { skills } from '@/app/lib/data';
import React from 'react';

const Skills = () => {
  return (
    <section id='skills' className='text-center mt-20 '>
      <h2 className='font-bold mb-6'>Skills</h2>
      <ul className='flex mx-auto gap-4 flex-wrap items-center justify-center max-w-[450px]'>
        {skills.map((skill, index) => (
          <li key={index} className=' btn btn--plain'>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
