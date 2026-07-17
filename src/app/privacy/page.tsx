'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Privacy() {
  return (
    <>
      <Header />
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-8">Privacy Policy</h1>
        
        <div className="text-[1.1rem] text-[#444] leading-relaxed flex flex-col gap-6">
            <p>Last updated: July 17, 2026</p>
            
            <h2 className="text-2xl font-bold text-black mt-6 mb-2">1. Absolute Local Privacy</h2>
            <p>Aurora is designed with an offline-first philosophy. We do not gather, store, or transmit your private source code files, file metadata, or directory structures to remote servers. All repository history, blob data, and commit paths reside locally on your host device inside the encrypted <code>.aurora</code> folder structure.</p>

            <h2 className="text-2xl font-bold text-black mt-6 mb-2">2. Cloud Publishing Integrity</h2>
            <p>When using cloud bridge commands (such as <code>aurora publish</code>), secure data payload packages are sent directly to GitHub (or your custom Git remote endpoints) over HTTPS. Aurora VCS does not route your credentials, access tokens, or files through proxy servers. Transactions occur strictly point-to-point.</p>

            <h2 className="text-2xl font-bold text-black mt-6 mb-2">3. Version Checking</h2>
            <p>If optional automatic background update prompts are activated, Aurora queries the public GitHub Releases API to match local semantic versions. No personal metadata or identifiable machine hardware logs are stored during this version alignment check.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
