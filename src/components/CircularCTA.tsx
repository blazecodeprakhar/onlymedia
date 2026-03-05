import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CircularCTA() {
    return (
        <section className="py-20 md:py-28 bg-primary relative overflow-hidden flex justify-center items-center min-h-[50vh]">
            {/* Background ripple effect */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.15, 0.05, 0.15] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-80 h-80 border border-white/20 rounded-full absolute"
                />
                <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.1, 0.02, 0.1] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="w-[400px] h-[400px] border border-white/20 rounded-full absolute"
                />
                <motion.div
                    animate={{ scale: [1, 2.5, 1], opacity: [0.05, 0, 0.05] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
                    className="w-[600px] h-[600px] border border-white/20 rounded-full absolute"
                />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center">
                <Link to="/contact" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="group relative block mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                        className="w-48 h-48 md:w-56 md:h-56 bg-white rounded-full flex flex-col justify-center items-center shadow-2xl transition-all duration-700 group-hover:scale-110 group-hover:shadow-[0_0_60px_rgba(255,255,255,0.4)] relative overflow-hidden"
                    >
                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-dark transform scale-y-0 origin-bottom transition-transform duration-500 ease-in-out group-hover:scale-y-100 z-0 pointer-events-none"></div>

                        <h2 className="text-3xl md:text-4xl font-display font-black leading-tight text-center px-6 text-dark group-hover:text-white transition-colors duration-500 relative z-10 flex flex-col items-center gap-2">
                            LET'S<br />TALK
                            <span className="text-primary group-hover:text-white transition-all duration-500 group-hover:translate-x-2">
                                <ArrowRight size={32} strokeWidth={3} />
                            </span>
                        </h2>
                    </motion.div>
                </Link>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white/90 text-xl font-light tracking-wide max-w-sm leading-relaxed px-4"
                >
                    Ready to take your brand further? <br />
                    <span className="font-bold text-white">We'd love to chat.</span>
                </motion.p>
            </div>
        </section>
    );
}
