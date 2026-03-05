import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-white pt-24 pb-8 border-t border-white/5 relative z-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-start gap-16 md:gap-8 border-b border-white/10 pb-16">

                    <div className="md:w-1/3">
                        <Link to="/" className="mb-8 inline-block block">
                            <img src="https://onlymedia.in/wp-content/uploads/2025/07/OM1Final-1.png" alt="OnlyMedia Logo" className="h-10 md:h-12 object-contain filter brightness-0 invert" />
                        </Link>
                        <p className="text-white/60 font-light leading-relaxed max-w-sm">
                            OnlyMedia creates data-driven media solutions that help brands reach the right audience and grow.
                        </p>
                    </div>

                    <div className="md:w-1/3 flex md:justify-center">
                        <div>
                            <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
                            <ul className="space-y-4">
                                <li><Link to="/" className="text-white/60 hover:text-white transition-colors font-light">Home</Link></li>
                                <li><Link to="/about" className="text-white/60 hover:text-white transition-colors font-light">About</Link></li>
                                <li><Link to="/services" className="text-white/60 hover:text-white transition-colors font-light">Services</Link></li>
                                <li><Link to="/blogs" className="text-white/60 hover:text-white transition-colors font-light">Blogs</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="md:w-1/3 w-full">
                        <h4 className="font-display font-bold text-lg mb-6 tracking-wide">Newsletter</h4>
                        <p className="text-white/60 font-light mb-6">Enter your email address below and subscribe to our newsletter</p>
                        <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="bg-white/5 border border-white/10 text-white px-6 py-4 rounded-l-full w-full focus:outline-none focus:border-primary transition-colors"
                                required
                            />
                            <button
                                type="submit"
                                className="bg-primary hover:bg-white hover:text-dark text-white font-bold px-8 py-4 rounded-r-full transition-colors flex-shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                <div className="flex flex-col md:flex-row justify-between items-center pt-8 text-white/40 text-sm font-light">
                    <p>Copyright &copy; 2026 - Designed & Developed by Omniraa Media.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
