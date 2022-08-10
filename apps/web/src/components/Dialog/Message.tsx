import React, { useState } from 'react';
import type { Message } from '@yoursanonymously/generated';
import { BsTrashFill, BsInstagram, BsDownload } from 'react-icons/bs';
import { useMutation } from 'react-query';
import { toPng } from 'html-to-image';
import toast from 'react-hot-toast';
import download from 'downloadjs';
import { nanoid } from 'nanoid';

import { deleteMessage, queryClient } from '@/api';
import { DialogContainer, DialogContainerProps, ConfirmDialog } from '.';

interface Props extends DialogContainerProps {
  username: string;
  data: Partial<Message>;
}

export const MessageDialog = ({
  username,
  data,
  setIsOpen,
  ...rest
}: Props) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const { mutate } = useMutation(deleteMessage);

  const handleDelete = () => {
    if (data.id) {
      mutate(
        { id: data.id },
        {
          onSuccess: () => {
            setDeleteModal(false);
            toast.success('Message deleted');
            queryClient.invalidateQueries('messages');
          },
        }
      );
    }
  };

  const saveImage = async () => {
    const imgUrl = await toPng(document.getElementById('card-img')!);
    download(imgUrl, `${username}_${nanoid(5)}.png`);
  };

  return (
    <>
      <ConfirmDialog
        isOpen={deleteModal}
        setIsOpen={setDeleteModal}
        content={
          <>
            <p className='reply mb-2'>{data.content}</p>
            <p>Are you sure you want to delete this message?</p>
          </>
        }
        handleConfirm={handleDelete}
      />
      <DialogContainer
        setIsOpen={setIsOpen}
        className='mt-12 lg:mt-32'
        {...rest}
      >
        <div className='mx-4 space-x-4'>
          <button
            onClick={() => setIsOpen(false)}
            className='lg:hidden'
            type='button'
          >
            &larr; Go Back
          </button>
        </div>
        <div id='card-img' className='bg-secondary-300 flex flex-col p-4'>
          <p className='font-syneExtrabold mb-2 self-center text-lg'>
            <span className='text-primary-200'>yoursanonymously</span>.space
          </p>

          <div className='msg-card overflow-hidden text-left'>
            <div className='receive chat-p bg-secondary-100 font-interMedium before:bg-secondary-100 after:bg-secondary-200 max-w-full px-6 py-5 text-lg text-white'>
              <p className='reply mb-3'>{data.receiverMsg}</p>
              <p>{data.content}</p>
            </div>
          </div>
        </div>

        <div className='flex items-center justify-end space-x-4 px-4 lg:mt-4'>
          <div className='flex items-start justify-between lg:w-full'>
            <button
              onClick={() => setIsOpen(false)}
              className='ml-4 hidden lg:block'
              type='button'
            >
              &larr; Go Back
            </button>

            <button
              className='secondary-btn flex items-center space-x-2'
              type='button'
              onClick={() => {
                saveImage();
              }}
            >
              <BsDownload className='text-sm' />
              <p>Download</p>
            </button>
          </div>

          <button
            className='primary-btn flex items-center space-x-2 lg:hidden'
            type='button'
            onClick={() => {
              saveImage();
              window.location.assign('instagram://story-camera');
            }}
          >
            <BsInstagram className='text-sm' />
            <p>Story</p>
          </button>

          <button
            onClick={() => {
              setIsOpen(false);

              setTimeout(() => {
                setDeleteModal(true);
              }, 500);
            }}
            className='del-btn flex items-center space-x-2'
            type='button'
          >
            <BsTrashFill className='text-sm' />
            <p>Delete</p>
          </button>
        </div>
      </DialogContainer>
    </>
  );
};
