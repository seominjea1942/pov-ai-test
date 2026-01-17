import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils'; // Assuming this exists, otherwise I'll remove it or create it

const PingCAPLogo = () => (
    <svg viewBox="0 0 134 32" className="h-8 w-auto fill-current text-white">
        <path d="M16.03 14.124h-2.583v3.29c0 3.235 1.737 4.908 4.606 4.908 1.48 0 2.508-.346 3.06-.69l.525 2.158c-.687.433-2.074.881-4.148.881-4.708 0-7.14-2.883-7.14-7.854V14.124H8.258v-2.383h2.092V7.77l3.097-.936v4.908h2.583v2.382Zm12.012 10.337h-3.097V8.046h3.097v16.415Zm-1.549-18.78c-1.077 0-1.872-.79-1.872-1.838 0-1.058.795-1.847 1.872-1.847 1.068 0 1.864.79 1.864 1.847 0 1.05-.796 1.839-1.864 1.839Zm15.842 18.78h-3.097V8.046h3.097v1.864c1.13-1.42 2.92-2.14 4.882-2.14 4.542 0 7.82 3.518 7.82 8.355 0 4.827-3.235 8.337-7.848 8.337-1.864 0-3.619-.68-4.753-2.057v2.056Zm3.373-8.19c0 3.192 1.956 5.674 5.03 5.674 3.036 0 4.965-2.508 4.965-5.674 0-3.175-1.92-5.675-4.965-5.675-3.083 0-5.03 2.527-5.03 5.675Zm26.115 8.19h-3.097V8.046h3.097V19.46c0 1.625.799 2.535 2.215 2.535.414 0 .764-.064 1.05-.156l.45 2.37c-.506.183-1.39.317-2.316.317-2.99 0-4.496-1.865-4.496-4.991v-5.41H63.63v-2.382h2.583V7.77l3.097-.936v4.908h3.355v2.382h-3.355v6.526c0 .727.323 1.086.948 1.086.203 0 .396-.028.534-.064l.028-2.383v2.446l-2.008 2.766 2.007-.008Zm14.286 0h-3.093l5.056-16.416h3.402l5.075 16.416h-3.227l-1.077-3.794h-5.066l-1.07 3.794Zm1.753-6.195h3.697l-1.828-6.398-1.869 6.398Zm18.96 6.388c-1.87 0-3.52-.71-4.754-2.057v6.628h-3.097V8.046h3.097v1.864c1.13-1.42 2.91-2.14 4.882-2.14 4.542 0 7.82 3.518 7.82 8.355 0 4.827-3.235 8.337-7.949 8.337Zm-1.666-8.19c0 3.192 1.966 5.674 5.03 5.674 3.035 0 4.964-2.508 4.964-5.674 0-3.174-1.92-5.674-4.965-5.674-3.073 0-5.029 2.527-5.029 5.674z" />
        <path d="M125.795 8.232l-5.748 3.315v6.625l5.748 3.323 5.74-3.323V11.547l-5.74-3.315zm-.008-2.88l8.232 4.753v9.507l-8.232 4.753-8.24-4.753v-9.507l8.24-4.753h.008z" fill="#ED2525" />
    </svg>
);

const NavLink = ({ children, href = "#", hasDropdown = false }: { children: React.ReactNode, href?: string, hasDropdown?: boolean }) => (
    <a
        href={href}
        className="text-[15px] font-medium text-white hover:text-white/80 transition-colors flex items-center gap-1 group"
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
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-black border-[#1F2426]",
                isScrolled ? "h-[72px]" : "h-[86px]"
            )}
        >
            <div className="container mx-auto px-6 h-full flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex-shrink-0" aria-label="PingCAP Home">
                    <PingCAPLogo />
                </a>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex items-center gap-8 ml-10">
                    <NavLink href="#" hasDropdown>Product</NavLink>
                    <NavLink href="#" hasDropdown>Solutions</NavLink>
                    <NavLink href="#" hasDropdown>Resources</NavLink>
                    <NavLink href="#" hasDropdown>Company</NavLink>
                    <NavLink href="#">Docs</NavLink>
                </nav>

                {/* Right Actions */}
                <div className="hidden lg:flex items-center gap-6 ml-auto">
                    <a href="#" className="text-[15px] font-medium text-white hover:text-white/80 transition-colors">
                        Sign In
                    </a>
                    <a
                        href="#"
                        className="bg-white text-black px-5 py-2.5 rounded text-[15px] font-medium hover:bg-white/90 transition-all flex items-center gap-2 group"
                    >
                        Start for Free
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
                        <div className="flex items-center justify-between px-6 h-[86px] border-b border-[#1F2426]">
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
                                <a href="#" className="block w-full text-center py-3 text-white font-medium border border-white/20 rounded hover:bg-white/5">
                                    Sign In
                                </a>
                                <a href="#" className="block w-full text-center py-3 bg-white text-black font-medium rounded hover:bg-white/90">
                                    Start for Free
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
    <a href="#" className="flex items-center justify-between text-xl font-medium text-white py-2 border-b border-white/5">
        {children}
        <ChevronDown className="w-5 h-5 text-white/40 -rotate-90" />
    </a>
);

export default Header;
