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

            <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row gap-16">

                {/* Sticky Header */}
                <div className="md:w-1/2 md:sticky md:top-32 md:h-screen pt-12 self-start">
                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary font-bold rounded-full text-sm mb-6 uppercase tracking-wider backdrop-blur-md border border-primary/20">
                        Our Edge
                    </div>
                    <h2 className="text-5xl md:text-7xl font-display font-black leading-tight mb-8">
                        Why <br className="hidden md:block" />Choose Us
                    </h2>
                    <p className="text-xl md:text-2xl text-white/60 font-light max-w-md leading-relaxed">
                        Data-Driven Decision Making. Custom Strategies. Strong Platform Partnerships. End-to-End Execution.
                    </p>
                </div>

                {/* Scrollable Cards */}
                <div className="md:w-1/2 flex flex-col gap-8 pb-32">
                    {REASONS.map((reason, idx) => {
                        const Icon = reason.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.6, delay: 0.1 * idx }}
                                className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-10 hover:bg-white/10 transition-colors group"
                                style={{ position: 'sticky', top: `calc(${100 + idx * 30}px)` }}
                            >
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${reason.color} bg-opacity-20 text-white`}>
                                    <Icon size={32} className="group-hover:scale-110 transition-transform" />
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-4">{reason.title}</h3>
                                <p className="text-lg text-white/60 leading-relaxed font-light group-hover:text-white/80 transition-colors">
                                    {reason.desc}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

