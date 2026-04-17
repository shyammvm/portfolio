import { useState, useEffect } from 'react';
import { Menu, X, Youtube, Instagram, Linkedin, Github } from 'lucide-react';
import { motion } from 'framer-motion'; // Added Framer Motion for the sliding line
import logo from '../assets/Logo.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0); // Tracks current page

    // Automatically update the active link when scrolling
    useEffect(() => {
        const container = document.getElementById('main-scroll-container');
        if (!container) return;

        const handleScroll = () => {
            // NOTE: If you switched to horizontal scrolling, change 'scrollTop' to 'scrollLeft' 
            // and 'innerHeight' to 'innerWidth'
            const scrollPos = container.scrollTop;
            const index = Math.round(scrollPos / window.innerHeight);
            setActiveIndex(index);
        };

        container.addEventListener('scroll', handleScroll);
        return () => container.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (index) => {
        const container = document.getElementById('main-scroll-container');
        if (container) {
            container.scrollTo({
                top: index * window.innerHeight, // Change 'top' to 'left' if horizontal
                behavior: 'smooth'
            });
        }
        setActiveIndex(index);
        setIsOpen(false);
    };

    // Removed the Lucide icons, we will use text ">>" in the render
    const navLinks = [
        { name: 'HOME', index: 0 },
        { name: 'PROJECTS', index: 1 },
        { name: 'GALLERY', index: 2 },
        { name: 'BLOG', index: 3 },
        { name: 'BIO', index: 4 },
    ];

    const socialLinks = [
        { name: 'Instagram', href: 'https://www.instagram.com/shyam.mvm', icon: <Instagram size={20} /> },
        { name: 'YouTube', href: 'https://www.youtube.com/@shyammohanvm9089', icon: <Youtube size={20} /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shyammohanvm/', icon: <Linkedin size={20} /> },
        { name: 'GitHub', href: 'https://github.com/shyammvm', icon: <Github size={20} /> },
    ];

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-6 h-12 flex items-center justify-between">

                {/* Aesthetic Logo & Socials */}
                <div className="flex items-center gap-4">
                    <button onClick={() => scrollToSection(0)} className="flex items-center gap-2 group cursor-pointer border-none bg-transparent">
                        <div className="w-8 h-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-light tracking-tight text-slate-500">
                            SHYAM<span className="text-red-600 font-bold">.</span>MVM
                        </span>
                    </button>

                    <div className="hidden lg:block w-[1px] h-5 bg-slate-300"></div>

                    {/* Desktop Social Links */}
                    <div className="hidden lg:flex items-center gap-3">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-red-600 hover:text-slate-900 transition-colors"
                                title={link.name}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Desktop Links (Updated with >> and Underline) */}
                <div className="hidden md:flex items-center gap-4">
                    {navLinks.map((link) => {
                        const isActive = activeIndex === link.index;

                        return (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.index)}
                                className={`relative group flex items-center gap-2 text-xs font-medium transition-colors border-none bg-transparent cursor-pointer py-2
                                    ${isActive ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'}
                                `}
                            >
                                {link.name}

                                {/* The Sliding Underline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="navUnderline"
                                        className="absolute -bottom-[2px] left-0 w-full h-[2px] bg-red-600 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => {
                        const isActive = activeIndex === link.index;

                        return (
                            <button
                                key={link.name}
                                onClick={() => scrollToSection(link.index)}
                                className={`group flex items-center gap-3 text-xs font-medium transition-colors border-none bg-transparent cursor-pointer text-left
                                    ${isActive ? 'text-slate-900' : 'text-slate-500'}
                                `}
                            >
                                <span className={`font-mono tracking-tighter text-xs
                                    ${isActive ? 'text-red-600' : 'text-slate-300'}
                                `}>
                                    {`>>`}
                                </span>
                                {link.name}
                            </button>
                        );
                    })}
                    <div className="flex gap-6 pt-4 border-t border-slate-50">
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-red-600 hover:text-slate-900 transition-colors"
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}