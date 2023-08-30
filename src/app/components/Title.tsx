import React from 'react';

function Title({ children }: { children: React.ReactNode | string }) {
  return (
    <h2 className="font-butler text-[24px] font-normal text-[#36373A] sm:text-[26px] md:text-4xl 2xl:text-5xl">
      {children}
    </h2>
  );
}

export default Title;
