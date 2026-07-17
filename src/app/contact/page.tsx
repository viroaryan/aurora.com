'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ticket submitted successfully! We will get back to you shortly.');
  };

  return (
    <>
      <Header />
      <div className="max-w-[600px] mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-4 text-center">Get in Touch</h1>
        <p className="text-lg text-[#666] text-center mb-12">Have questions about integrating Aurora into your corporate workflow? Submit a ticket below.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-black">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full border border-[#eaeaea] rounded-[8px] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
            </div>
            
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-black">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  placeholder="john@company.com"
                  className="w-full border border-[#eaeaea] rounded-[8px] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
            </div>

            <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-black">Message</label>
                <textarea 
                  id="message" 
                  rows={6} 
                  required 
                  placeholder="Describe your inquiry..."
                  className="w-full border border-[#eaeaea] rounded-[8px] px-4 py-3 text-sm outline-none focus:border-black transition-colors"
                />
            </div>

            <button type="submit" className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] bg-black text-white text-sm font-medium hover:bg-[#333] hover:shadow-lg transition-all w-full">
              Submit Ticket
            </button>
        </form>
      </div>
      <Footer />
    </>
  );
}
