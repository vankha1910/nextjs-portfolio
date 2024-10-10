import React from 'react';
import { motion } from 'framer-motion';
interface TimelineItem {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience';
}

const Experience = () => {
  const timelineItems: TimelineItem[] = [
    {
      year: '2022 - Present',
      title: 'Google',
      subtitle: 'Senior Frontend Developer',
      description:
        'Leading a team of developers in creating next-generation web applications. Implementing cutting-edge technologies and best practices in web development.',
      type: 'experience',
    },
    {
      year: '2020 - 2022',
      title: 'Stanford University',
      subtitle: "Master's Degree in Computer Science",
      description:
        'Focused on advanced algorithms, machine learning, and software engineering principles. Completed a thesis on optimizing neural networks for edge devices.',
      type: 'education',
    },
    {
      year: '2020 - 2022',
      title: 'Amazon',
      subtitle: 'Full-Stack Developer',
      description:
        "Developed and maintained critical components of Amazon's e-commerce platform. Collaborated with cross-functional teams to improve user experience and system efficiency.",
      type: 'experience',
    },
  ];

  return (
    <section id='experience' className='container mx-auto mt-20 '>
      <h2 className='text-3xl font-bold text-center mb-12'>My Journey</h2>
      <Timeline items={timelineItems} />
    </section>
  );
};

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
  return (
    <div className='relative container mx-auto '>
      <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-300'></div>
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={`mb-12 flex flex-col md:flex-row  ${
            index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
          }`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          style={{ willChange: 'unset' }}
        >
          <div
            className={`w-full md:w-5/12 project ${
              index % 2 === 0 ? 'md:text-right' : ' md:text-left'
            }`}
          >
            <div
              className={`p-4  rounded-lg shadow-md  border-l-4 ${
                item.type === 'education'
                  ? 'border-blue-500'
                  : 'border-green-500'
              }`}
            >
              <span
                className={`text-sm font-medium ${
                  item.type === 'education' ? 'text-blue-500' : 'text-green-500'
                }`}
              >
                {item.year}
              </span>
              <h3 className='text-xl font-semibold mt-1'>{item.title}</h3>
              <p className=' font-medium'>{item.subtitle}</p>
              <p className=' mt-2'>{item.description}</p>
            </div>
          </div>
          <div className='hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-gray-300 z-10'></div>
          <div className='md:hidden w-4 h-4 absolute left-0 transform -translate-x-1/2 rounded-full bg-white border-4 border-gray-300 z-10'></div>
        </motion.div>
      ))}
    </div>
  );
};
export default Experience;
