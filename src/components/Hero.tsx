import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-blue-600 pt-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80')] bg-cover bg-center opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-blue-900/90 to-blue-600/80"></div>
      <div className="mx-auto max-w-7xl relative z-10">
        <div className="relative z-10 pt-8 lg:w-full lg:max-w-2xl">
          <div className="relative px-6 py-16 sm:py-24 lg:px-8 lg:py-32 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-5xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-blue-400 to-blue-100 sm:text-7xl drop-shadow-lg">
                <span className="block">Transform</span>
                <span className="mt-2 block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-cyan-300 to-blue-200">Your Vision: Designs By Noble</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-blue-100/90 drop-shadow">
                Elevate your brand with stunning designs that capture attention and inspire action. From websites that wow to T-shirts that turn heads, we bring your ideas to life with style and precision.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  href="#portfolio"
                  className="rounded-md bg-gradient-to-r from-blue-200 via-blue-400 to-blue-300 px-5 py-3 text-sm font-semibold text-blue-900 shadow-lg hover:from-blue-300 hover:via-blue-500 hover:to-blue-400 transition-all duration-300 hover:shadow-blue-500/25"
                >
                  View Portfolio
                </a>
                <a href="#services" className="text-sm font-semibold leading-6 text-blue-200 flex items-center group">
                  Our Services <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-transparent to-transparent z-10"></div>
          <img
            className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2015&q=80"
            alt="Modern web design showcase"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;