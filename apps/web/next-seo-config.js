const description =
  'An open-source platform for sending and receiving anonymous confessions! Start receiving anonymous messages with yoursanonymously.space!';

const imgUrl =
  'https://user-images.githubusercontent.com/76097144/183746122-c81b7d5b-d33c-4e7b-af0f-452e3fcf78ce.png';

export default {
  title: 'yoursanonymously',
  description,
  openGraph: {
    type: 'website',
    url: 'https://yoursanonymously.space',
    title: 'Send & Receive Anonymous Confessions',
    description,
    images: [
      {
        url: imgUrl,
        width: 1400,
        height: 800,
        alt: 'yoursanonymously',
        type: 'image/png',
      },
    ],
    site_name: 'yoursanonymously',
  },
  twitter: {
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
    {
      rel: 'apple-touch-icon',
      href: '/icons/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'initial-scale=1, viewport-fit=cover, user-scalable=no',
    },
  ],
};
