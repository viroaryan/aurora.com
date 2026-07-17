'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';

export const Header: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();

    return (
        <header className="sticky top-0 z-50 h-[80px] flex items-center bg-white/85 backdrop-blur-[15px] border-b border-[#eaeaea]">
            <div className="max-w-[1200px] w-full mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-3 font-extrabold text-[1.4rem] tracking-[-0.04em] text-black">
                    <img 
                        src="/assets/logo.jpg" 
                        alt="Aurora Logo" 
                        className="h-8 w-8 rounded-[4px] object-cover"
                    />
                    <span>Aurora</span>
                </Link>
                
                <nav className="hidden md:flex gap-8 items-center">
                    <Link href="/#features" className="text-sm font-medium text-[#666] hover:text-black transition-colors">
                        {t('nav-features')}
                    </Link>
                    <Link href="/docs" className="text-sm font-medium text-[#666] hover:text-black transition-colors">
                        {t('nav-docs')}
                    </Link>
                    <Link href="/changelog" className="text-sm font-medium text-[#666] hover:text-black transition-colors">
                        {t('nav-changelog')}
                    </Link>
                    <Link href="/blog" className="text-sm font-medium text-[#666] hover:text-black transition-colors">
                        {t('nav-blog')}
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    <select 
                        value={language} 
                        onChange={(e) => setLanguage(e.target.value as 'en' | 'hi')}
                        className="bg-transparent border border-[#eaeaea] rounded-[8px] px-3 py-1 text-[0.8rem] text-[#666] outline-none cursor-pointer hover:border-black hover:text-black transition-all h-10"
                    >
                        <option value="en">English</option>
                        <option value="hi">हिंदी</option>
                    </select>
                    
                    <Link href="/contact" className="hidden sm:inline-flex items-center justify-center h-10 px-5 rounded-[8px] border border-[#eaeaea] text-sm font-medium text-black hover:border-black transition-all">
                        Get Help
                    </Link>
                    
                    <Link href="/download" className="inline-flex items-center justify-center h-10 px-5 rounded-[8px] bg-black text-white text-sm font-medium hover:bg-[#333] hover:shadow-lg transition-all">
                        {t('btn-download')}
                    </Link>
                </div>
            </div>
        </header>
    );
};
export default Header;
