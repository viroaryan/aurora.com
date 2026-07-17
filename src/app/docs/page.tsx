'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Docs() {
  return (
    <>
      <Header />
      <div className="max-w-[1200px] mx-auto px-6 py-16 flex flex-col md:flex-row gap-16">
        
        {/* SIDEBAR */}
        <aside className="w-full md:w-[240px] shrink-0 sticky top-[120px] h-[calc(100vh-140px)] overflow-y-auto pr-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">Getting Started</h4>
          <ul className="flex flex-col gap-3 mb-8 list-none">
            <li><a href="#intro" className="text-sm text-[#666] font-semibold hover:text-black transition-colors active text-black">Introduction</a></li>
            <li><a href="#installation" className="text-sm text-[#666] hover:text-black transition-colors">Installation Guide</a></li>
            <li><a href="#concepts" className="text-sm text-[#666] hover:text-black transition-colors">Core Concepts</a></li>
          </ul>
          
          <h4 className="text-xs font-semibold uppercase tracking-wider text-black mb-4">CLI Reference</h4>
          <ul className="flex flex-col gap-3 list-none">
            <li><a href="#commands-basic" className="text-sm text-[#666] hover:text-black transition-colors">Basic Operations</a></li>
            <li><a href="#commands-advanced" className="text-sm text-[#666] hover:text-black transition-colors">Timeline Management</a></li>
            <li><a href="#commands-auto" className="text-sm text-[#666] hover:text-black transition-colors">Auto-Pilot & Travel</a></li>
            <li><a href="#commands-cloud" className="text-sm text-[#666] hover:text-black transition-colors">Cloud Bridge</a></li>
          </ul>
        </aside>

        {/* DOCS CONTENT */}
        <main className="flex-1 max-w-[800px]">
          <section id="intro">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-[-0.05em] mb-6">Introduction</h1>
            <p className="text-lg text-[#444] mb-6 leading-relaxed">
              Welcome to the official Aurora documentation. Aurora is a production-grade, hyper-fast version control system engineered in Go to eliminate terminal fatigue and simplify repository timelines.
            </p>
            <p className="text-lg text-[#444] mb-6 leading-relaxed">
              Unlike traditional version control tools that force developers to manage complicated staging index flows (such as <code>git add</code>, <code>git commit</code>, <code>git stash</code>), Aurora works natively on transparent objects using high-performance cryptographic state storage.
            </p>
          </section>

          <section id="installation" className="mt-12">
            <h2 className="text-2xl font-bold tracking-[-0.03em] border-b border-[#eaeaea] pb-3 mb-6">Installation Guide</h2>
            <p className="text-base text-[#444] mb-6">
              To set up Aurora, download the binary or use the native setup package for your target operating system.
            </p>
            <h3 className="text-lg font-semibold mb-3">Windows (Powershell)</h3>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>iwr https://auroravcs.com/install.ps1 | iex</code>
            </pre>
            
            <h3 className="text-lg font-semibold mb-3">macOS / Linux (Bash)</h3>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>curl -sL https://auroravcs.com/install.sh | bash</code>
            </pre>
          </section>

          <section id="concepts" className="mt-12">
            <h2 className="text-2xl font-bold tracking-[-0.03em] border-b border-[#eaeaea] pb-3 mb-6">Core Concepts</h2>
            <p className="text-base text-[#444] mb-6">
              Aurora relies on a Directed Acyclic Graph (DAG) state model similar to other distributed VCS solutions but introduces automation triggers at the file system level.
            </p>
            <p className="text-base text-[#444] mb-6">
              <strong>Blobs</strong>: Compressed file contents using standard zlib compression.<br />
              <strong>Snapshots</strong>: Commit trees representing absolute states of your workspace. Snapshots are mapped securely via SHA-256 signatures.
            </p>
          </section>

          <section id="commands-basic" className="mt-12">
            <h2 className="text-2xl font-bold tracking-[-0.03em] border-b border-[#eaeaea] pb-3 mb-6">CLI Reference - Basic Operations</h2>
            <p className="text-base text-[#444] mb-6">
              The standard developer cycle requires minimal command invocation.
            </p>
            
            <h3 className="text-lg font-semibold mb-3"><code>aurora start</code></h3>
            <p className="text-base text-[#444] mb-3">Initializes an empty repository in the current working directory, setting up the local metadata structures.</p>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>$ aurora start<br />&gt; Initialized empty repository in .aurora/</code>
            </pre>

            <h3 className="text-lg font-semibold mb-3"><code>aurora track [file]</code></h3>
            <p className="text-base text-[#444] mb-3">Includes a target file inside the metadata index for future versioning tracking.</p>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>$ aurora track main.go<br />&gt; Added main.go to tracking index</code>
            </pre>

            <h3 className="text-lg font-semibold mb-3"><code>aurora save [message]</code></h3>
            <p className="text-base text-[#444] mb-3">Takes a cryptographic snapshot of all currently tracked files and records it to the project history.</p>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>$ aurora save "Initial version"<br />&gt; Saved state: [main 7ea94bc] Initial version</code>
            </pre>
          </section>
        </main>

      </div>
      <Footer />
    </>
  );
}
