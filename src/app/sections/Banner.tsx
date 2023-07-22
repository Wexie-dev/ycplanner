import React from "react";

export default function Banner() {
  return (
    <section id="home" className="h-screen w-full">
      <div className="relative h-screen w-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full bg-banner bg-cover bg-center"></div>

        {/* Sticky Navbar */}
        <nav className="fixed top-0 left-0 w-full bg-white shadow-lg">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="text-xl font-bold">Logo</div>
              {/* Add your navigation links here */}
              <ul className="hidden md:flex space-x-8">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Banner Content */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="text-white text-4xl font-bold">Comming soon</div>
        </div>
      </div>
    </section>
  );
}
