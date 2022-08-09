import React from 'react';
import dynamic from 'next/dynamic';
import { markdown } from '@/constants';
import { Markdown } from '@/components';

const Help = () => {
  return (
    <section className='space-y-8'>
      <Markdown content={markdown.help} />
    </section>
  );
};

export default Help;
