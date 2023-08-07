// SmoothScrollLink.tsx
import React from 'react';

interface SmoothScrollLinkProps {
  to: string;
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const SmoothScrollLink: React.FC<SmoothScrollLinkProps> = ({ to, children, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetElement = document.querySelector(to);
    if (targetElement) {
      const targetY = targetElement.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <a href={to} onClick={handleClick}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
