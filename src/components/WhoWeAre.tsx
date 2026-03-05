import { motion } from 'framer-motion';

export default function WhoWeAre() {
    return (
        <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
            {/* Background Watermark */}
            <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-black/5 whitespace-nowrap select-none pointer-events-none z-0">
                WHO WE ARE
            </h2>

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 md:gap-24 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-full text-sm mb-6 uppercase tracking-wider">
                            About Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-8">
                            OnlyMedia is a media solutions company where <span className="text-primary">data meets impact.</span>
                        </h2>
                        <p className="text-lg md:text-xl text-dark/70 mb-6 leading-relaxed">
                            We transform audience insights into powerful campaigns across digital, transit, and emerging platforms.
                        </p>
                        <p className="text-lg md:text-xl text-dark/70 mb-10 leading-relaxed font-medium">
                            With a blend of strategy, creativity, and execution depth, we help brands connect with the right people and drive measurable growth.
                        </p>

                        <div className="pl-6 border-l-4 border-primary italic text-2xl font-display text-dark/80 max-w-lg mb-10">
                            "Your goals. Our strategy. One powerful media partnership."
                        </div>

                        <button className="bg-dark hover:bg-primary text-white px-8 py-4 rounded-full font-bold transition-colors">
                            Read Our Story
                        </button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="md:w-1/2"
                    >
                        <div className="relative">
                            {/* Image decoration */}
                            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] -rotate-3 transform z-0"></div>

                            <div className="rounded-[2rem] overflow-hidden relative z-10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                                    alt="Team analyzing data"
                                    className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            {/* Floating Stat Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                                className="absolute -bottom-8 -left-8 bg-white p-8 rounded-3xl shadow-xl z-20 border border-gray-100"
                            >
                                <div className="text-4xl font-bold font-display text-primary mb-2">10+</div>
                                <div className="text-sm text-dark/60 font-medium uppercase tracking-wider">Years of Data-Driven<br />Media Excellence</div>
                            </motion.div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}

