

export default function Contact() {
    return (
        <main className="pt-24 min-h-screen">
            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-6xl font-display font-black mb-8">Contact Us</h1>
                <div className="grid md:grid-cols-2 gap-16">
                    <div>
                        <p className="text-xl text-dark/70 max-w-lg leading-relaxed mb-8">
                            Ready to take your brand further? We'd love to chat. Reach out to us below.
                        </p>
                        <div className="mb-4">
                            <h4 className="font-bold text-dark font-display text-2xl">Email</h4>
                            <a href="mailto:connect@onlymedia.in" className="text-primary text-xl">connect@onlymedia.in</a>
                        </div>
                        <div>
                            <h4 className="font-bold text-dark font-display text-2xl">Locations</h4>
                            <p className="text-dark/70 text-lg">Mumbai | Navimumbai | Delhi | Gujarat</p>
                        </div>
                    </div>
                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-display font-bold mb-6">Send us a message</h3>
                        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" className="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors" />
                            <input type="email" placeholder="Your Email" className="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors" />
                            <textarea rows={4} placeholder="Your Message" className="bg-gray-50 border border-gray-200 p-4 rounded-xl focus:outline-none focus:border-primary transition-colors"></textarea>
                            <button type="submit" className="bg-primary text-white font-bold py-4 rounded-xl hover:bg-dark transition-colors mt-2">Submit Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
