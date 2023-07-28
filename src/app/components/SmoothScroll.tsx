// SmoothScrollLink.tsx
import React from 'react';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ to, children }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
