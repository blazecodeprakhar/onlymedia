import { motion } from 'framer-motion';
import CircularCTA from '../components/CircularCTA';
import FAQ from '../components/FAQ';
import { Linkedin } from 'lucide-react';

const TEAM = [
    {
        name: "Ankita Shah",
        role: "Co-Founder",
        bio: "Ankita drives strategic planning and client success ensuring every engagement is built for long-term impact. With 14+ years in digital media, she blends strategic clarity, platform expertise, and a performance-first mindset to help brands navigate an ever-evolving media landscape with confidence.",
        linkedin: "https://www.linkedin.com/in/ankita-shah-b59b4923/",
        image: "https://onlymedia.in/wp-content/uploads/2025/09/Ankita-Profile-IMage.jpeg"
    },
    {
        name: "Akshay Shah",
        role: "Co-Founder",
        bio: "Akshay oversees media strategy, brand partnerships, and innovation turning bold ideas into high-impact campaigns across digital, transit, and emerging formats. With 17+ years of experience, he blends strategic thinking with executional depth to deliver results that matter.",
        linkedin: "https://www.linkedin.com/in/akshayshah18/",
        image: "https://onlymedia.in/wp-content/uploads/2025/09/AKSHAY-profile-23_OM.jpg"
    }
];

const ABOUT_FAQS = [
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
    },
    {
        question: "Which industries does OnlyMedia work with?",
        answer: "We work with everyone, across multiple verticals including: BFSI (Loans, Insurance, NBFCs), D2C & Retail, FMCG & Lifestyle, Automotive, Education. Our experience allows us to customize media strategies for both niche and mass-market businesses."
    },
    {
        question: "Do you offer performance marketing solutions?",
        answer: "Yes. We specialize in performance-driven campaigns that focus on: Lead generation and acquisition, Affiliate marketing & app installs, Retention and remarketing strategies. Our performance approach ensures you pay for results, not just reach."
    },
    {
        question: "How do you choose the right media platforms for campaigns?",
        answer: "Our approach is platform-agnostic. We don't push trends, we pick what works for your goals. Based on audience insights and budget, we recommend the best mix across: Meta, Google, YouTube, DV360 & Programmatic, OTT & Connected TV, On-ground activations (where relevant)."
    },
    {
        question: "How does OnlyMedia ensure campaigns are privacy-compliant?",
        answer: "We adhere to GDPR and data privacy norms by using consent-based and anonymized data. Our audience targeting is built on behavioral, contextual, and interest-based signals without compromising user privacy."
    },
    {
        question: "What is audience segmentation and why does it matter?",
        answer: "Audience segmentation is the process of grouping your customers based on: Demographics, Behavior, Purchase intent, Engagement patterns. At OnlyMedia, this allows us to create personalized campaigns that convert better, because relevance drives results."
    },
    {
        question: "Do you offer integrated campaigns (online + offline)?",
        answer: "Yes! We create integrated media solutions that combine digital channels with on-ground activations, transit branding, and experiential marketing, ensuring consistency across all touchpoints."
    },
    {
        question: "What creative formats do you use?",
        answer: "We go beyond static banners. Our creative strategy includes: Interactive ads, Rich media formats, Gamified creatives, Video-first storytelling. Innovation in format leads to better engagement and stronger performance."
    },
    {
        question: "How can I start working with OnlyMedia?",
        answer: "Simply reach out to us at connect@onlymedia.in or fill in our contact form. We'll schedule a discovery session to understand your business and craft a custom media strategy aligned with your growth goals."
    }
];

export default function About() {
    return (
        <main className="min-h-screen bg-light">

            {/* Hero Section */}
            <section className="pt-32 pb-24 md:pt-48 md:pb-40 relative overflow-hidden bg-dark text-white flex items-center justify-center min-h-[70vh]">
                <div className="absolute inset-0 opacity-40 bg-[url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-dark/40"></div>

                <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">
                    <motion.h4
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-primary font-bold uppercase tracking-widest text-sm mb-2"
                    >
                        WHO WE ARE
                    </motion.h4>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-7xl md:text-8xl lg:text-[10rem] font-display font-black mb-10 text-white tracking-tight leading-none drop-shadow-2xl"
                    >
                        ABOUT US
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-3xl mx-auto"
                    >
                        <p className="text-xl md:text-[22px] text-white/90 leading-relaxed font-normal">
                            We're <span className="font-bold text-white">growth partners, strategic thinkers, and execution specialists</span>. Our team brings together deep expertise across performance marketing, media innovation, audience strategy, and creative thinking all united by one goal: <span className="font-bold text-primary">driving measurable impact for ambitious brands</span>.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-24 md:py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16 md:mb-24">
                        <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">The People Behind The Data</h4>
                        <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-8 text-dark">OUR TEAM</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 max-w-6xl mx-auto">
                        {TEAM.map((member, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7, delay: index * 0.2 }}
                                className="group flex flex-col items-center text-center"
                            >
                                <div className="relative overflow-hidden rounded-full mb-8 w-64 h-64 md:w-80 md:h-80 bg-gray-100 shadow-2xl">
                                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-dark/50">
                                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0">
                                            <Linkedin size={24} fill="currentColor" />
                                        </a>
                                    </div>
                                </div>
                                <h3 className="text-3xl font-display font-bold mb-2 text-dark">{member.name}</h3>
                                <p className="text-primary font-bold uppercase tracking-widest text-sm mb-6 pb-6 border-b border-gray-200 w-full max-w-xs">{member.role}</p>
                                <p className="text-dark/70 text-lg leading-relaxed max-w-lg">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <FAQ data={ABOUT_FAQS} />

            {/* CTA */}
            <CircularCTA />
        </main>
    );
}
