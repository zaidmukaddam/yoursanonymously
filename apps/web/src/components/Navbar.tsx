/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { BiLogOutCircle, BiUserCircle } from 'react-icons/bi';
import { signOut, useSession } from 'next-auth/react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { HiMenuAlt3 } from 'react-icons/hi';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { queryClient } from '@/api';
import { ImageFill, Menu } from '@/components';

export const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const { status } = useSession();
  const { push } = useRouter();

  const handleLogout = async () => {
    setLoading(true);
    await queryClient.invalidateQueries();
    await signOut({ redirect: false });
    push('/login');
    setLoading(false);
  };

  return (
    <nav className='relative z-10 mb-12 flex items-center justify-between xl:mb-24'>
      <Link href='/'>
        <ImageFill
          alt='logo'
          src='/assets/logo.svg'
          objectFit='contain'
          className='hide-tap-highlight h-[75px] w-[150px] cursor-pointer md:h-[100px] md:w-[200px]'
        />
      </Link>

      <div className='hidden items-center space-x-6 sm:flex'>
        {status === 'loading' || loading ? (
          <span className='loader' />
        ) : status === 'authenticated' ? (
          <button onClick={handleLogout} type='button' className='primary-btn'>
            Logout
          </button>
        ) : (
          <>
            <Link
              href='/login'
              className='cursor-pointer text-sm font-medium text-gray-200 transition-colors hover:text-gray-400 md:text-base'
            >
              Login
            </Link>

            <button
              onClick={() => push('/login')}
              type='button'
              className='primary-btn'
            >
              Get started
            </button>
          </>
        )}
      </div>

      <Menu
        className='sm:hidden'
        panelStyles='top-8 right-0'
        button={
          status === 'loading' || loading ? (
            <span className='loader' />
          ) : (
            <HiMenuAlt3 className='transition-colors hover:text-gray-300' />
          )
        }
        panel={
          <>
            {status === 'authenticated' ? (
              <button
                onClick={handleLogout}
                type='button'
                className='menu-item'
              >
                <BiLogOutCircle className='text-base' />
                <p>Logout</p>
              </button>
            ) : (
              <Link href='/login' className='menu-item'>
                <BiUserCircle className='text-base' />
                <p>Get started</p>
              </Link>
            )}
            <a
              href='https://instagram.com/zaidmukaddam'
              target='_blank'
              rel='noreferrer noopener'
              className='menu-item'
            >
              <FaInstagram />
              <p>Instagram</p>
            </a>
            <a
              href='https://twitter.com/zaidmukaddam'
              target='_blank'
              rel='noreferrer noopener'
              className='menu-item'
            >
              <FaTwitter className='text-base' />
              <p>Twitter</p>
            </a>
          </>
        }
      />
    </nav>
  );
};
