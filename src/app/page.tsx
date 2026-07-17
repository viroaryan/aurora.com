'use client';

import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <Header />
      <div className="grid-bg"></div>

      {/* HERO SECTION */}
      <section className="max-w-[1000px] mx-auto px-6 pt-36 pb-20 text-center relative">
        <div className="inline-flex items-center gap-2 bg-[#fafafa] border border-[#eaeaea] px-[14px] py-[6px] rounded-full text-xs font-semibold text-[#444] mb-6">
          <span className="bg-black text-white px-2 py-[2px] rounded-full text-[10px]">New</span>
          <span>Aurora v1.0 is officially released</span>
        </div>
        
        <h1 className="text-[3.2rem] md:text-[6rem] font-extrabold tracking-[-0.06em] leading-[1.05] mb-7 select-none">
          Version Control.<br />
          <span className="bg-gradient-to-r from-[#7928ca] via-[#0070f3] to-[#00dfd8] bg-clip-text text-transparent">
            At the speed of thought.
          </span>
        </h1>
        
        <p className="text-[1.15rem] md:text-[1.45rem] text-[#666] max-w-[760px] mx-auto mb-11 leading-relaxed tracking-[-0.02em]">
          {t('hero-desc')}
        </p>
        
        <div className="flex justify-center gap-4">
          <Link href="/download" className="inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] bg-black text-white font-medium hover:bg-[#333] hover:shadow-lg transition-all text-base">
            {t('hero-btn-install')}
          </Link>
          <Link href="/docs" className="inline-flex items-center justify-center h-[52px] px-8 rounded-[8px] border border-[#eaeaea] bg-white text-black font-medium hover:border-black transition-all text-base">
            {t('hero-btn-docs')}
          </Link>
        </div>
      </section>

      {/* HERO MOCKUP */}
      <div className="max-w-[1100px] mx-auto px-6 mb-[120px]">
        <img 
          src="/assets/timeline_mockup.jpg" 
          alt="Aurora Project History Timeline Graph" 
          className="w-full h-auto rounded-[14px] border border-[#eaeaea] shadow-2xl bg-white animate-float"
        />
      </div>

      {/* FEATURES GRID */}
      <section id="features" className="max-w-[1200px] mx-auto px-6 mb-[140px]">
        <h2 className="text-[2.2rem] md:text-[3.2rem] font-extrabold tracking-[-0.05em] mb-4 text-center">
          {t('features-title')}
        </h2>
        <p className="text-[1.15rem] text-[#666] text-center max-w-[650px] mx-auto mb-16 leading-relaxed">
          {t('features-desc')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Wide Bento Card */}
          <div className="md:col-span-2 border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.03em]">Integrated Go-Git Engine</h3>
              <p className="text-[#666] text-[0.95rem] leading-relaxed">
                Aurora does not require local Git or third-party client dependencies. With its built-in Go Git implementation, it securely communicates with remote repositories natively.
              </p>
            </div>
            <div className="bg-black rounded-[8px] p-6 mt-8 font-mono text-white text-sm text-left shadow-lg">
              <div className="flex gap-2 mb-4">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
              </div>
              <span className="text-[#888] block mb-2"># Push code safely without installing Git</span>
              <span className="text-[#00dfd8] mr-3">$</span>
              <span className="text-white">aurora publish https://github.com/viroaryan/aurora.com.git</span>
              <span className="text-[#27c93f] block mt-3">&gt; Uploaded index tree. Push successful.</span>
            </div>
          </div>

          {/* Tall Bento Card */}
          <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between md:row-span-2">
            <div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.03em]">Instant Time Travel</h3>
              <p className="text-[#666] text-[0.95rem] leading-relaxed">
                Catastrophic errors are a thing of the past. Aurora lets you rewind your entire codebase to any exact minute in time.
              </p>
            </div>
            <img 
              src="/assets/time_travel.jpg" 
              alt="Rewind circular interface" 
              className="w-full h-auto rounded-[8px] mt-8 border border-[#eaeaea] shadow-md"
            />
          </div>

          {/* Regular Bento Card 1 */}
          <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.03em]">Auto-Pilot Mode</h3>
              <p className="text-[#666] text-[0.95rem] leading-relaxed">
                Activate persistent tracking. Aurora watches your working directory, automatically saving safe snapshots as you edit code.
              </p>
            </div>
          </div>

          {/* Regular Bento Card 2 */}
          <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold mb-3 tracking-[-0.03em]">Deep Integration</h3>
              <p className="text-[#666] text-[0.95rem] leading-relaxed">
                Native integration with Windows Explorer, macOS Finder, and VS Code. Everything works out of the box.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* COMPARISON MATRIX */}
      <section className="bg-[#fafafa] border-y border-[#eaeaea] py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-[2.2rem] md:text-[3.2rem] font-extrabold tracking-[-0.05em] mb-4 text-center">
            Less commands. More flow.
          </h2>
          <p className="text-[1.15rem] text-[#666] text-center max-w-[650px] mx-auto mb-16 leading-relaxed">
            We evaluated version control from first principles. Here is how Aurora compares to the legacy Git workflow.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            
            {/* Git Column */}
            <div className="border border-[#eaeaea] bg-white rounded-[14px] p-10">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-3">Git Legacy</h4>
              <div className="border-b border-[#eaeaea] py-4">
                <h5 className="font-semibold mb-1.5">Staging Confusion</h5>
                <p className="text-[#666] text-sm leading-relaxed">Requires tracking status, staging files manually (git add), and writing commits. Easy to forget files.</p>
              </div>
              <div className="border-b border-[#eaeaea] py-4">
                <h5 className="font-semibold mb-1.5">Detached HEAD</h5>
                <p className="text-[#666] text-sm leading-relaxed">Checking out old states often results in scary terminal warnings and branch misalignments.</p>
              </div>
              <div className="py-4">
                <h5 className="font-semibold mb-1.5">Heavy Setup</h5>
                <p className="text-[#666] text-sm leading-relaxed">Requires complex environment paths, setup executables, and global configurations before initial run.</p>
              </div>
            </div>

            {/* Aurora Column */}
            <div className="border border-black bg-white rounded-[14px] p-10 shadow-xl">
              <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
                Aurora VCS <span className="bg-black text-white px-2 py-0.5 rounded text-[11px]">Evolved</span>
              </h4>
              <div className="border-b border-[#eaeaea] py-4">
                <h5 className="font-semibold mb-1.5">Auto-Pilot Saves</h5>
                <p className="text-[#666] text-sm leading-relaxed">Run `aurora auto` and your work is safely snapshotted in the background. Absolutely zero friction.</p>
              </div>
              <div className="border-b border-[#eaeaea] py-4">
                <h5 className="font-semibold mb-1.5">Time-Travel API</h5>
                <p className="text-[#666] text-sm leading-relaxed">No detached states. Instantly roll back minutes, commits, or states with complete branch integrity.</p>
              </div>
              <div className="py-4">
                <h5 className="font-semibold mb-1.5">Zero Dependency</h5>
                <p className="text-[#666] text-sm leading-relaxed">Comes as a single compiled Go binary. Works out of the box with zero external dependencies.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
