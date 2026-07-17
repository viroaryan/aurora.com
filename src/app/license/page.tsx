'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function License() {
  return (
    <>
      <Header />
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-8">MIT License</h1>
        
        <div className="text-[1.1rem] text-[#333] leading-relaxed font-mono bg-[#fafafa] border border-[#eaeaea] p-8 rounded-[8px] flex flex-col gap-5">
            <p>Copyright (c) 2026 Aurora VCS Open Source Project</p>
            
            <p>Permission is hereby granted, free of charge, to any person obtaining a copy
            of this software and associated documentation files (the "Software"), to deal
            in the Software without restriction, including without limitation the rights
            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
            copies of the Software, and to permit persons to whom the Software is
            furnished to do so, subject to the following conditions:</p>
            
            <p>The above copyright notice and this permission notice shall be included in all
            copies or substantial portions of the Software.</p>
            
            <p>THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
            SOFTWARE.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
