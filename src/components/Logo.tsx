import React from 'react';
import { Laptop } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center group cursor-pointer">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative">
          <Laptop className="h-10 w-10 text-transparent bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 transform group-hover:scale-110 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-cyan-500/20 blur-lg rounded-full animate-pulse"></div>
        </div>
      </div>
      <div className="ml-3 flex flex-col">
        <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 group-hover:from-purple-500 group-hover:via-blue-500 group-hover:to-cyan-400 transition-all duration-300">
          Designs
        </span>
        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 group-hover:from-cyan-400 group-hover:via-blue-500 group-hover:to-purple-500 transition-all duration-300">
          By Noble
        </span>
      </div>
    </div>
  );
};

export default Logo;