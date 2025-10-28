import React from 'react'

export default function Customer() {
  return (
    <section className='w-full h-full flex flex-col items-center justify-center text-center text-slate-300 py-20 bg-[#071014]'>
      <h2 className='font-[UnitedSans] font-light mb-12 sm:text-[56px] text-[28px] leading-tight text-white'>Trusted By Industry Leaders</h2>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-12 max-w-6xl w-full px-6'>
        <img src='/logos/warnerbros.svg' alt='Warner Bros Games' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/paradox.svg' alt='Paradox Interactive' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/ubisoft.svg' alt='Ubisoft' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/tinybuild.svg' alt='TinyBuild' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/kabam.svg' alt='Kabam' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/wargaming.svg' alt='Wargaming.net' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/amazon.svg' alt='Amazon' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/disney.svg' alt='Disney' className='h-16 mx-auto grayscale hover:grayscale-0 opacity-60 transition' />
        <img src='/logos/scopely.svg' alt='Scopely' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/bigfish.svg' alt='Big Fish' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/riot.svg' alt='Riot Games' className='h-16 mx-auto grayscale hover:grayscale-0 transition' />
        <img src='/logos/unity.svg' alt='Unity' className='h-16 mx-auto grayscale hover:grayscale-0 opacity-60 transition' />
      </div>
    </section>
  )
}
