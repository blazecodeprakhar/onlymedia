import { Mail, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-dark text-white/80 py-2 border-b border-white/10 text-sm hidden md:block">
            <div className="container mx-auto px-6 flex justify-between items-center">
                <a href="mailto:connect@onlymedia.in" className="flex items-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} />
                    <span>connect@onlymedia.in</span>
                </a>
                <div className="flex items-center gap-4">
                    <a href="#" className="hover:text-white transition-colors"><Facebook size={16} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={16} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={16} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Instagram size={16} /></a>
                </div>
            </div>
        </div>
    );
}

