import React from 'react';


export const Error = ({ message }: { message: string }) => {
  return (
    <section>
      <h1 className='h1-text text-center'>{message}</h1>
    </section>
  );
};
