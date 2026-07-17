'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Download() {
  return (
    <>
      <Header />
      <section className="max-w-[1000px] mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl font-extrabold tracking-[-0.05em] mb-4">Download Aurora</h1>
        <p className="text-xl text-[#666] max-w-[700px] mx-auto">Get the latest production-ready release of Aurora VCS. Safe, standalone binaries compiled for multiple platforms.</p>
      </section>

      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Windows Card */}
            <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between text-center gap-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Windows</h3>
                    <p className="text-sm text-[#666] mb-6">Windows 10, 11 (64-bit)</p>
                    <div className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-4 font-mono text-[0.85rem] text-left color-[#333] mb-6">
                        # Install via Powershell CLI<br />
                        iwr https://auroravcs.com/install.ps1 | iex
                    </div>
                </div>
                <a href="https://github.com/viroaryan/aurora.com/releases/download/v1.0.0/Aurora-Setup-Professional.exe" className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] bg-black text-white text-sm font-medium hover:bg-[#333] hover:shadow-lg transition-all w-full">
                    Download Setup.exe
                </a>
                <p className="text-[0.8rem] text-[#7928ca] font-semibold text-center">⚡ Setup wizard includes Start Menu & Context Integration</p>
            </div>
            
            {/* macOS Card */}
            <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between text-center gap-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">macOS</h3>
                    <p className="text-sm text-[#666] mb-6">Apple Silicon (M1, M2, M3) & Intel</p>
                    <div className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-4 font-mono text-[0.85rem] text-left color-[#333] mb-6">
                        # Install via Brew (Coming Soon)<br />
                        brew install auroravcs/tap/aurora
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <a href="https://github.com/viroaryan/aurora.com/releases/download/v1.0.0/aurora-macos-arm64" className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] border border-[#eaeaea] text-sm font-medium hover:border-black transition-all w-full">
                        Apple Silicon Binary
                    </a>
                    <a href="https://github.com/viroaryan/aurora.com/releases/download/v1.0.0/aurora-macos-amd64" className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] border border-[#eaeaea] text-sm font-medium hover:border-black transition-all w-full">
                        Intel Mac Binary
                    </a>
                </div>
            </div>

            {/* Linux Card */}
            <div className="border border-[#eaeaea] rounded-[14px] p-10 bg-white hover:shadow-md hover:border-black transition-all flex flex-col justify-between text-center gap-6">
                <div>
                    <h3 className="text-2xl font-bold mb-2">Linux</h3>
                    <p className="text-sm text-[#666] mb-6">Debian, Ubuntu, RHEL, Fedora</p>
                    <div className="bg-[#fafafa] border border-[#eaeaea] rounded-[8px] p-4 font-mono text-[0.85rem] text-left color-[#333] mb-6">
                        # Install via curl shell script<br />
                        curl -sL https://auroravcs.com/install.sh | bash
                    </div>
                </div>
                <a href="https://github.com/viroaryan/aurora.com/releases/download/v1.0.0/aurora-linux-amd64" className="inline-flex items-center justify-center h-12 px-6 rounded-[8px] border border-[#eaeaea] text-sm font-medium hover:border-black transition-all w-full">
                    Download Linux Binary
                </a>
            </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
