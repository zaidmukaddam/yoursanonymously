import React from 'react';
import { markdown } from '@/utils/constants';
import { Layout, Markdown } from '@/components';
import type { NextPageWithLayout } from '..';


const Help: NextPageWithLayout = () => {
  return (
    <section>
      <Markdown content={markdown.help} />
    </section>
  );
};

Help.getLayout = (page: React.ReactElement) => <Layout>{page}</Layout>;

export default Help;
