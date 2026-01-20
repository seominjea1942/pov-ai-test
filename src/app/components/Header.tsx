import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming this exists, otherwise I'll remove it or create it

const PingCAPLogo = () => (
    <img
        src="/TiDB-Logo-Full-Rev-RGB.svg"
        alt="TiDB Logo"
        className="h-16 w-auto"
    />
);

const NavLink = ({ children, href = "#", hasDropdown = false }: { children: React.ReactNode, href?: string, hasDropdown?: boolean }) => (
    <a
        href={href}
        className="text-[15px] text-white hover:text-white/80 transition-colors flex items-center gap-1 group"
    >
        {children}
        {hasDropdown && (
            <ChevronDown className="w-3.5 h-3.5 text-white/60 group-hover:text-white transition-transform group-hover:rotate-180 duration-200" />
        )}
    </a>
);

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 20;
            setIsScrolled(scrolled);
            document.documentElement.style.setProperty('--header-height', scrolled ? '72px' : '86px');
        };
        // Set initial value
        document.documentElement.style.setProperty('--header-height', window.scrollY > 20 ? '72px' : '86px');
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-black border-[#1F2426] h-[72px]"
            )}
        >
            
                <div className="px-4 lg:px-6 w-full h-full flex items-center justify-between max-w-[1440px] mx-auto">
                    {/* Logo */}
                    <a href="/" className="flex-shrink-0" aria-label="PingCAP Home">
                        <PingCAPLogo />
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 ml-10">
                        <NavLink href="#" >Resources</NavLink>
                        <NavLink href="#" >Self-Check</NavLink>
                        <NavLink href="#">Docs</NavLink>
                    </nav>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-6 ml-auto">
                        <a
                            href="#"
                            className="bg-white text-black px-5 py-2.5 text-[16px] hover:bg-white/90 transition-all flex items-center gap-2 group"
                        >
                            Get Demo Account
                            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </a>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-white"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.3 }}
                        className="fixed inset-0 bg-black z-[60] flex flex-col"
                    >
                        <div className="flex items-center justify-between px-4 h-[86px] border-b border-[#1F2426]">
                            <a href="/" aria-label="PingCAP Home">
                                <PingCAPLogo />
                            </a>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto py-8 px-6 flex flex-col gap-6">
                            <div className="space-y-6">
                                <MobileNavLink>Product</MobileNavLink>
                                <MobileNavLink>Solutions</MobileNavLink>
                                <MobileNavLink>Resources</MobileNavLink>
                                <MobileNavLink>Company</MobileNavLink>
                                <MobileNavLink>Docs</MobileNavLink>
                            </div>

                            <div className="mt-auto space-y-4 pt-8 border-t border-white/10">
                                <a href="#" className="block w-full text-center py-3 bg-white text-black hover:bg-white/90">
                                    Get Demo Account
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};

const MobileNavLink = ({ children }: { children: React.ReactNode }) => (
    <a href="#" className="flex items-center justify-between text-xl text-white py-2 border-b border-white/5">
        {children}
        <ChevronDown className="w-5 h-5 text-white/40 -rotate-90" />
    </a>
);

export default Header;
