import React from 'react';
import store from '../images/store.jpg';

const Analytics = () => {
  return (
    <section className='relative analytics w-4/5 mx-auto h-64 bg-slate-400 rounded-3xl bg-center bg-no-repeat mb-12' style={{backgroundImage: `url(${store})`}}>
      <div className='absolute top-6 left-12 flex items-center justify-center w-32 h-24 font-bold bg-[#c04c3c] rounded-md text-white'>1k+ <br /> Brand</div>
      <div className='absolute top-20 left-36 flex items-center justify-center z-2 w-32 font-bold h-24 bg-[#c04c3c] rounded-md text-white'>600+ <br /> Shops</div>
      <div className='absolute top-36 left-60 flex items-center justify-center w-32 h-24 font-bold bg-[#c04c3c] rounded-md text-white'>1M+ <br /> Happy clients</div>
    </section>
  );
}

export default Analytics;