import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Lock, User, Phone, CheckCircle2, ChevronRight, LogIn } from 'lucide-react';
import { useToast } from '../App';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleRegister = (e: FormEvent) => {
    e.preventDefault();
    if (step === 1) {
        setStep(2);
    } else {
        showToast("Registration successful! Please login.", "success");
        navigate("/login");
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#00236f] overflow-hidden relative">
      <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[100px] translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-6xl w-full px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
        >
            <h1 className="text-7xl font-black text-white leading-tight mb-8 tracking-tighter">Your Career <br /> Starts Here.</h1>
            <div className="space-y-8">
                {[
                    { title: "Personal Dashboard", desc: "Track every assignment and progress milestone." },
                    { title: "Direct Mentor Chat", desc: "Resolve accounting doubts in real-time." },
                    { title: "Verified Credentials", desc: "ISO documents added directly to your profile." }
                ].map((item, i) => (
                    <div key={i} className="flex gap-6 items-start group">
                        <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary-container transition-transform group-hover:scale-110">
                            <CheckCircle2 size={32} />
                        </div>
                        <div>
                            <h4 className="text-xl font-black text-white mb-1">{item.title}</h4>
                            <p className="text-white/50 text-sm font-medium">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>

        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-lg"
        >
            <div className="bg-white/10 backdrop-blur-2xl p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl">
                <div className="mb-12 flex justify-between items-end">
                    <div>
                        <h2 className="text-4xl font-black text-white mb-2">Create Account</h2>
                        <p className="text-white/50 font-bold text-sm uppercase tracking-widest">Join the academy</p>
                    </div>
                    <div className="flex gap-2 mb-2">
                        {[1, 2].map(i => (
                            <div key={i} className={cn(
                                "w-6 h-1.5 rounded-full transition-all duration-500",
                                step === i ? "bg-secondary-container w-10" : "bg-white/10"
                            )} />
                        ))}
                    </div>
                </div>

                <form onSubmit={handleRegister} className="space-y-8">
                    <AnimatePresence mode="wait">
                        {step === 1 ? (
                            <motion.div 
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Full Name</label>
                                    <div className="relative group">
                                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                                        <input required type="text" placeholder="John Doe" className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Email Address</label>
                                    <div className="relative group">
                                        <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                                        <input required type="email" placeholder="john@domain.com" className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Phone Number</label>
                                    <div className="relative group">
                                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                                        <input required type="tel" placeholder="+91 90000 00000" className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold" />
                                    </div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div 
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Set Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                                        <input required type="password" placeholder="••••••••" className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Confirm Password</label>
                                    <div className="relative group">
                                        <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-white transition-colors" size={20} />
                                        <input required type="password" placeholder="••••••••" className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold" />
                                    </div>
                                </div>
                                <div className="p-6 bg-white/5 rounded-[2rem] border border-white/10 mt-8">
                                    <p className="text-xs text-white/50 font-medium leading-relaxed italic">By creating an account, you agree to Ayan Academy's terms of service and student code of conduct.</p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div className="flex gap-4">
                        {step === 2 && (
                            <button 
                                type="button"
                                onClick={() => setStep(1)}
                                className="w-20 h-16 rounded-[1.5rem] border-2 border-white/20 text-white flex items-center justify-center hover:bg-white/5 transition-all"
                            >
                                <span className="rotate-180"><X /></span>
                            </button>
                        )}
                        <button 
                            type="submit"
                            className="flex-1 py-6 rounded-[2rem] bg-white text-primary font-black text-lg shadow-huge flex items-center justify-center gap-4 hover:bg-white/90 active:scale-95 transition-all"
                        >
                            {step === 1 ? "Next Step" : "Complete Registration"}
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="mt-10 flex flex-col items-center gap-6">
                        <div className="flex items-center gap-4 w-full">
                            <div className="h-px bg-white/10 flex-1" />
                            <span className="text-[10px] font-black text-white/25 uppercase tracking-widest">Already a student?</span>
                            <div className="h-px bg-white/10 flex-1" />
                        </div>
                        <button 
                          type="button"
                          onClick={() => navigate("/login")}
                          className="text-secondary-container font-black text-sm uppercase tracking-widest flex items-center gap-2 hover:translate-x-2 transition-all p-2"
                        >
                            Sign In to Portal
                            <LogIn size={18} />
                        </button>
                    </div>
                </form>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
