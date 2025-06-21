import { ZapIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';

const RateLimit = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // Trigger the animation after mount
    setShow(true);
    // Optional: auto-hide after a delay
    // setTimeout(() => setShow(false), 3000);
  }, []);

  return (
    <div>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        <div
          className={`
            bg-secondary/90 border-primary rounded-lg shadow-accent
            transition-all duration-500
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
          `}
        >
          <div className='flex flex-col md:flex-row items-center p-6 gap-4'>
            <div className=' bg-amber-200 p-4 rounded-full'>
              <span className='size-10 text-orange-900'><ZapIcon size={55}/></span>
            </div>
            <div className='flex flex-col text-center md:text-left  text-neutral-900'>
              <h3 className='text-xl font-extrabold mb-2 text-neutral-900'>Rate Limit Reached</h3>
              <p className='text-neutral-900 font-bold mb-1 text-sm'>You Have made too many Calls to The Sever . Please wait for a moment</p>
              <p className='font-bold text-sm'>Try Again After Few Minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RateLimit;