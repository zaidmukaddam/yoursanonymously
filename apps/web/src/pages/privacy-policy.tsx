import React from 'react';
import dynamic from 'next/dynamic';
import { markdown } from '@/utils/constants';
import { Layout, Markdown } from '@/components';
import type { NextPageWithLayout } from '..';

const AdContainer = dynamic(() => import('@/components/AdContainer'), {
  ssr: false,
});

const PrivacyPolicy: NextPageWithLayout = () => {
  return (
    <section className='space-y-12'>
      <AdContainer slotId='3709532062' />
      <Markdown content={markdown.privacy} />
      <AdContainer slotId='5214185424' />
    </section>
  );
};

PrivacyPolicy.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default PrivacyPolicy;
