import React from 'react';
import CircularCTA from '../components/CircularCTA';

export default function About() {
    return (
        <main className="pt-24">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-display font-black mb-8">About Us</h1>
                <p className="text-xl text-dark/70 max-w-3xl leading-relaxed mb-12">
                    OnlyMedia is a media solutions company where data meets impact. We transform audience insights into powerful campaigns across digital, transit, and emerging platforms.
                </p>
            </div>
            <CircularCTA />
        </main>
    );
}
