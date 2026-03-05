import { motion } from 'framer-motion';

export default function CircularCTA() {
    return (
        <section className="py-32 bg-primary relative overflow-hidden flex justify-center items-center h-[50vh] min-h-[400px]">
            {/* Background ripple effect */}
            <div className="absolute inset-0 z-0 flex justify-center items-center pointer-events-none">
                <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    className="w-96 h-96 border border-white/20 rounded-full absolute"
                />
                <motion.div
                    animate={{ scale: [1, 2, 1], opacity: [0.2, 0.05, 0.2] }}
                    transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 1 }}
                    className="w-[500px] h-[500px] border border-white/20 rounded-full absolute"
                />
                <motion.div
                    animate={{ scale: [1, 2.5, 1], opacity: [0.1, 0, 0.1] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 2 }}
                    className="w-[700px] h-[700px] border border-white/20 rounded-full absolute"
                />
            </div>

            <div className="relative z-10 text-center flex flex-col items-center group cursor-pointer">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="w-64 h-64 bg-white text-primary rounded-full flex flex-col justify-center items-center shadow-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-dark group-hover:text-white"
                >
                    <h2 className="text-3xl font-display font-black leading-tight text-center px-8">
                        Get in<br />touch
                    </h2>
                </motion.div>
                <p className="mt-12 text-white/90 text-2xl font-light tracking-wide max-w-md">
                    Ready to take your brand further? We'd love to chat.
                </p>
            </div>
        </section>
    );
}

