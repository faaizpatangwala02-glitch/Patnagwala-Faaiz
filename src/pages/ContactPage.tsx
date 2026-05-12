import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  User, 
  AtSign,
  PhoneCall,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import { useToast } from '../App';
import { cn } from '../lib/utils';

export default function ContactPage() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        showToast("Message sent successfully!", "success");
        setTimeout(() => setSuccess(false), 5000);
    }, 2000);
  };

  return (
    <div className="pt-32 pb-40 bg-surface">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.4em] text-xs mb-6"
          >
            <PhoneCall size={16} />
            Let's Connect
          </motion.div>
          <h1 className="text-5xl md:text-8xl font-black text-primary mb-8 tracking-tighter">Get in Touch.</h1>
          <p className="text-lg text-on-surface-variant max-w-2xl mx-auto font-medium">Have questions? Our team of experts is ready to assist you in choosing the right path for your career.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 bg-white rounded-[4rem] shadow-huge border border-outline-variant overflow-hidden">
          {/* Info Side */}
          <div className="lg:col-span-5 bg-primary p-12 md:p-20 text-white relative overflow-hidden">
            <div className="relative z-10 h-full flex flex-col">
              <h2 className="text-4xl font-black mb-12">Contact <br /> Information</h2>
              <div className="space-y-10 flex-1">
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-all">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/50 font-black text-[10px] uppercase tracking-widest mb-2">Call Us</h4>
                    <p className="text-2xl font-black">+91 98258 93675</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-all">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/50 font-black text-[10px] uppercase tracking-widest mb-2">Email Us</h4>
                    <p className="text-2xl font-black">ayanacademy@gmail.com</p>
                  </div>
                </div>
                <div className="flex gap-6 group">
                  <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-secondary-container transition-all">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-white/50 font-black text-[10px] uppercase tracking-widest mb-2">Location</h4>
                    <p className="text-2xl font-black">Ahmedabad, Gujarat</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 pt-12 border-t border-white/10">
                <h4 className="text-white/50 font-black text-[10px] uppercase tracking-widest mb-6">Operating Hours</h4>
                <div className="flex items-center gap-3 font-bold text-lg">
                  <Clock size={20} className="text-secondary-container" />
                  Mon - Sat: 10:00 AM - 07:00 PM
                </div>
              </div>
            </div>
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-container/20 rounded-full blur-[100px]" />
          </div>

          {/* Form Side */}
          <div className="lg:col-span-7 p-12 md:p-20">
            <h3 className="text-3xl font-black text-primary mb-12">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative group">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                        required
                        type="text" 
                        placeholder="Full Name" 
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 outline-none font-bold transition-all"
                    />
                </div>
                <div className="relative group">
                    <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                    <input 
                        required
                        type="email" 
                        placeholder="Email Address" 
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 outline-none font-bold transition-all"
                    />
                </div>
              </div>
              <div className="relative group">
                    <MessageSquare className="absolute left-6 top-8 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                    <textarea 
                        required
                        placeholder="Your Message..." 
                        rows={6}
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 outline-none font-bold transition-all resize-none"
                    />
              </div>
              <button 
                disabled={loading || success}
                className={cn(
                    "w-full py-6 rounded-2xl font-black text-lg shadow-2xl transition-all flex items-center justify-center gap-4 active:scale-95",
                    success ? "bg-green-500 text-white" : "bg-primary text-white hover:bg-primary/90 shadow-primary/20"
                )}
              >
                {loading ? (
                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                ) : success ? (
                    <>
                        <CheckCircle2 size={24} />
                        Message Sent Successfully!
                    </>
                ) : (
                    <>
                        <Send size={24} />
                        Send Message
                    </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-32 rounded-[4rem] overflow-hidden shadow-huge border border-outline-variant relative group h-[500px]">
          <div className="absolute inset-0 bg-surface-container-high transition-transform duration-700 group-hover:scale-105">
             <div className="w-full h-full flex flex-col items-center justify-center grayscale opacity-60">
                 <MapPin size={80} className="text-on-surface-variant mb-6" />
                 <h2 className="text-3xl font-black text-on-surface-variant">Interactive Map Preview</h2>
                 <p className="font-bold text-on-surface-variant/40 uppercase tracking-widest mt-4">Ahmedabad Main Campus</p>
             </div>
          </div>
          <div className="absolute bottom-10 left-10 z-10">
            <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl border border-outline-variant shadow-xl">
                 <h4 className="text-xl font-black text-primary mb-2">Ayan Academy</h4>
                 <p className="text-sm font-bold text-on-surface-variant">102, Business Hub, Navrangpura,<br />Ahmedabad - 380009</p>
                 <button className="mt-6 text-primary font-black text-xs uppercase tracking-widest flex items-center gap-2">
                    Open in Maps
                    <ArrowRight size={16} />
                 </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
