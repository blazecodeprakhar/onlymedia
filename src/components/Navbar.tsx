import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
    isScrolled: boolean;
}

export default function Navbar({ isScrolled }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact', href: '/contact' },
    ];

    const navClass = isScrolled || !isHomePage
        ? 'bg-dark/90 backdrop-blur-md py-4 shadow-lg text-white'
        : 'bg-transparent py-6 text-white';

    return (
        <>
            <header
                className={`fixed w-full z-50 transition-all duration-300 ${navClass}`}
                style={{ top: isScrolled ? 0 : 'auto', position: isScrolled ? 'fixed' : 'absolute' }}
            >
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <Link to="/" className="flex items-center">
                        <img src="https://onlymedia.in/wp-content/uploads/2025/07/OM1Final-1.png" alt="OnlyMedia Logo" className="h-10 md:h-12 object-contain" />
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="font-medium text-sm tracking-wide uppercase hover:text-primary transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                        <Link to="/contact" className="bg-primary hover:bg-white hover:text-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors flex items-center gap-2">
                            Get in Touch <ArrowRight size={16} />
                        </Link>
                    </nav>

                    {/* Mobile Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-dark text-white pt-24 px-6 md:hidden flex flex-col items-center"
                    >
                        <nav className="flex flex-col items-center gap-8 text-2xl font-display font-bold w-full">
                            {navLinks.map((link) => (
                                <Link key={link.name} to={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/10 w-full text-center pb-4 hover:text-primary transition-colors">
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full bg-primary py-4 rounded-full mt-4 flex justify-center items-center gap-2">
                                Get in Touch <ArrowRight size={20} />
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
