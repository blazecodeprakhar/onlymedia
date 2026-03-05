import { motion } from 'framer-motion';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import CircularCTA from '../components/CircularCTA';

export default function Services() {
    return (
        <main className="min-h-screen bg-light">
            {/* Massive Cinematic Hero Section */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden bg-dark text-white flex items-center justify-center min-h-[70vh]">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40"></div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                    >
                        OUR EXPERTISE
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-6xl md:text-8xl lg:text-[9rem] font-display font-black mb-10 text-white tracking-tight leading-none drop-shadow-2xl"
                    >
                        SERVICES
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto"
                    >
                        <p className="text-xl md:text-[22px] text-white/90 leading-relaxed font-normal">
                            We help brands navigate today's complex media landscape with solutions that combine <span className="font-bold text-white">precision, creativity and performance</span>. From planning to execution, our work is built to deliver <span className="font-bold text-primary">impact at every stage of the customer journey</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Core Capabilities */}
            <WhatWeDo />

            <WhyChooseUs />

            <CircularCTA />
        </main>
    );
}
