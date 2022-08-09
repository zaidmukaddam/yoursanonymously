import React from 'react';
import { markdown } from '@/constants';
import { Markdown } from '@/components';

const PrivacyPolicy = () => {
  return (
    <section className='space-y-8'>
      <Markdown content={markdown.privacy} />
    </section>
  );
};

export default PrivacyPolicy;
