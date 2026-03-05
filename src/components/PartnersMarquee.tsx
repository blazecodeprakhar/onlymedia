
const PARTNERS = [
    "Meta", "LinkedIn", "YouTube", "Pinterest", "Display & Video 360", "Google Ads", "TikTok", "X"
];

export default function PartnersMarquee() {
    return (
        <section className="py-20 bg-dark text-white border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-12 text-center relative z-10">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Trusted Media Partners</h4>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-white/90">
                    Scale with the world's leading platforms
                </h2>
            </div>

            <div className="relative w-full overflow-hidden flex pt-8 pb-10">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10"></div>

                <div className="flex animate-marquee whitespace-nowrap">
                    {[...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div
                            key={index}
                            className="px-12 md:px-24 flex items-center justify-center text-3xl md:text-5xl font-display font-bold text-white/30 hover:text-white/80 transition-colors duration-300 pointer-events-none"
                        >
                            {partner}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

