import { skills } from '@/app/lib/data';
import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Bắt đầu với opacity 0 và scale nhỏ hơn
  visible: {
    opacity: 1,
    scale: 1, // Phóng to trở lại kích thước bình thường
    transition: {
      staggerChildren: 0.1, // Mỗi skill sẽ xuất hiện với độ trễ 0.1s
      duration: 0.3, // Thời gian cho mỗi animation
      ease: 'easeOut', // Hiệu ứng dễ chịu khi animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 }, // Bắt đầu ở phía dưới và thu nhỏ
  visible: { opacity: 1, y: 0, scale: 1 }, // Kết thúc ở vị trí ban đầu và kích thước chuẩn
};

const Skills = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      whileInView='visible' // Kích hoạt khi vào khung nhìn
      viewport={{ once: true, amount: 0.5 }} // Chỉ kích hoạt một lần khi 50% phần tử xuất hiện
      id='skills'
      className='text-center mt-20 '
    >
      <h2 className='font-bold mb-6'>Skills</h2>
      <ul className='flex mx-auto gap-4 flex-wrap items-center justify-center max-w-[500px]'>
        {skills.map((skill, index) => (
          <motion.li
            variants={itemVariants}
            key={index}
            className=' btn btn--plain'
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
};

export default Skills;
