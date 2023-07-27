import { useState, useEffect } from 'react';

const EmailAlertComponent = () => {
  return (
    <div className='alert alert-success fixed right-0 top-0 flex w-full items-center justify-center bg-slate-200 p-7'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-6 w-6 shrink-0 stroke-current'
        fill='none'
        viewBox='0 0 24 24'
        color='gray'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        />
      </svg>
      <span className='text-gray-500'>Your email has been sent!</span>
    </div>
  );
};

const EmailAlert = () => {
  const [showComponent, setShowComponent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return <div>{showComponent && <EmailAlertComponent />}</div>;
};

export default EmailAlert;
