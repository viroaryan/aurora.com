'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Changelog() {
  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-4">Changelog</h1>
            <p className="text-xl text-[#666]">Track all the latest updates, fixes, and engine performance metrics of Aurora.</p>
        </div>

        <div className="flex flex-col gap-16">
            {/* Entry 1 */}
            <div className="flex flex-col md:flex-row gap-10">
                <div className="w-[150px] shrink-0 font-semibold text-[#888] text-sm md:text-base pt-1">July 17, 2026</div>
                <div className="flex-1">
                    <h2 className="text-3xl font-extrabold tracking-[-0.03em] mb-4">
                      Aurora v1.0.0 <span className="font-normal text-[#999] text-xl ml-2">(Official Release)</span>
                    </h2>
                    <p className="text-lg text-[#444] leading-relaxed mb-6">
                      The official public release of the Aurora VCS. Bringing full standalone local version control with deep OS shells and VS Code synchronization bridges.
                    </p>
                    <ul className="list-none flex flex-col gap-3">
                        <li className="text-base text-[#444] flex gap-2.5 items-start before:content-['•'] before:text-[#7928ca] before:text-lg before:leading-none">
                          <strong>Windows Native Installer</strong>: Setup professional GUI wizard with custom checkboxes for Explorer context triggers, path bindings, and desktop shell icons.
                        </li>
                        <li className="text-base text-[#444] flex gap-2.5 items-start before:content-['•'] before:text-[#7928ca] before:text-lg before:leading-none">
                          <strong>Command Playground Improvements</strong>: Added detailed error handling inside <code>aurora publish</code> to prompt network status clearly.
                        </li>
                        <li className="text-base text-[#444] flex gap-2.5 items-start before:content-['•'] before:text-[#7928ca] before:text-lg before:leading-none">
                          <strong>Performance Tuning</strong>: Compressed Blob storage overhead by 12% utilizing optimal zlib compression level flags in Go.
                        </li>
                    </ul>
                </div>
            </div>

            {/* Entry 2 */}
            <div className="flex flex-col md:flex-row gap-10 border-t border-[#eaeaea] pt-16">
                <div className="w-[150px] shrink-0 font-semibold text-[#888] text-sm md:text-base pt-1">June 15, 2026</div>
                <div className="flex-1">
                    <h2 className="text-3xl font-extrabold tracking-[-0.03em] mb-4">
                      Aurora v0.9.0 <span className="font-normal text-[#999] text-xl ml-2">(Beta Release)</span>
                    </h2>
                    <p className="text-lg text-[#444] leading-relaxed mb-6">
                      First developer beta introducing time-travel and auto-pilot daemon configurations. Focused heavily on version stability.
                    </p>
                    <ul className="list-none flex flex-col gap-3">
                        <li className="text-base text-[#444] flex gap-2.5 items-start before:content-['•'] before:text-[#7928ca] before:text-lg before:leading-none">
                          <strong>Rewind API</strong>: Time-based state rewinding daemon implemented (<code>aurora rewind &lt;mins&gt;</code>).
                        </li>
                        <li className="text-base text-[#444] flex gap-2.5 items-start before:content-['•'] before:text-[#7928ca] before:text-lg before:leading-none">
                          <strong>Auto-Pilot Engine</strong>: Created background watchdogs to capture project states on directory change.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
