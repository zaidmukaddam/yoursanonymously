import React from 'react';
import dynamic from 'next/dynamic';
import { markdown } from '@/utils/constants';
import { Layout, Markdown } from '@/components';
import type { NextPageWithLayout } from '..';


const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <section className='space-y-12'>
      <Markdown content={markdown.privacy} />
    </section>
  );
};

PrivacyPolicy.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default PrivacyPolicy;
