import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const FAQS = [
    {
        question: "What does OnlyMedia do?",
        answer: "OnlyMedia is a strategic media solutions partner focused on creating impactful media strategies that drive measurable growth. We go beyond ad placements, We align every campaign with your business objectives, using data, custom planning, and continuous optimization across platforms like Meta, Google, YouTube, DV360, OTT, and Transit Media."
    },
    {
        question: "Why do businesses need a custom media plan?",
        answer: "Because one-size-fits-all media strategies don't work. A custom media plan ensures: Your audience is reached with precision, Budgets are optimized for ROI, and Messaging aligns with your business goals. At OnlyMedia, we build bespoke media plans that are dynamic, data-driven, and performance-focused."
    },
    {
        question: "What is a data-driven media strategy and why is it important?",
        answer: "A data-driven strategy uses real-time analytics, audience behavior insights, and predictive modeling to remove guesswork from media buying. It helps you identify high-intent audiences, optimize ad spend, and measure what truly matters—business growth."
    },
    {
        question: "How does OnlyMedia measure success?",
        answer: "We measure success using SMART KPIs—Specific, Measurable, Achievable, Relevant, and Time-bound. Metrics we track include Awareness (Reach, impressions), Engagement (CTR, interactions), and Conversions (CPA, ROAS, leads). We also provide real-time dashboards and detailed reports so you know where every rupee is going."
    }
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 md:py-32 bg-white text-dark">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16 md:mb-24">
                    <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Support & Queries</h4>
                    <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-8 text-dark">FAQs</h2>
                </div>

                <div className="space-y-4">
                    {FAQS.map((faq, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="border-b border-gray-200"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full flex justify-between items-center py-6 text-left group transition-colors"
                                >
                                    <span className={`text-xl font-display font-bold transition-colors ${isOpen ? 'text-primary' : 'text-dark group-hover:text-primary'}`}>
                                        {faq.question}
                                    </span>
                                    <div className={`p-2 rounded-full transition-colors flex-shrink-0 ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-dark/40 group-hover:bg-primary/20 group-hover:text-primary'}`}>
                                        {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                    </div>
                                </button>
                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-8 text-lg text-dark/70 leading-relaxed font-light">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

