import { motion } from 'framer-motion';

export default function Hero() {
    const container: any = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
            }
        }
    };

    const item: any = {
        hidden: { y: 60, opacity: 0 },
        show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
    };

    return (
        <section className="relative h-screen w-full flex items-center bg-dark overflow-hidden">
            {/* Background with abstract effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-dark via-dark to-[#002255] z-10 opacity-90"></div>
                {/* Abstract glowing orb */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary rounded-full blur-[150px] opacity-20 animate-pulse"></div>

                {/* We would replace this image placeholder with an actual video/image from assets later */}
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-20">
                <motion.div
                    variants={container}
                    initial="hidden"
                    animate="show"
                    className="max-w-5xl"
                >
                    <motion.div variants={item} className="mb-6">
                        <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium tracking-widest uppercase text-white inline-block border border-white/20">
                            Media Solutions Company
                        </span>
                    </motion.div>

                    <motion.h1
                        variants={item}
                        className="text-6xl md:text-8xl lg:text-9xl font-black font-display text-white leading-[0.9] tracking-tighter uppercase mb-6"
                    >
                        Targeted <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300">Media</span> <br />
                        <span className="text-white/20 text-stroke-primary font-black lg:text-[6rem]">Measurable Growth</span>
                    </motion.h1>

                    <motion.p
                        variants={item}
                        className="text-xl md:text-2xl text-white/80 max-w-2xl font-light mb-10 leading-relaxed"
                    >
                        We deliver data-driven media solutions that connect brands with the right audiences and drive measurable growth across online and offline touchpoints.
                    </motion.p>

                    <motion.div variants={item} className="flex gap-4">
                        <button className="bg-primary hover:bg-white hover:text-dark text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105">
                            Explore More
                        </button>
                        <button className="px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white/10 transition-all">
                            Our Services
                        </button>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
            >
                <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
                <div className="w-px h-16 bg-white/20 relative overflow-hidden">
                    <motion.div
                        animate={{ top: ['-100%', '100%'] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute left-0 w-full h-1/2 bg-primary"
                    />
                </div>
            </motion.div>
        </section>
    );
}

