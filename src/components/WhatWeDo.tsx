import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Users, LayoutTemplate, Link as LinkIcon, ArrowRight } from 'lucide-react';

const SERVICES = [
    {
        id: "media-strategy",
        title: "Media Strategy",
        icon: Target,
        desc: "We design custom media strategies aligned with your business objectives combining channel mix, platform expertise and full-funnel thinking.",
        points: [
            { title: "Business Goal Alignment", desc: "Media mapped directly to growth, efficiency, and brand outcomes." },
            { title: "Platform Strategy", desc: "Choosing the right digital and transit ecosystems to maximize reach." },
            { title: "Cross-funnel Integration", desc: "Connecting awareness, engagement, and conversions into one cohesive path." },
            { title: "Data-led Optimization", desc: "Using real-time insights and measurement to refine strategy and maximize impact." }
        ]
    },
    {
        id: "audience-intelligence",
        title: "Audience Intelligence",
        icon: Users,
        desc: "Our audience solutions are designed to connect your brand with high-intent users through precision targeting, contextual relevance and actionable insights.",
        points: [
            { title: "Transactional & Behavioral Segments", desc: "Targeting based on real purchase patterns and online behavior." },
            { title: "High-intent Cohorts", desc: "Capturing users most likely to convert through precision targeting." },
            { title: "Persona-based Mapping", desc: "Defining audiences by lifestyle, habits, and media consumption." },
            { title: "Interest-driven Modeling", desc: "Building scalable segments across platforms for efficient reach." }
        ]
    },
    {
        id: "creative-innovation",
        title: "Creative & Innovation",
        icon: LayoutTemplate,
        desc: "We go beyond static banners to craft immersive, goal-driven ad experiences that spark attention and drive action.",
        points: [
            { title: "Interactive Ad Units", desc: "Engaging users through actions like tap-to-reveal, drag-to-play, and swipes." },
            { title: "Gamified Experiences", desc: "Branded games, quizzes, and challenges that boost engagement." },
            { title: "Goal-Aligned Custom Formats", desc: "Creatives tailored to specific campaign objectives including lead-gen and conversions." },
            { title: "Contextual Creatives", desc: "Formats served based on user behavior, city, weather, or transit route." }
        ]
    },
    {
        id: "affiliate-marketing",
        title: "Affiliate Marketing",
        icon: LinkIcon,
        desc: "We manage high-performing affiliate programs that drive conversions at scale combining smart partner selection, governance and ROI tracking.",
        points: [
            { title: "Fraud Control & Quality Assurance", desc: "Safeguarding campaigns with strict validation and compliance." },
            { title: "Performance Dashboards", desc: "Real-time tracking with campaign-specific reporting." },
            { title: "Partner Selection & Scale", desc: "Building high-performing affiliate networks for sustainable growth." },
            { title: "Multi-vertical ROI", desc: "Tracking return on investment across varying verticals." }
        ]
    }
];

export default function WhatWeDo() {
    const [activeTab, setActiveTab] = useState(SERVICES[0].id);

    const currentService = SERVICES.find(s => s.id === activeTab) || SERVICES[0];

    return (
        <section id="services" className="py-24 md:py-32 bg-light">
            <div className="container mx-auto px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
                    <h2 className="text-5xl md:text-6xl font-display font-black tracking-tight drop-shadow-sm text-dark">CORE CAPABILITIES</h2>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Tabs */}
                    <div className="lg:w-1/3 flex flex-col gap-4">
                        {SERVICES.map((service) => {
                            const Icon = service.icon;
                            const isActive = activeTab === service.id;

                            return (
                                <button
                                    key={service.id}
                                    onClick={() => setActiveTab(service.id)}
                                    className={`relative text-left p-6 md:p-8 rounded-3xl transition-all duration-500 flex items-center gap-6 group overflow-hidden ${isActive
                                        ? 'bg-dark text-white shadow-[0_20px_60px_rgba(0,0,0,0.3)] scale-[1.02] transform z-10'
                                        : 'bg-white hover:bg-white hover:shadow-xl text-dark/60 hover:text-dark hover:scale-[1.01] border border-gray-100'
                                        }`}
                                >
                                    {/* Active Left Indicator Bar */}
                                    <div className={`absolute left-0 top-0 bottom-0 w-1.5 transition-all duration-500 rounded-l-3xl ${isActive ? 'bg-primary' : 'bg-transparent group-hover:bg-primary/30'}`}></div>

                                    <div className={`p-4 rounded-2xl relative z-10 transition-colors duration-500 ${isActive ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-dark/40 group-hover:text-primary group-hover:bg-primary/10'}`}>
                                        <Icon size={32} strokeWidth={isActive ? 2 : 1.5} className={`transition-transform duration-500 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`} />
                                    </div>
                                    <span className={`text-xl md:text-2xl font-bold font-display relative z-10 transition-colors duration-500 ${isActive ? 'text-white' : ''}`}>
                                        {service.title}
                                    </span>
                                </button>
                            );
                        })}
                    </div>

                    {/* Content */}
                    <div className="lg:w-2/3">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 h-full flex flex-col justify-center"
                            >
                                <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-4 text-dark drop-shadow-sm">
                                    {currentService.title}
                                </h3>
                                <p className="text-xl md:text-2xl text-dark/70 font-light mb-12 leading-relaxed pb-8 border-b border-gray-100">
                                    {currentService.desc}
                                </p>

                                <motion.h4
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-xs font-bold uppercase tracking-widest text-primary mb-8 px-4 py-2 bg-primary/10 inline-block rounded-full self-start shadow-sm"
                                >
                                    Key Focus Areas
                                </motion.h4>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {currentService.points.map((point, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 30 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.3 + (idx * 0.1), type: "spring", stiffness: 100 }}
                                            className="group cursor-default"
                                        >
                                            <h5 className="text-xl font-bold mb-3 flex items-start gap-3 text-dark font-display group-hover:text-primary transition-colors duration-300">
                                                <div className="mt-1 flex-shrink-0 bg-gray-100 group-hover:bg-primary/10 p-1.5 rounded-full transition-colors duration-300">
                                                    <ArrowRight size={16} strokeWidth={3} className="text-dark/40 group-hover:text-primary transition-colors duration-300" />
                                                </div>
                                                {point.title}
                                            </h5>
                                            <p className="text-dark/60 leading-relaxed font-light pl-11 group-hover:text-dark/80 transition-colors duration-300">
                                                {point.desc}
                                            </p>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}

