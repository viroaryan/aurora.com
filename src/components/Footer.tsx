'use client';

import React from 'react';
import Link from 'next/link';

export const Footer: React.FC = () => {
    return (
        <footer className="border-t border-[#eaeaea] bg-white py-20 px-6 mt-auto">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
                <div className="md:col-span-1">
                    <div className="flex items-center gap-3 font-bold text-[1.25rem] text-black mb-4">
                        <img 
                            src="/assets/logo.jpg" 
                            alt="Aurora Logo" 
                            className="h-7 w-7 rounded-[4px] object-cover"
                        />
                        <span>Aurora</span>
                    </div>
                    <p className="text-[#666] text-sm leading-relaxed max-w-[250px]">
                        Version control engineered for modern developers. Fast, standalone, and visually elegant.
                    </p>
                </div>
                
                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-black mb-1">Product</h4>
                    <Link href="/download" className="text-sm text-[#666] hover:text-black transition-colors">CLI Download</Link>
                    <Link href="/changelog" className="text-sm text-[#666] hover:text-black transition-colors">Changelog</Link>
                    <Link href="/docs" className="text-sm text-[#666] hover:text-black transition-colors">VCS Extension</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-black mb-1">Resources</h4>
                    <Link href="/docs" className="text-sm text-[#666] hover:text-black transition-colors">Documentation</Link>
                    <Link href="/docs" className="text-sm text-[#666] hover:text-black transition-colors">User Guide</Link>
                    <Link href="/architecture" className="text-sm text-[#666] hover:text-black transition-colors">System Architecture</Link>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-black mb-1">Company</h4>
                    <Link href="/blog" className="text-sm text-[#666] hover:text-black transition-colors">Blog</Link>
                    <Link href="/careers" className="text-sm text-[#666] hover:text-black transition-colors">Careers</Link>
                    <a href="https://github.com/viroaryan/aurora.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#666] hover:text-black transition-colors">GitHub</a>
                </div>

                <div className="flex flex-col gap-4">
                    <h4 className="text-sm font-semibold text-black mb-1">Legal</h4>
                    <Link href="/privacy" className="text-sm text-[#666] hover:text-black transition-colors">Privacy Policy</Link>
                    <Link href="/license" className="text-sm text-[#666] hover:text-black transition-colors">MIT License</Link>
                </div>
            </div>
            
            <div className="max-w-[1200px] mx-auto mt-20 pt-8 border-t border-[#eaeaea] flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-[#888]">
                <div>&copy; 2026 Aurora Inc. All rights reserved.</div>
                <div className="flex gap-6">
                    <a href="https://github.com/viroaryan/aurora.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
                    <Link href="/contact" className="hover:text-black transition-colors">Contact</Link>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
