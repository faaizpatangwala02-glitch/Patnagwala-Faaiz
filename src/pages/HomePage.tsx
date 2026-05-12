import { motion } from 'motion/react';
import { 
  ArrowRight, 
  Users, 
  GraduationCap, 
  Trophy, 
  ChevronDown, 
  Star, 
  CheckCircle2, 
  Download,
  BookOpen,
  Award,
  Briefcase,
  PlayCircle
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { COURSES, REVIEWS } from '../constants/data';
import { cn } from '../lib/utils';

const StatCard = ({ icon: Icon, value, label, delay = 0 }: any) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[2.5rem] flex flex-col items-center text-center group hover:bg-white/20 transition-all"
    >
      <div className="w-16 h-16 rounded-2xl bg-secondary-container/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="text-secondary-container" size={32} />
      </div>
      <div className="text-4xl font-black text-white mb-2">{count}+</div>
      <div className="text-sm font-bold text-white/70 uppercase tracking-widest">{label}</div>
    </motion.div>
  )
};

const FAQItem = ({ question, answer }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-outline-variant last:border-0">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left group"
      >
        <span className="text-lg font-bold text-primary group-hover:text-secondary-container transition-colors">{question}</span>
        <ChevronDown className={cn("text-primary transition-transform duration-300", isOpen && "rotate-180")} size={24} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-on-surface-variant leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  const [heroIndex, setHeroIndex] = useState(0);
  const heroWords = ["Success", "Accounts", "Finance", "GST"];

  useEffect(() => {
    const itv = setInterval(() => setHeroIndex(i => (i + 1) % heroWords.length), 3000);
    return () => clearInterval(itv);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden bg-[#00236f]">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-primary-container/20 rounded-full blur-[120px]" />
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px]" />
          
          {/* Animated Circles */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
              x: [0, 50, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 left-20 w-32 h-32 border-2 border-white/10 rounded-full"
          />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-8 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-white text-xs font-black uppercase tracking-widest">Premium Accounting Training</span>
            </div>
            
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-8">
              Empower Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-container to-orange-400">
                {heroWords[heroIndex]}
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-xl mb-12 leading-relaxed font-medium">
              Join Ahmedabad's #1 accounting institute. Get master-level training in Tally, GST, TDS and 100% placement support.
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-secondary-container text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-2xl shadow-secondary-container/30 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3">
                Enroll Today
                <ArrowRight size={22} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[2rem] font-black text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-3">
                <PlayCircle size={22} />
                Watch Demo
              </button>
            </div>

            <div className="mt-16 flex items-center gap-8">
               <div className="flex -space-x-4">
                 {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-primary overflow-hidden shadow-xl bg-surface">
                        <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Student" />
                    </div>
                 ))}
               </div>
               <div>
                  <div className="flex gap-1 mb-1">
                    {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="#fd761a" stroke="none" />)}
                  </div>
                  <p className="text-sm font-bold text-white/50 tracking-wide uppercase">Trusted by 1200+ Students</p>
               </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 bg-white/5 backdrop-blur-2xl p-4 rounded-[4rem] border border-white/10 shadow-huge">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/5] shadow-inner relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPVAY9C6nlG_Uv-1_pDy7svwOxUnPn8G6BdnNCIsmW2GsW69PvHua-4xOMNpqPfvZTbb2eDU89EgZBEixtbOlkEYR0g2dTvltSIOGmhRbmkUE2stVwsc8IidE2kNgzAjJ4nfenUHcfHGJvzMQ8e1ZeU_VPMIpvuXktRzqUqC98j8pQZGT5x_YhUY6AhS59mTKNidbJtYCO4BCljW4FzVRoEBvCFQqfbXxVC7Olw8KbzJ2qBrmuo4osSdMdRJ14qh9LAHtQD1fSLE" 
                      alt="Hero" 
                      className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60" />
                    
                    {/* Floating Cards */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                      className="absolute bottom-8 -left-12 bg-white p-6 rounded-3xl shadow-huge flex items-center gap-4 border border-outline-variant"
                    >
                        <div className="w-12 h-12 bg-secondary-container/10 rounded-2xl flex items-center justify-center text-secondary-container">
                            <GraduationCap size={28} />
                        </div>
                        <div>
                            <div className="text-xs font-black text-on-surface-variant uppercase">Certified</div>
                            <div className="text-xl font-black text-primary">Tally Master</div>
                        </div>
                    </motion.div>
                </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-container/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary-container/20 rounded-[5rem] blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats" className="py-24 bg-[#00236f] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          <StatCard icon={Users} value="1200" label="Students Trained" delay={0.1} />
          <StatCard icon={CheckCircle2} value="100" label="Practical Training" delay={0.2} />
          <StatCard icon={Trophy} value="5" label="Years of Excellence" delay={0.3} />
          <StatCard icon={Star} value="5" label="Star Reviews" delay={0.4} />
        </div>
      </section>

      {/* About Section Trust Message */}
      <section className="py-20 bg-white border-b border-outline-variant">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-2xl md:text-3xl font-black text-primary leading-tight max-w-4xl mx-auto"
          >
            "Trusted by hundreds of students across Ahmedabad for practical accounting education and career excellence."
          </motion.p>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 tracking-tight">Professional <br className="hidden md:block"/> Certification Courses</h2>
                <p className="text-lg text-on-surface-variant font-medium">Industry-curated syllabus designed to make you hireable from Day 1.</p>
            </div>
            <button className="text-primary font-black flex items-center gap-2 hover:gap-4 transition-all group">
                View All Courses
                <ArrowRight size={24} className="group-hover:text-secondary-container transition-colors" />
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {COURSES.filter(c => c.featured).map((course, idx) => (
              <motion.div 
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="bg-white rounded-[3rem] overflow-hidden shadow-xl border border-outline-variant hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="h-64 relative overflow-hidden">
                        <img 
                          src={course.image} 
                          alt={course.title} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute top-6 left-6 bg-secondary-container text-white px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                            {course.category}
                        </div>
                    </div>
                    <div className="p-10">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex gap-0.5">
                                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill={i <= Math.floor(course.rating) ? "#fd761a" : "#e5e7eb"} stroke="none" />)}
                            </div>
                            <span className="text-xs font-black text-on-surface-variant">({course.reviews} Reviews)</span>
                        </div>
                        <h3 className="text-2xl font-black text-primary mb-4 leading-tight group-hover:text-secondary-container transition-colors">{course.title}</h3>
                        <p className="text-on-surface-variant mb-10 line-clamp-2 font-medium">{course.description}</p>
                        <div className="flex items-center justify-between pt-8 border-t border-outline-variant">
                            <div>
                                <span className="text-xs font-bold text-on-surface-variant uppercase block mb-1">Tuition Fee</span>
                                <span className="text-2xl font-black text-primary">{course.price}</span>
                            </div>
                            <button className="w-14 h-14 bg-surface-container rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-inner">
                                <ArrowRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Bento Grid */}
      <section className="py-24 bg-surface-variant/30 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8">
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-7 bg-primary rounded-[3.5rem] p-12 md:p-20 text-white relative overflow-hidden"
            >
                <div className="relative z-10 h-full flex flex-col">
                    <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[0.9] tracking-tighter">100% Practical <br /> Learning.</h2>
                    <p className="text-xl text-white/70 mb-12 max-w-lg leading-relaxed font-medium">We don't just teach theory. You'll work on real company accounts, live GST filings, and real-world tax scenarios.</p>
                    <div className="mt-auto grid grid-cols-2 gap-10">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><CheckCircle2 className="text-secondary-container" /></div>
                            <span className="font-bold text-lg">Live Projects</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center"><CheckCircle2 className="text-secondary-container" /></div>
                            <span className="font-bold text-lg">Expert Mentors</span>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 right-0 w-80 h-80 bg-secondary-container/20 rounded-full blur-[80px]" />
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="lg:col-span-5 flex flex-col gap-8"
            >
                <div className="bg-white rounded-[3rem] p-12 border border-outline-variant shadow-xl flex-1 group">
                    <div className="w-20 h-20 bg-secondary-container/10 rounded-[1.5rem] flex items-center justify-center text-secondary-container mb-8 group-hover:rotate-6 transition-transform">
                        <Award size={40} />
                    </div>
                    <h3 className="text-3xl font-black text-primary mb-4">ISO Certified Training</h3>
                    <p className="text-on-surface-variant font-medium leading-relaxed">Receive industry-recognized certification upon course completion that boosts your resume.</p>
                </div>
                <div className="bg-secondary-container rounded-[3rem] p-12 text-white shadow-xl flex-1 relative overflow-hidden group">
                    <div className="relative z-10">
                        <h3 className="text-3xl font-black mb-4">Brochure Download</h3>
                        <p className="text-white/80 font-medium leading-relaxed mb-8">Get the detailed syllabus and fee structure for 2024 sessions.</p>
                        <button className="bg-white text-secondary-container px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl hover:scale-105 transition-all">
                            <Download size={22} />
                            Download PDF
                        </button>
                    </div>
                    <Download className="absolute bottom-[-20px] right-[-20px] text-white/10 w-48 h-48 group-hover:scale-110 transition-transform" />
                </div>
            </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-32 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               className="inline-flex items-center gap-3 bg-secondary-container/10 px-6 py-2 rounded-full mb-6 border border-secondary-container/20 shadow-[0_0_20px_rgba(253,118,26,0.15)] group"
            >
                <div className="flex gap-1">
                    {[1,2,3,4,5].map(i => (
                        <motion.div
                           key={i}
                           animate={{ scale: [1, 1.2, 1] }}
                           transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                        >
                            <Star size={12} fill="#fd761a" stroke="none" />
                        </motion.div>
                    ))}
                </div>
                <span className="text-secondary-container text-[10px] font-black uppercase tracking-[0.2em]">5 Star Student Reviews</span>
            </motion.div>
            <h2 className="text-5xl md:text-7xl font-black text-primary tracking-tighter">Real Stories <br /> From Our Students.</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {REVIEWS.map((review, i) => (
              <motion.div 
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="h-full bg-white p-10 rounded-[3rem] border border-outline-variant shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100%] transition-transform group-hover:scale-110" />
                  
                  <div className="flex gap-1 mb-8">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} size={18} fill="#fd761a" stroke="none" />
                    ))}
                  </div>

                  <p className="text-lg font-medium text-primary leading-relaxed mb-10 relative z-10 italic">
                    "{review.text}"
                  </p>

                  <div className="flex items-center gap-5 mt-auto">
                    <div className="relative">
                        <img 
                            src={review.image || `https://i.pravatar.cc/150?u=${review.id}`} 
                            className="w-16 h-16 rounded-2xl object-cover border-2 border-surface shadow-md" 
                            alt={review.name} 
                        />
                        <div className="absolute -bottom-2 -right-2 w-7 h-7 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white" title="Verified Student">
                            <CheckCircle2 size={12} strokeWidth={4} />
                        </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-primary leading-tight">{review.name}</h4>
                      <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{review.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ & Support Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
            <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 text-primary font-black uppercase tracking-[0.3em] text-xs mb-6">
                    <div className="w-12 h-0.5 bg-primary" />
                    Help & Support
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight">Common <br />Questions.</h2>
                <p className="text-lg text-on-surface-variant mb-12 font-medium">Can't find what you're looking for? Contact our advisors directly at <span className="text-secondary-container underline">+91 98258 93675</span></p>
                
                <div className="p-10 bg-surface-container rounded-[3rem] border border-outline-variant flex flex-col items-center text-center">
                    <div className="w-24 h-24 rounded-full border-8 border-white overflow-hidden mb-6 shadow-xl">
                        <img src="https://i.pravatar.cc/150?u=support" alt="Advisor" />
                    </div>
                    <h4 className="text-xl font-black text-primary mb-2">Speak with an Advisor</h4>
                    <p className="text-on-surface-variant font-bold text-sm mb-8">Available Mon-Sat, 10am - 6pm</p>
                    <button className="w-full bg-primary text-white py-4 rounded-2xl font-black shadow-xl hover:shadow-primary/20 transition-all">Request Callback</button>
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="space-y-4">
                    <FAQItem 
                        question="Do you offer job placement services?" 
                        answer="Yes! Ayan Academy has a dedicated placement cell. We connect our certified students with top accounting firms and companies in Ahmedabad." 
                    />
                    <FAQItem 
                        question="Is previous accounting knowledge required?" 
                        answer="No. Our courses start from absolute basics and go up to advanced corporate accounting. Whether you're a student or professional, you can join." 
                    />
                    <FAQItem 
                        question="Which software do you teach?" 
                        answer="We primarily focus on Tally Prime (latest version), Tally ERP 9, Advanced Excel, and various government filing portals for GST and TDS." 
                    />
                    <FAQItem 
                        question="Can I attend a demo lecture?" 
                        answer="Absolutely! Contact us to schedule a free demo session to experience our interactive and practical teaching style." 
                    />
                    <FAQItem 
                        question="What is the duration of the Tally course?" 
                        answer="The full Tally Prime with GST & TDS Mastercourse follows a 3-month curriculum with daily 1.5 Hour practical sessions." 
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Footer / CTA Combined */}
      <section className="py-24 bg-primary px-6 md:px-12 text-center relative overflow-hidden">
        <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto relative z-10"
        >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-[0.9]">Ready to start your <br /> career in Finance?</h2>
            <p className="text-xl text-white/70 mb-16 max-w-2xl mx-auto font-medium">Join over 1200 successful alumni who transformed their careers with Ayan Academy.</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/register" className="bg-secondary-container text-white px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl shadow-secondary-container/30 hover:scale-105 active:scale-95 transition-all">
                    Register Now
                </a>
                <a href="/contact" className="bg-white text-primary px-12 py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-105 active:scale-95 transition-all">
                    Contact Us
                </a>
            </div>
        </motion.div>
        
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-[100px]" />
            <div className="absolute top-[-10%] left-[-10%] w-[400px] h-[400px] bg-white/5 rounded-full blur-[80px]" />
        </div>
      </section>
      
      {/* Simple Footer bottom */}
      <footer className="bg-[#00174e] py-16 px-6 md:px-12 text-center md:text-left border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
                <span className="text-2xl font-black text-white tracking-tighter">Ayan Academy</span>
                <p className="text-on-primary/40 text-sm mt-3 font-bold uppercase tracking-widest">Ahmedabad's Premier Accounting School</p>
            </div>
            <div className="flex gap-10 text-white/60 font-bold text-sm">
                <a href="#" className="hover:text-white transition-colors">Documentation</a>
                <a href="#" className="hover:text-white transition-colors">Student Portal</a>
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Trust Center</a>
            </div>
            <div className="text-white/40 text-xs font-bold">
                © 2024 Ayan Academy. <br className="md:hidden" /> All Rights Reserved.
            </div>
        </div>
      </footer>
    </div>
  );
}
