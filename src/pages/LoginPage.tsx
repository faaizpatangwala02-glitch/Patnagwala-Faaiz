import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Lock, LogIn, ChevronRight, UserPlus, Eye, EyeOff } from 'lucide-react';
import { useAuth, useToast } from '../App';
import { cn } from '../lib/utils';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (email === "admin@ayan.edu") {
        login("admin");
        navigate("/admin");
    } else {
        login("student");
        navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen pt-20 flex items-center justify-center bg-[#00174e] overflow-hidden relative">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary-container/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary-container/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />
      
      <div className="max-w-6xl w-full px-6 flex flex-col lg:flex-row items-center gap-20 relative z-10">
        <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1 hidden lg:block"
        >
            <h1 className="text-7xl font-black text-white leading-tight mb-8 tracking-tighter">Enter the <br /> Professional <br /> World.</h1>
            <p className="text-xl text-white/50 max-w-md font-medium leading-relaxed">Log in to your Ayan Academy portal to track your progress and access study materials.</p>
            <div className="mt-16 flex flex-col gap-6">
                {[
                  "ISO Certified Course Materials",
                  "100% Placement Assistance Access",
                  "Personalized Career Mentoring"
                ].map((f, i) => (
                    <div key={i} className="flex items-center gap-4 text-white font-bold group">
                        <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-secondary-container transition-all">
                            <span className="text-secondary-container group-hover:text-white font-black">{i+1}</span>
                        </div>
                        {f}
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
                <div className="mb-12">
                    <h2 className="text-4xl font-black text-white mb-2">Welcome Back</h2>
                    <p className="text-white/50 font-bold text-sm uppercase tracking-widest">Sign in to continue</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Email Address</label>
                        <div className="relative group">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-secondary-container transition-colors">
                                <Mail size={20} />
                            </div>
                            <input 
                                required
                                type="email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="name@domain.edu" 
                                className="w-full pl-16 pr-6 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold transition-all"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] uppercase font-black text-white/50 tracking-widest block ml-6">Safe Password</label>
                        <div className="relative group">
                            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-white/40 group-focus-within:text-secondary-container transition-colors">
                                <Lock size={20} />
                            </div>
                            <input 
                                required
                                type={showPass ? "text" : "password"} 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••" 
                                className="w-full pl-16 pr-16 py-5 rounded-[2rem] bg-white/5 border-2 border-transparent focus:border-white/20 outline-none text-white font-bold transition-all"
                            />
                            <button 
                                type="button"
                                onClick={() => setShowPass(!showPass)}
                                className="absolute right-6 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                            >
                                {showPass ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>
                        </div>
                        <div className="flex justify-end p-2">
                            <button className="text-[10px] font-black text-white/50 uppercase tracking-widest hover:text-white transition-colors">Forgot Password?</button>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-6 rounded-[2rem] bg-secondary-container text-white font-black text-lg shadow-huge shadow-secondary-container/30 flex items-center justify-center gap-4 hover:scale-105 active:scale-95 transition-all mt-8"
                    >
                        Login Securely
                        <LogIn size={24} />
                    </button>

                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-px bg-white/10 flex-1" />
                        <span className="text-[10px] font-black text-white/25 uppercase tracking-widest">or</span>
                        <div className="h-px bg-white/10 flex-1" />
                    </div>

                    <button 
                      type="button"
                      onClick={() => navigate("/register")}
                      className="w-full py-5 rounded-[2rem] border-2 border-white/20 text-white font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 hover:bg-white/5 transition-all"
                    >
                        Create New Account
                        <UserPlus size={18} />
                    </button>
                    
                    <div className="mt-8 text-center">
                        <p className="text-xs text-white/40 font-bold">Use <span className="text-secondary-container">admin@ayan.edu</span> to demo admin role</p>
                    </div>
                </form>
            </div>
        </motion.div>
      </div>
    </div>
  );
}
