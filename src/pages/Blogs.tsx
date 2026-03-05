import React from 'react';

export default function Blogs() {
    return (
        <main className="pt-24 pb-32">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-display font-black mb-8">Latest Blogs</h1>
                <p className="text-xl text-dark/70 max-w-3xl leading-relaxed mb-16">
                    Insights, strategy, and media tactics directly from our team of experts.
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="bg-white rounded-[2rem] shadow-lg overflow-hidden border border-gray-100 group">
                            <div className="h-64 bg-gray-200">
                                <img src={`https://onlymedia.in/wp-content/uploads/2025/09/Blog-${i}_${5 - i}_11zon-768x506.jpg`} alt="Blog Cover" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-8">
                                <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Media Strategy</span>
                                <h3 className="text-2xl font-display font-bold mb-4">The Ultimate Guide to Developing a Data-Driven Media Strategy</h3>
                                <a href="#" className="font-bold border-b-2 border-primary text-dark pb-1 inline-block">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
