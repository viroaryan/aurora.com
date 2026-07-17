'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Careers() {
  return (
    <>
      <Header />
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-4">Join the Revolution</h1>
        <p className="text-lg text-[#666] mb-12">Help us design and engineer the future of distributed version control systems. We are a completely remote team working on open-source systems.</p>
        
        <div className="flex flex-col gap-6">
            <div className="border border-[#eaeaea] rounded-[14px] p-8 flex justify-between items-center bg-white hover:border-black transition-all">
                <div>
                    <h3 className="text-lg font-bold mb-2">Systems Engineer (Go / Rust)</h3>
                    <p className="text-sm text-[#666]">Remote / Full-time / Systems Development</p>
                </div>
                <span className="bg-[#fafafa] border border-[#eaeaea] px-4 py-1 rounded-full text-xs font-semibold text-[#666] cursor-pointer">Apply Now</span>
            </div>

            <div className="border border-[#eaeaea] rounded-[14px] p-8 flex justify-between items-center bg-white hover:border-black transition-all">
                <div>
                    <h3 className="text-lg font-bold mb-2">Developer Relations Advocate</h3>
                    <p className="text-sm text-[#666]">Remote / Full-time / Community & Technical Writing</p>
                </div>
                <span className="bg-[#fafafa] border border-[#eaeaea] px-4 py-1 rounded-full text-xs font-semibold text-[#666] cursor-pointer">Apply Now</span>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
