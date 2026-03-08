import { useState } from 'react';
import { Menu, X, Camera, Youtube, BookOpen, User, FolderCode, Instagram, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Home', to: '/', icon: <User size={18} /> },
        { name: 'Bio', to: '/bio', icon: <User size={18} /> },
        { name: 'Projects', to: '/projects', icon: <FolderCode size={18} /> },
        { name: 'Gallery', to: '/gallery', icon: <Camera size={18} /> },
        { name: 'Blog', to: '/blog', icon: <BookOpen size={18} /> },
    ];

    const socialLinks = [
        { name: 'Instagram', href: 'https://www.instagram.com/shyam.mvm', icon: <Instagram size={20} /> },
        { name: 'YouTube', href: 'https://www.youtube.com/@shyammohanvm9089', icon: <Youtube size={20} /> },
        { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shyammohanvm/', icon: <Linkedin size={20} /> },
        { name: 'GitHub', href: 'https://github.com/shyammvm', icon: <Github size={20} /> },
    ];

    return (
        <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">

                {/* Aesthetic Logo & Socials */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex items-center gap-2 group cursor-pointer">
                        <div className="w-10 h-10 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-xl font-light tracking-tight text-slate-800">
                            SHYAM<span className="text-red-600 font-bold">.</span>MVM
                        </span>
                    </Link>

                    {/* Desktop Social Links */}
                    <div className="hidden lg:flex items-center gap-4 border-l border-slate-200 pl-6 ml-2">
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

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <span className="text-red-600 group-hover:text-slate-900 transition-colors">
                                {link.icon}
                            </span>
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-b px-6 py-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.to}
                            onClick={() => setIsOpen(false)}
                            className="group flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <span className="text-red-600 group-hover:text-slate-900 transition-colors">
                                {link.icon}
                            </span>
                            {link.name}
                        </Link>
                    ))}
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
