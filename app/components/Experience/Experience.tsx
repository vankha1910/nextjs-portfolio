import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '@/app/lib/data';
import { TimelineItem } from '@/app/lib/type';

const Experience = () => {
  return (
    <section id='experience' className='container mx-auto mt-20 '>
      <h2 className='text-3xl font-bold text-center mb-12'>My Journey</h2>
      <Timeline items={experiences} />
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
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
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
