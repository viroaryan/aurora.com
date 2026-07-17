'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Blog() {
  return (
    <>
      <Header />
      <div className="max-w-[900px] mx-auto px-6 py-20">
        <div className="text-center mb-20">
            <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-4">The Aurora Blog</h1>
            <p className="text-xl text-[#666]">Insights, technical deep dives, and product updates from the Aurora core team.</p>
        </div>

        <div className="flex flex-col gap-16">
            {/* Post 1 */}
            <article className="border-b border-[#eaeaea] pb-16">
                <div className="text-xs font-semibold text-[#888] mb-3 uppercase tracking-wider">July 17, 2026 &bull; Architecture Deep Dive</div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em] mb-4 hover:text-[#0070f3] transition-colors cursor-pointer">
                  Under the Hood: Built-in Go-Git Architecture
                </h2>
                <p className="text-lg text-[#444] leading-relaxed mb-5">
                  We built Aurora VCS to be entirely standalone, freeing developers from the dependency of a local Git installation. Learn how our custom zlib compression pipelines and SHA-256 DAG object model make versioning lightning fast.
                </p>
                <a href="#" className="font-semibold text-sm text-black hover:text-[#0070f3] transition-colors inline-flex items-center gap-1">
                  Read article &rarr;
                </a>
            </article>

            {/* Post 2 */}
            <article className="border-b border-[#eaeaea] pb-16">
                <div className="text-xs font-semibold text-[#888] mb-3 uppercase tracking-wider">June 28, 2026 &bull; Slogans & UX</div>
                <h2 className="text-3xl font-extrabold tracking-[-0.03em] mb-4 hover:text-[#0070f3] transition-colors cursor-pointer">
                  Why Version Control Needs to Evolve
                </h2>
                <p className="text-lg text-[#444] leading-relaxed mb-5">
                  Version control is a core pillar of development, yet the tools we use have barely changed in two decades. Staging area mismatches and detached HEAD states slow teams down. We explore why we created Auto-Pilot and Time-Travel APIs for the command line.
                </p>
                <a href="#" className="font-semibold text-sm text-black hover:text-[#0070f3] transition-colors inline-flex items-center gap-1">
                  Read article &rarr;
                </a>
            </article>
        </div>
      </div>
      <Footer />
    </>
  );
}
