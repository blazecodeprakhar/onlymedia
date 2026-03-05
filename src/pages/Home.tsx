
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import PartnersMarquee from '../components/PartnersMarquee';
import WhatWeDo from '../components/WhatWeDo';
import WhyChooseUs from '../components/WhyChooseUs';
import FAQ from '../components/FAQ';
import CircularCTA from '../components/CircularCTA';
export default function Home() {
    return (
        <main>
            <Hero />
            <WhoWeAre />
            <PartnersMarquee />
            <WhatWeDo />
            <WhyChooseUs />
            <FAQ />
            <CircularCTA />
        </main>
    );
}
