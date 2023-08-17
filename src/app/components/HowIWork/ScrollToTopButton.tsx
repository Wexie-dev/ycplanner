import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setColor] = useState('#996058');

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsVisible(scrollTop > 100); // Show the button when scrolling down 100 pixels

    // To render a different color at footer
    const footerHeight = document.getElementById('footer')?.offsetHeight ?? 320;
    const scrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight - footerHeight;

    if (scrolledToBottom) setColor('#FFFFFF');
    else setColor('#996058');
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`p-2 text-white transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      onClick={scrollToTop}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20C0 16.0444 1.17298 12.1776 3.37061 8.8886C5.56823 5.59962 8.69181 3.03617 12.3463 1.52242C16.0009 0.00866588 20.0222 -0.387401 23.9018 0.384303C27.7814 1.15601 31.3451 3.06082 34.1421 5.85787C36.9392 8.65492 38.844 12.2186 39.6157 16.0982C40.3874 19.9778 39.9913 23.9992 38.4776 27.6537C36.9638 31.3082 34.4004 34.4318 31.1114 36.6294C27.8224 38.827 23.9556 40 20 40C14.6957 40 9.60859 37.8929 5.85786 34.1421C2.10714 30.3914 0 25.3043 0 20ZM2.66667 20C2.66667 23.4282 3.68325 26.7794 5.58786 29.6299C7.49247 32.4803 10.1996 34.702 13.3668 36.0139C16.5341 37.3258 20.0192 37.6691 23.3816 37.0003C26.7439 36.3315 29.8324 34.6806 32.2565 32.2565C34.6806 29.8324 36.3315 26.7439 37.0003 23.3816C37.6691 20.0192 37.3258 16.5341 36.0139 13.3668C34.702 10.1996 32.4803 7.49248 29.6299 5.58787C26.7794 3.68326 23.4282 2.66668 20 2.66668C15.4029 2.66668 10.9941 4.49286 7.74348 7.74349C4.49285 10.9941 2.66667 15.4029 2.66667 20Z"
          fill={color}
        />
        <path
          d="M13.376 25.0414L20.3635 18.0664L27.351 25.0414C27.5852 25.2742 27.902 25.4048 28.2322 25.4048C28.5625 25.4048 28.8793 25.2742 29.1135 25.0414C29.3463 24.8072 29.477 24.4903 29.477 24.1601C29.477 23.8299 29.3463 23.5131 29.1135 23.2789L21.1635 15.3289C20.9505 15.1182 20.6631 15 20.3635 15C20.0639 15 19.7765 15.1182 19.5635 15.3289L11.6135 23.2789C11.3807 23.5131 11.25 23.8299 11.25 24.1601C11.25 24.4903 11.3807 24.8072 11.6135 25.0414C11.8477 25.2742 12.1645 25.4048 12.4947 25.4048C12.825 25.4048 13.1418 25.2742 13.376 25.0414Z"
          fill={color}
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
