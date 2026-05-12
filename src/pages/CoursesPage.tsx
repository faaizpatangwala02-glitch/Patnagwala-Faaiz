import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  ShieldCheck,
  ChevronRight,
  ShoppingBag
} from 'lucide-react';
import { COURSES } from '../constants/data';
import { Course } from '../types';
import { cn } from '../lib/utils';
import { useToast } from '../App';

const categories = ["All", "Software", "Taxation", "Accounting", "Office"];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { showToast } = useToast();

  const filteredCourses = useMemo(() => {
    return COURSES.filter(c => {
      const matchesSearch = c.title.toLowerCase().includes(search.toLowerCase()) || 
                           c.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = activeCategory === "All" || c.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, activeCategory]);

  return (
    <div className="pt-32 pb-40 px-6 md:px-12 bg-surface min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-black text-primary mb-6 tracking-tight">Our Programs.</h1>
          <p className="text-lg text-on-surface-variant font-medium max-w-2xl">Find the perfect course to kickstart or advance your corporate accounting career with hands-on practice.</p>
        </div>

        {/* Controls */}
        <div className="flex flex-col lg:flex-row gap-8 items-center mb-20 bg-white p-6 md:p-10 rounded-[3rem] shadow-xl border border-outline-variant">
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" />
            <input 
              type="text" 
              placeholder="Search by course name or skill..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-8 py-5 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 outline-none font-bold text-lg transition-all"
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={cn(
                  "px-8 py-4 rounded-xl text-sm font-black transition-all active:scale-95",
                  activeCategory === cat 
                    ? "bg-primary text-white shadow-xl shadow-primary/20" 
                    : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, idx) => (
                <motion.div 
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="bg-white rounded-[3rem] overflow-hidden shadow-lg border border-outline-variant hover:shadow-2xl transition-all group cursor-pointer h-full flex flex-col"
                  onClick={() => setSelectedCourse(course)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-6 left-6 bg-secondary-container text-white px-4 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase shadow-xl">
                      {course.category}
                    </div>
                  </div>
                  <div className="p-10 flex flex-col flex-1">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="flex">
                        {[1,2,3,4,5].map(i => <Star key={i} size={12} fill={i <= Math.floor(course.rating) ? "#fd761a" : "#e5e7eb"} stroke="none" />)}
                      </div>
                      <span className="text-[10px] font-black text-on-surface-variant tracking-widest uppercase">Excellent Training</span>
                    </div>
                    <h3 className="text-2xl font-black text-primary mb-4 leading-tight">{course.title}</h3>
                    <p className="text-on-surface-variant font-medium text-sm mb-10 line-clamp-2 leading-relaxed">{course.description}</p>
                    
                    <div className="mt-auto flex items-center justify-between pt-8 border-t border-outline-variant">
                      <div className="flex items-center gap-4 text-primary font-black">
                        <Clock size={16} className="text-secondary-container" />
                        <span className="text-sm">{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-4 text-primary font-black">
                        <Users size={16} className="text-secondary-container" />
                        <span className="text-sm">{course.studentsCount}+</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-40 text-center">
                <div className="w-24 h-24 bg-surface-container rounded-full flex items-center justify-center mx-auto mb-6 text-on-surface-variant">
                    <Search size={40} />
                </div>
                <h3 className="text-2xl font-black text-primary mb-2">No courses found</h3>
                <p className="text-on-surface-variant font-medium">Try searching with a different term or category.</p>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Course Detail Modal */}
      <AnimatePresence>
        {selectedCourse && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 md:p-12">
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedCourse(null)}
                    className="absolute inset-0 bg-primary/40 backdrop-blur-md"
                />
                <motion.div 
                    layoutId={`course-${selectedCourse.id}`}
                    initial={{ scale: 0.9, opacity: 0, y: 20 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.9, opacity: 0, y: 20 }}
                    className="relative w-full max-w-5xl bg-white rounded-[4rem] shadow-huge overflow-hidden max-h-[90vh] overflow-y-auto no-scrollbar"
                >
                    <button 
                        onClick={() => setSelectedCourse(null)}
                        className="absolute top-8 right-8 z-10 w-12 h-12 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-2xl flex items-center justify-center text-white transition-all"
                    >
                        <X size={24} />
                    </button>

                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-2/5 h-80 lg:h-auto relative">
                            <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                            <div className="absolute bottom-10 left-10 text-white">
                                <div className="bg-secondary-container text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full w-fit mb-4">
                                    {selectedCourse.category}
                                </div>
                                <h2 className="text-4xl font-black">{selectedCourse.title}</h2>
                            </div>
                        </div>
                        <div className="lg:w-3/5 p-10 md:p-16">
                            <div className="flex flex-wrap gap-10 mb-12">
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Duration</span>
                                    <span className="text-xl font-black text-primary">{selectedCourse.duration}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Price</span>
                                    <span className="text-xl font-black text-primary">{selectedCourse.price}</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-on-surface-variant uppercase tracking-widest mb-2">Rating</span>
                                    <div className="flex items-center gap-2">
                                        <Star size={18} fill="#fd761a" stroke="none" />
                                        <span className="text-xl font-black text-primary">{selectedCourse.rating}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="mb-12">
                                <h4 className="text-xl font-black text-primary mb-6">What you'll learn</h4>
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {["Tally Prime Operations", "GST & TDS Compliance", "Ledger Management", "Financial Reporting", "Excel Automation", "Audit Essentials"].map(f => (
                                        <div key={f} className="flex items-center gap-3">
                                            <CheckCircle2 className="text-secondary-container" size={20} />
                                            <span className="font-bold text-on-surface-variant text-sm">{f}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="p-8 bg-surface-container rounded-3xl border border-outline-variant mb-12">
                                <div className="flex items-start gap-4">
                                    <ShieldCheck className="text-primary shrink-0" size={32} />
                                    <div>
                                        <h5 className="font-black text-primary mb-1">Guaranteed Certification</h5>
                                        <p className="text-xs text-on-surface-variant font-medium">Earn an ISO certified diploma that is valid globally and trusted by employers.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <button 
                                    onClick={() => {
                                        showToast("Enrolled successfully!", "success");
                                        setSelectedCourse(null);
                                    }}
                                    className="flex-1 bg-primary text-white py-5 rounded-2xl font-black text-lg shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-3"
                                >
                                    <ShoppingBag size={20} />
                                    Enroll Now
                                </button>
                                <button className="flex-1 border-2 border-outline-variant text-primary py-5 rounded-2xl font-black text-lg hover:bg-surface-container transition-all">
                                    Download Syllabus
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        )}
      </AnimatePresence>
    </div>
  );
}
