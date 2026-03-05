import { motion } from 'framer-motion';
import { LineChart, Hexagon, Zap, Crosshair, BarChart2 } from 'lucide-react';

const REASONS = [
    {
        title: "Outcome-Driven Approach",
        desc: "Every campaign is designed to deliver tangible business results from lower CAC to higher ROAS.",
        icon: LineChart,
        color: "bg-blue-500",
    },
    {
        title: "Deep Platform Expertise",
        desc: "Preferred partners across Meta, Google, YouTube, DV360 and affiliate ecosystems with a proven track record of performance.",
        icon: Hexagon,
        color: "bg-indigo-500",
    },
    {
        title: "Online + Offline Integration",
        desc: "From transit media to digital performance, we combine physical and digital touchpoints for full-funnel impact.",
        icon: Crosshair,
        color: "bg-purple-500",
    },
    {
        title: "Precision Audience Solutions",
        desc: "We use data-backed audience modeling and behavioral segmentation to reach the right users at the right time with no media wastage.",
        icon: Zap,
        color: "bg-pink-500",
    },
    {
        title: "Always-On Optimization",
        desc: "Real-time reporting, actionable insights and performance tuning — so your media never stops improving.",
        icon: BarChart2,
        color: "bg-orange-500",
    }
];

export default function WhyChooseUs() {
    return (
        <section className="py-24 md:py-32 bg-dark text-white relative">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 hidden md:block"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16 md:gap-24">

                {/* Sticky Header */}
                <div className="md:w-1/2 md:sticky md:top-40 md:h-[max-content] self-start pt-8 md:pt-12">
                    <div className="inline-block px-5 py-2 bg-primary/10 text-primary font-bold rounded-full text-xs md:text-sm mb-6 uppercase tracking-widest border border-primary/20 shadow-[0_0_20px_rgba(30,112,246,0.15)]">
                        OUR EDGE
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black leading-none mb-8 tracking-tight text-white drop-shadow-md">
                        Why <br className="hidden md:block" />Choose Us
                    </h2>
                    <p className="text-xl md:text-[22px] text-white/70 font-light max-w-md leading-relaxed">
                        Data-Driven Decision Making. Custom Strategies. Strong Platform Partnerships. End-to-End Execution.
                    </p>
                </div>

                {/* Scrollable Cards */}
                <div className="md:w-1/2 flex flex-col gap-6 md:gap-8 pb-32">
                    {REASONS.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-50px", once: true }}
                                transition={{ duration: 0.6 }}
                                className="bg-[#121212] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_10px_40px_rgba(0,0,0,0.5)] relative overflow-hidden group"
                                style={{ position: 'sticky', top: `calc(${120 + idx * 30}px)` }}
                            >
                                {/* Decorative Glow */}
                                <div className={`absolute -top-20 -left-20 w-64 h-64 ${reason.color} opacity-10 rounded-full blur-[80px] transition-opacity duration-500 group-hover:opacity-20`}></div>

                                <div className="relative z-10">
                                    <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center mb-6 md:mb-8 ${reason.color} bg-opacity-20 text-white shadow-inner`}>
                                        <Icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
                                    </div>
                                    <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 tracking-tight drop-shadow-md text-white/90 group-hover:text-white transition-colors">{reason.title}</h3>
                                    <p className="text-lg text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors">
                                        {reason.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

