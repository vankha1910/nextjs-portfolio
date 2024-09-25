import { contact } from '@/app/lib/data';
import React from 'react';

const Contact = () => {
  return (
    <section
      className='mt-20 text-center flex flex-col items-center'
      id='contact'
    >
      <h2 className='font-bold mb-6'>Contact</h2>
      <a href={`mailto:${contact.email}`}>
        <span className='btn btn--outline max-w-fit'>Email me</span>
      </a>
    </section>
  );
};

export default Contact;
