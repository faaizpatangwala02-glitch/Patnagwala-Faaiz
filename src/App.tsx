/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  MessageCircle, 
  Menu, 
  Star, 
  Award, 
  BookOpen, 
  Briefcase, 
  Wallet, 
  ArrowRight, 
  Quote, 
  User,
  Home,
  Users,
  Search,
  Contact
} from 'lucide-react';
import { motion } from 'motion/react';

const TopBar = () => (
  <div className="bg-primary text-on-primary py-2 px-4 flex flex-col md:flex-row gap-2 items-center justify-between text-center hidden md:flex">
    <div className="flex items-center gap-4 text-xs font-medium">
      <div className="flex items-center gap-1.5">
        <Phone size={14} />
        <span>+91 98258 93675</span>
      </div>
      <div className="flex items-center gap-1.5">
        <MapPin size={14} />
        <span>Ahmedabad, Gujarat</span>
      </div>
    </div>
    <div className="flex gap-4">
      <Instagram size={18} className="cursor-pointer hover:text-secondary-container transition-colors" />
      <Facebook size={18} className="cursor-pointer hover:text-secondary-container transition-colors" />
      <MessageCircle size={18} className="cursor-pointer hover:text-secondary-container transition-colors" />
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant shadow-sm px-4 md:px-12 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center h-12 md:h-16">
      <div className="flex flex-col">
        <span className="text-xl md:text-2xl font-extrabold text-primary tracking-tight">Ayan Academy</span>
        <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold">We Make Accountants</span>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-8 mr-8 font-medium text-on-surface-variant">
          <a href="#" className="hover:text-primary transition-colors">Home</a>
          <a href="#" className="hover:text-primary transition-colors">Courses</a>
          <a href="#" className="hover:text-primary transition-colors">About</a>
          <a href="#" className="hover:text-primary transition-colors">Contact</a>
        </nav>
        <button className="bg-secondary text-on-secondary px-4 md:px-6 py-2 rounded-lg font-bold text-sm md:text-base hover:bg-secondary/90 transition-all active:scale-95 shadow-md">
          Enquire Now
        </button>
        <button className="md:hidden text-primary">
          <Menu size={24} />
        </button>
      </div>
    </div>
  </header>
);

const Hero = () => (
  <section className="relative overflow-hidden bg-surface-container-low px-4 md:px-12 py-12 md:py-20 flex flex-col md:flex-row items-center gap-12 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1 text-center md:text-left z-10"
    >
      <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container px-4 py-1.5 rounded-full font-bold text-xs mb-6 shadow-sm">
        <Star size={16} fill="currentColor" />
        TALLY PRIME WITH GST & TDS
      </div>
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary leading-[1.1] mb-6 tracking-tighter">
        WE MAKE <br className="hidden md:block" /> ACCOUNTANTS
      </h1>
      <p className="text-lg md:text-xl text-on-surface-variant mb-10 max-w-xl leading-relaxed">
        Practical training with real accounting skills and guaranteed job opportunities in Ahmedabad's leading firms.
      </p>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
        <button className="bg-primary text-on-primary px-10 py-4 rounded-xl font-bold text-lg shadow-xl hover:shadow-primary/20 hover:-translate-y-0.5 transition-all active:scale-95">
          Explore Courses
        </button>
        <button className="border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary/5 transition-all active:scale-95">
          Contact Us
        </button>
      </div>
    </motion.div>
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="flex-1 w-full relative"
    >
      <div className="aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white ring-1 ring-black/5">
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPVAY9C6nlG_Uv-1_pDy7svwOxUnPn8G6BdnNCIsmW2GsW69PvHua-4xOMNpqPfvZTbb2eDU89EgZBEixtbOlkEYR0g2dTvltSIOGmhRbmkUE2stVwsc8IidE2kNgzAjJ4nfenUHcfHGJvzMQ8e1ZeU_VPMIpvuXktRzqUqC98j8pQZGT5x_YhUY6AhS59mTKNidbJtYCO4BCljW4FzVRoEBvCFQqfbXxVC7Olw8KbzJ2qBrmuo4osSdMdRJ14qh9LAHtQD1fSLE" 
          alt="Successful accounting student"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <Award className="text-primary" />,
      title: "Expert Faculty",
      desc: "Learn from industry veterans with 15+ years experience.",
      bgColor: "bg-primary-container/10"
    },
    {
      icon: <BookOpen className="text-secondary" />,
      title: "Practical Training",
      desc: "Real-world case studies and live project handling.",
      bgColor: "bg-secondary-container/10"
    },
    {
      icon: <Briefcase className="text-secondary" />,
      title: "Job Support",
      desc: "Dedicated placement cell for accounting careers.",
      bgColor: "bg-secondary-container/10"
    },
    {
      icon: <Wallet className="text-primary" />,
      title: "Affordable Fees",
      desc: "Quality education accessible to every student.",
      bgColor: "bg-primary-container/10"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-surface max-w-7xl mx-auto">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Why Choose Ayan Academy?</h2>
        <div className="h-1.5 w-24 bg-secondary mx-auto rounded-full"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-outline-variant flex flex-col items-center text-center hover:shadow-md transition-shadow group"
          >
            <div className={`w-14 h-14 rounded-2xl ${f.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
              {f.icon}
            </div>
            <h3 className="font-bold text-primary mb-2 text-sm md:text-base">{f.title}</h3>
            <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Courses = () => {
  const courses = [
    {
      title: "Tally Prime With GST",
      desc: "Comprehensive mastery of Tally including GST returns, reconciliation, and advanced reporting.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjmVjQ1iUJQeJp1LaYAICCTdKX2ncfQz_jwbXXw_eV_QxicvBCCfB4I1PSK0fnzOyZXvxX0gFwtmIstJC_zVKkTKfVA8vrR0Zkm2U4Md1y_ODCVNzc3DO8xUECDAy4sDu7Bgp36Oqs52VpAGTyRLyvobza07vT0dXcnP4Mp--kvMGccUdPUdvA7hHV5bL5R-2uwqR--_hJ7Lr4PQQx2Q_TvxsW04x2E7qyiunrI2gU1IVjZrlgUQQDaH96qTx28VsN3RkTj1RyiqM",
      badge: "Most Popular",
      badgeColor: "bg-secondary"
    },
    {
      title: "Advanced Excel",
      desc: "Master formulas, pivot tables, and dashboard creation for complex financial data analysis.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ206-CheZih_Br1jit1CwUpYR2C-9KbxfTMSiAmS0pmzgpvGngwXOvclbByCAyb4bBwiZMesR9_wVP1Kc8B-wk0bqbVGOjmCYb0TM2X-nzao2vSuXnoI51vtDbGnf1OvFzQ57cUu7CnHVjv9_MZKOSfJdVdxJPyZkMK-1hdKHjbZQah42Z3MPjFpOSVbgaNOGaKL46CmqNKAKlIBbww0ODOEerNggdNw5PNN37UNwDBCz0cYVaGsomWXQXrw1XF8rWXj1zt0S1E",
      badge: "Skill Up",
      badgeColor: "bg-primary"
    },
    {
      title: "GST & TDS Filing",
      desc: "Hands-on practical training for filing various government tax returns and staying compliant.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBodzMrjVRlG3B9VM7Chzj6XaNEskWneF62d1CC3DtoIcNJBVGwkaxE0wuCCM1Q-rzFT3XYoYOYTTlFvVgg9VgGinNNTGh7RwVTMBdyHFG71ggdaft1ytQ5WSJ3-MVu6DQdZHq6pNXQRm0dxaiLArbM2s0yfH3FaOcqFWPC-mMXlQDYwllvaGgkkRG1PZggH3MHK7SWN2XbZ_NH74QNv4z5kegM_1YPDR3fHwsj_MFz_TOPGcWbgGkrmta_m-m0G8MkO0-MAjC_o0o",
      badge: "Certification",
      badgeColor: "bg-tertiary"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-surface-container overflow-hidden">
      <div className="px-4 md:px-12 mb-12 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">Our Courses</h2>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl">Industry-relevant curriculum designed for the modern accountant.</p>
      </div>
      <div className="flex overflow-x-auto gap-6 px-4 md:px-12 pb-12 snap-x no-scrollbar md:grid md:grid-cols-3 max-w-7xl mx-auto">
        {courses.map((c, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="min-w-[85%] md:min-w-0 snap-center bg-white rounded-[2rem] shadow-lg overflow-hidden border border-outline-variant hover:shadow-xl transition-all"
          >
            <div className="h-56 relative group">
              <img src={c.image} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className={`absolute top-4 left-4 ${c.badgeColor} text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>
                {c.badge}
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-xl font-bold text-primary mb-3">{c.title}</h3>
              <p className="text-sm text-on-surface-variant mb-8 leading-relaxed h-12 overflow-hidden">{c.desc}</p>
              <button className="w-full bg-secondary text-on-secondary py-3.5 rounded-xl font-bold hover:bg-secondary/90 shadow-md active:scale-95 transition-all">
                Enquire Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const About = () => (
  <section className="py-16 md:py-24 px-4 md:px-12 bg-white max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-primary-container/5 rounded-[2.5rem] p-8 md:p-16 border border-primary-container/10 flex flex-col md:flex-row gap-12 items-center"
    >
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Ayan Academy</h2>
        <p className="text-lg md:text-xl text-on-surface mb-8 leading-relaxed">
          Ayan Academy provides industry level accounting training with practical knowledge of GST, TDS, Tally Prime and Advanced Excel. We bridge the gap between academic education and industry requirements.
        </p>
        <div className="flex items-center gap-6 mb-10">
          <div className="flex -space-x-3">
            <div className="w-12 h-12 rounded-full border-2 border-white bg-secondary flex items-center justify-center text-xs text-white font-bold shadow-sm">AJ</div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-primary flex items-center justify-center text-xs text-white font-bold shadow-sm">RK</div>
            <div className="w-12 h-12 rounded-full border-2 border-white bg-dark flex items-center justify-center text-xs text-white font-bold shadow-sm bg-on-surface-variant">500+</div>
          </div>
          <p className="text-sm font-semibold text-on-surface-variant">Join 500+ successful accountants</p>
        </div>
        <button className="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:translate-x-1 transition-all active:scale-95">
          Read More
          <ArrowRight size={20} />
        </button>
      </div>
      <div className="flex-1 hidden md:block">
        <div className="relative aspect-square max-w-sm ml-auto">
          <div className="absolute inset-0 bg-secondary rounded-[3rem] rotate-6 opacity-10"></div>
          <div className="absolute inset-0 bg-primary rounded-[3rem] -rotate-3 opacity-10"></div>
          <div className="relative z-10 w-full h-full bg-white rounded-[3rem] overflow-hidden shadow-xl border border-outline-variant p-2">
             <img 
               src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZPVAY9C6nlG_Uv-1_pDy7svwOxUnPn8G6BdnNCIsmW2GsW69PvHua-4xOMNpqPfvZTbb2eDU89EgZBEixtbOlkEYR0g2dTvltSIOGmhRbmkUE2stVwsc8IidE2kNgzAjJ4nfenUHcfHGJvzMQ8e1ZeU_VPMIpvuXktRzqUqC98j8pQZGT5x_YhUY6AhS59mTKNidbJtYCO4BCljW4FzVRoEBvCFQqfbXxVC7Olw8KbzJ2qBrmuo4osSdMdRJ14qh9LAHtQD1fSLE" 
               alt="Classroom" 
               className="w-full h-full object-cover rounded-[2.5rem]" 
             />
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Accountant, Ahmedabad",
      text: "Excellent teaching method and practical accounting training. I got a job immediately after finishing the Tally Prime course here."
    },
    {
      name: "Rahul Mehta",
      role: "Ayan Academy Student",
      text: "The focus on GST and TDS filing was very helpful. The faculty explained every concept with real-world examples."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-12 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Student Reviews</h2>
          <div className="flex justify-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} fill="#fd761a" stroke="none" />
            ))}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-[2rem] shadow-sm border border-outline-variant italic text-on-surface-variant relative hover:shadow-md transition-shadow"
            >
              <Quote className="absolute -top-3 -left-2 text-secondary-container opacity-20 scale-150 rotate-180" size={64} fill="currentColor" />
              <p className="text-base md:text-lg mb-6 leading-relaxed relative z-10">"{r.text}"</p>
              <div className="flex items-center gap-4 not-italic">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary border border-outline-variant">
                  <User size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-primary text-base">{r.name}</h4>
                  <p className="text-xs text-on-surface-variant font-medium">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-16 md:py-24 px-4 md:px-12 bg-primary relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-secondary-container/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    
    <div className="max-w-4xl mx-auto text-center relative z-10">
      <div className="bg-white/5 p-8 md:p-16 rounded-[3rem] border border-white/10 backdrop-blur-sm">
        <h2 className="text-3xl md:text-5xl font-extrabold text-on-primary mb-6 leading-tight">Start Your Accounting <br className="hidden md:block" /> Career Today</h2>
        <p className="text-lg md:text-xl text-on-primary/80 mb-10 max-w-2xl mx-auto">Join Ayan Academy and become a professional accountant with industry-recognized skills.</p>
        <button className="w-full md:w-auto bg-secondary-container text-white px-10 py-5 rounded-2xl font-extrabold text-xl md:text-2xl shadow-2xl flex items-center justify-center gap-4 hover:bg-secondary-container/90 hover:scale-105 active:scale-95 transition-all">
          <Phone />
          Call Now +91 98258 93675
        </button>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-tertiary text-on-tertiary pt-16 pb-24 md:pb-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold text-secondary-container mb-4">Ayan Academy</h2>
          <p className="text-on-tertiary/60 leading-relaxed mb-8 max-w-xs">Practical accounting institute for career growth. We Make Accountants.</p>
          <div className="flex gap-4">
            {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
              <div key={i} className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors border border-white/10">
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-1">
          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Quick Links</h3>
            <ul className="space-y-4 text-on-tertiary/60">
              {['Home', 'About Us', 'Courses', 'Gallery', 'Contact'].map(link => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors text-sm">{link}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Support</h3>
            <ul className="space-y-4 text-on-tertiary/60">
              {['FAQ', 'Career Guidance', 'Student Portal', 'Privacy Policy'].map(link => (
                <li key={link} className="hover:text-white cursor-pointer transition-colors text-sm">{link}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:col-span-1">
          <h3 className="font-bold text-white mb-6 uppercase text-sm tracking-widest">Contact Info</h3>
          <ul className="space-y-5 text-on-tertiary/60">
            <li className="flex items-start gap-4">
              <Phone className="text-secondary-container shrink-0" size={20} />
              <span className="text-sm">+91 98258 93675</span>
            </li>
            <li className="flex items-start gap-4">
              <MapPin className="text-secondary-container shrink-0" size={20} />
              <span className="text-sm">Ahmedabad, Gujarat</span>
            </li>
            <li className="flex items-start gap-4">
              <MessageCircle className="text-secondary-container shrink-0" size={20} />
              <span className="text-sm">ayanacademy@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/5 text-center">
        <p className="text-xs text-on-tertiary/40">© 2024 Ayan Academy. We Make Accountants. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const MobileNav = () => (
  <nav className="fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-md border-t border-outline-variant md:hidden z-50 px-6 py-3 flex justify-between items-center shadow-[0_-8px_30px_rgb(0,0,0,0.08)]">
    <div className="flex flex-col items-center gap-1 text-primary font-bold">
      <Home size={22} fill="currentColor" />
      <span className="text-[10px]">Home</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-on-surface-variant font-medium">
      <Users size={22} />
      <span className="text-[10px]">Courses</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-on-surface-variant font-medium">
      <Search size={22} />
      <span className="text-[10px]">Gallery</span>
    </div>
    <div className="flex flex-col items-center gap-1 text-on-surface-variant font-medium">
      <Contact size={22} />
      <span className="text-[10px]">Contact</span>
    </div>
  </nav>
);

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <About />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}

