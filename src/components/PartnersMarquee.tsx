
const PARTNERS = [
    { name: "Meta", img: "https://onlymedia.in/wp-content/uploads/2025/08/Meta.png" },
    { name: "LinkedIn", img: "https://onlymedia.in/wp-content/uploads/2025/08/LInked-In.png" },
    { name: "YouTube", img: "https://onlymedia.in/wp-content/uploads/2025/08/Youtube.png" },
    { name: "Pinterest", img: "https://onlymedia.in/wp-content/uploads/2025/08/Pinterest-01.png" },
    { name: "Display & Video 360", img: "https://onlymedia.in/wp-content/uploads/2025/08/Video-360.png" }
];

export default function PartnersMarquee() {
    return (
        <section className="py-10 bg-dark text-white border-y border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-6 mb-8 text-center relative z-10">
                <h4 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Trusted Media Partners</h4>
                <h2 className="text-3xl md:text-5xl font-display font-medium text-white/90">
                    Scale with the world's leading platforms
                </h2>
            </div>

            <div className="relative w-full overflow-hidden flex pt-4 pb-6 group">
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark to-transparent z-10 pointer-events-none"></div>
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark to-transparent z-10 pointer-events-none"></div>

                <div className="flex animate-marquee whitespace-nowrap items-center w-max group-hover:[animation-play-state:paused]">
                    {[...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS, ...PARTNERS].map((partner, index) => (
                        <div
                            key={index}
                            className="px-8 md:px-16 flex items-center justify-center transition-all duration-300 transform hover:scale-110"
                        >
                            <img src={partner.img} alt={partner.name} className="h-16 md:h-20 w-auto max-w-none object-contain" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
