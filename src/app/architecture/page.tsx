'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Architecture() {
  return (
    <>
      <Header />
      <div className="max-w-[800px] mx-auto px-6 py-20">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-6">System Architecture</h1>
        <p className="text-xl text-[#666] mb-12">Deep dive into Aurora's high-performance Directed Acyclic Graph (DAG) metadata model.</p>

        <div className="text-[1.1rem] text-[#444] leading-relaxed flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-black mt-6 border-b border-[#eaeaea] pb-2">1. Object Storage Pipeline</h2>
            <p>Every file tracked by Aurora is processed through a three-stage pipeline to ensure data integrity and minimal disk usage:</p>
            <ul className="list-none flex flex-col gap-3">
                <li className="flex gap-2 items-start before:content-['→'] before:text-[#0070f3] before:font-bold">
                  <strong>Hashing</strong>: Standard SHA-256 checksums are calculated based on the raw file bytes, creating a unique 64-character identifier.
                </li>
                <li className="flex gap-2 items-start before:content-['→'] before:text-[#0070f3] before:font-bold">
                  <strong>Compression</strong>: The payload is compressed using the standard <code>zlib</code> compression algorithm before disk write.
                </li>
                <li className="flex gap-2 items-start before:content-['→'] before:text-[#0070f3] before:font-bold">
                  <strong>Storage</strong>: The compressed object is stored inside the local metadata repository under the <code>.aurora/objects/</code> directory.
                </li>
            </ul>

            <h2 className="text-2xl font-bold text-black mt-6 border-b border-[#eaeaea] pb-2">2. Database Directory Tree</h2>
            <p>Aurora manages your historical states using a simple and readable local database layout:</p>
            <pre className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-5 font-mono text-sm overflow-x-auto mb-6">
              <code>{`.aurora/
├── index            # Holds current tracking status and SHA mappings
├── HEAD             # Points to the active branch timeline
├── refs/
│   └── heads/       # Holds latest snapshot hashes for each branch
└── objects/
    └── [hash]       # Compressed file contents (blobs)`}</code>
            </pre>

            <h2 className="text-2xl font-bold text-black mt-6 border-b border-[#eaeaea] pb-2">3. Zero-Dependency Go Engine</h2>
            <p>By compiling directly into a static Go binary, Aurora bypasses the need for local Git installations or environment configurations. It manages network sockets and HTTPS authentications directly with GitHub APIs using native transport layers.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
