import React from 'react';
import WhatWeDo from '../components/WhatWeDo';
import CircularCTA from '../components/CircularCTA';

export default function Services() {
    return (
        <main className="pt-24">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-display font-black mb-8">Our Services</h1>
                <p className="text-xl text-dark/70 max-w-3xl leading-relaxed">
                    We help brands navigate today's complex media landscape with solutions that combine precision, creativity and performance.
                </p>
            </div>
            <WhatWeDo />
            <CircularCTA />
        </main>
    );
}
