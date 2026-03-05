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
                    <h2 className="text-5xl md:text-6xl font-display font-black tracking-tight mb-8">WHAT WE DO</h2>
                    <p className="text-xl text-dark/70 font-light leading-relaxed">
                        We help brands navigate today's complex media landscape with solutions that combine <span className="text-primary font-medium">precision, creativity and performance</span>. From planning to execution, our work is built to deliver impact at every stage of the customer journey.
                    </p>
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
                                    className={`text-left p-6 md:p-8 rounded-3xl transition-all duration-300 flex items-center gap-6 group ${isActive
                                            ? 'bg-dark text-white shadow-2xl scale-105 transform z-10'
                                            : 'bg-white hover:bg-gray-50 text-dark/60 hover:text-dark'
                                        }`}
                                >
                                    <div className={`p-4 rounded-2xl ${isActive ? 'bg-primary/20 text-primary' : 'bg-gray-100 text-dark/40 group-hover:text-primary'}`}>
                                        <Icon size={32} strokeWidth={1.5} />
                                    </div>
                                    <span className={`text-xl md:text-2xl font-bold font-display ${isActive ? 'text-white' : ''}`}>
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
                                <h3 className="text-3xl font-display font-bold mb-6 flex items-center gap-4 text-dark">
                                    {currentService.title}
                                </h3>
                                <p className="text-xl text-dark/70 font-light mb-12 leading-relaxed pb-8 border-b border-gray-100">
                                    {currentService.desc}
                                </p>

                                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 px-4 py-2 bg-primary/10 inline-block rounded-full self-start">Key Focus Areas</h4>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                                    {currentService.points.map((point, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="group"
                                        >
                                            <h5 className="text-xl font-bold mb-3 flex items-start gap-2 text-dark font-display group-hover:text-primary transition-colors">
                                                <ArrowRight size={20} className="mt-1 flex-shrink-0 text-primary" />
                                                {point.title}
                                            </h5>
                                            <p className="text-dark/60 leading-relaxed font-light pl-7">
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

