import React from 'react';
import Image from 'next/image';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { IoChatboxEllipses } from 'react-icons/io5';

const Home: NextPage = () => {
  const { push } = useRouter();
  const { data } = useSession();

  const currentUser = data?.user?.username;

  return (
    <section className='space-y-10'>
      <div className='relative flex flex-col justify-between text-center sm:text-left xl:flex-row mb-16 lg:mt-4'>
        <div>
          <h1 className='h1-text'>
            <span className='text-primary-100'>Anonymously </span>Receive <br />
            confessions & messages
          </h1>

          <p className='mt-4 text-gray-200 md:text-lg xl:mt-6'>
            A platform that anyone can use to send and receive{' '}
            <span className='text-primary-100'>anonymous</span>{' '}
            <br className='hidden sm:block' />
            messages.{' '}
          </p>

          <div className='mt-8 flex justify-center gap-3 sm:justify-start xl:mt-12'>
            <button
              onClick={() => push(currentUser ? '/inbox' : '/register')}
              type='button'
              className='primary-btn'
            >
              {currentUser ? 'View messages' : 'Create your link'}
            </button>

            <a
              href='https://github.com/zaidmukaddam/yoursanonymously'
              target='_blank'
              rel='noopener noreferrer'
              className='secondary-btn'
            >
              View source
            </a>
          </div>
        </div>

        <div className='relative mt-28 self-end text-left md:mt-16 xl:mt-0 xl:self-start'>
          <div className='card font-syne w-full self-end p-8 md:w-[450px]'>
            <p>
              <span className='mr-2 text-lg font-bold'>Yoursanonymously</span>
              <span>(adverb)</span>
            </p>
            <p className='mt-1'>
              A public art project with promised anonyimity to send and receive confessions.
            </p>
          </div>

          <IoChatboxEllipses className='text-primary-100 absolute right-4 -top-14 text-8xl xl:-left-12 xl:top-28 xl:text-9xl' />
        </div>

        <div className='xl:-right-15 absolute top-48 right-0 -z-10 h-[450px] w-[450px] sm:top-40 md:top-28 md:h-[550px] md:w-[550px] xl:-top-56 xl:mt-14 xl:w-[650px]'>
          <Image
            priority
            src='/assets/hearts.svg'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
