import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  Calendar, 
  Award, 
  Clock, 
  Bell, 
  User as UserIcon, 
  Play, 
  CheckCircle2, 
  FileText, 
  CreditCard,
  Settings,
  LogOut,
  ChevronRight,
  TrendingUp,
  Download,
  ArrowRight
} from 'lucide-react';
import { COURSES, NOTIFICATIONS } from '../constants/data';
import { cn } from '../lib/utils';
import { useAuth } from '../App';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState("Dashboard");
  const { user, logout } = useAuth();
  
  const sidebarItems = [
    { name: "Dashboard", icon: <UserIcon size={20} /> },
    { name: "My Courses", icon: <BookOpen size={20} /> },
    { name: "Assignments", icon: <FileText size={20} /> },
    { name: "Payments", icon: <CreditCard size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-surface pt-20">
      {/* Sidebar - Mobile handles this via bottom nav, desktop uses this */}
      <aside className="w-80 border-r border-outline-variant fixed left-0 top-20 h-[calc(100vh-80px)] bg-white hidden lg:flex flex-col p-8 z-[50]">
        <div className="space-y-4 flex-1">
          {sidebarItems.map(item => (
            <button 
              key={item.name}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-black text-sm transition-all group",
                activeTab === item.name 
                  ? "bg-primary text-white shadow-xl shadow-primary/20" 
                  : "text-on-surface-variant hover:bg-surface-container"
              )}
            >
              {item.icon}
              {item.name}
              {activeTab === item.name && (
                <motion.div layoutId="student-nav-indicator" className="ml-auto">
                    <ChevronRight size={16} />
                </motion.div>
              )}
            </button>
          ))}
        </div>
        <button 
          onClick={logout}
          className="mt-auto flex items-center gap-4 px-6 py-4 text-error font-black text-sm hover:bg-error/5 rounded-2xl transition-all"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 lg:ml-80 p-6 md:p-12 pb-32">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-black text-primary mb-2">My Learning Portal</h1>
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Clock size={16} className="text-secondary-container" />
                Good Morning, {user?.name.split(' ')[0]}!
            </p>
          </div>
          <div className="flex items-center gap-4 w-full md:w-auto">
            <button className="relative p-4 bg-white border border-outline-variant rounded-2xl hover:bg-surface-container transition-all flex-1 md:flex-none">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-3 h-3 bg-secondary-container rounded-full border-2 border-white animate-pulse" />
            </button>
            <div className="flex items-center gap-4 bg-white p-2 pr-6 border border-outline-variant rounded-2xl flex-[3] md:flex-none">
                <img src={`https://i.pravatar.cc/150?u=${user?.id}`} className="w-12 h-12 rounded-xl border-2 border-surface shadow-sm" alt="Me" />
                <div className="text-left">
                    <p className="text-xs font-black text-primary leading-none mb-1">Student Account</p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Roll #AY-0245</p>
                </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "Dashboard" ? (
            <motion.div 
               key="dashboard"
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="space-y-12"
            >
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden group shadow-xl">
                        <div className="relative z-10">
                            <h3 className="text-sm font-black uppercase tracking-widest text-white/50 mb-3">Course Completion</h3>
                            <div className="text-5xl font-black mb-6">78%</div>
                            <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                                <motion.div 
                                    initial={{ width: 0 }}
                                    animate={{ width: '78%' }}
                                    className="h-full bg-secondary-container rounded-full" 
                                />
                            </div>
                        </div>
                        <TrendingUp className="absolute bottom-[-10px] right-2 text-white/10 w-40 h-40 group-hover:scale-110 transition-transform" />
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 border border-outline-variant shadow-sm group">
                        <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">Attendance Rating</h3>
                        <div className="flex items-end gap-2 mb-8">
                            <span className="text-4xl font-black text-primary">Very Good</span>
                        </div>
                        <div className="flex gap-2">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className={cn(
                                    "w-3 h-8 rounded-full",
                                    i <= 4 ? "bg-primary" : "bg-surface-container"
                                )} />
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[3rem] p-10 border border-outline-variant shadow-sm relative group overflow-hidden">
                        <h3 className="text-sm font-black uppercase tracking-widest text-on-surface-variant mb-6">Certificates Earned</h3>
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 bg-secondary-container/10 rounded-3xl flex items-center justify-center text-secondary-container">
                                <Award size={48} />
                            </div>
                            <div>
                                <div className="text-3xl font-black text-primary">02</div>
                                <div className="text-xs font-bold text-on-surface-variant">View All Certificates</div>
                            </div>
                        </div>
                        <Award className="absolute top-[-20px] right-[-20px] text-primary/5 w-48 h-48 rotate-12" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Active Course */}
                    <div className="lg:col-span-12">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-2xl font-black text-primary flex items-center gap-3">
                                <Play className="text-secondary-container" fill="currentColor" />
                                Current Study
                            </h3>
                            <button className="text-xs font-black text-secondary-container uppercase tracking-widest hover:underline transition-all">My Full Schedule</button>
                        </div>
                        
                        <div className="bg-white rounded-[3.5rem] border border-outline-variant p-10 flex flex-col md:flex-row gap-12 items-center shadow-xl relative overflow-hidden group">
                           <div className="w-full md:w-2/5 aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                               <img src={COURSES[0].image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt="Current Course" />
                               <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="w-20 h-20 rounded-full bg-white text-primary flex items-center justify-center shadow-2xl animate-pulse">
                                        <Play size={40} fill="currentColor" />
                                    </div>
                               </div>
                           </div>
                           <div className="flex-1">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-secondary-container/10 text-secondary-container text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full">Active Learning</span>
                                    <span className="text-xs font-bold text-on-surface-variant">Last Session: 2 Days ago</span>
                                </div>
                                <h4 className="text-3xl font-black text-primary mb-4 leading-tight">{COURSES[0].title}</h4>
                                <p className="text-on-surface-variant font-medium mb-10 line-clamp-2 leading-relaxed">Continue where you left off. Today's module: "Advanced GST Input Credit Reconciliation".</p>
                                <div className="flex items-center gap-6">
                                    <button className="bg-primary text-white px-10 py-4 rounded-xl font-black flex items-center gap-2 shadow-xl active:scale-95 transition-all">
                                        Resume Course
                                        <ArrowRight size={20} />
                                    </button>
                                    <button className="text-primary font-black flex items-center gap-2 hover:gap-3 transition-all">
                                        View Modules
                                    </button>
                                </div>
                           </div>
                           <div className="absolute top-10 right-10 hidden md:block">
                                <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant">
                                    <Settings size={28} />
                                </div>
                           </div>
                        </div>
                    </div>

                    {/* Notifications & Schedule */}
                    <div className="lg:col-span-7 bg-white rounded-[3.5rem] border border-outline-variant p-12 shadow-sm">
                        <h3 className="text-xl font-black text-primary mb-10 flex items-center gap-3">
                            <Bell className="text-secondary-container" />
                            Academic Alerts
                        </h3>
                        <div className="space-y-6">
                            {NOTIFICATIONS.map(note => (
                                <div key={note.id} className={cn(
                                    "p-8 rounded-[2rem] border border-outline-variant flex gap-6 group transition-all cursor-pointer",
                                    !note.read ? "bg-surface-container/30 border-primary/10 shadow-sm" : "bg-transparent opacity-80"
                                )}>
                                    <div className={cn(
                                        "w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-sm",
                                        note.type === 'warning' ? "bg-red-100 text-red-600" : 
                                        note.type === 'success' ? "bg-green-100 text-green-600" : "bg-blue-100 text-blue-600"
                                    )}>
                                        <Bell size={24} />
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-2 font-black text-primary">
                                            <h5 className="text-lg leading-none">{note.title}</h5>
                                            <span className="text-[10px] uppercase font-bold text-on-surface-variant">{note.time}</span>
                                        </div>
                                        <p className="text-sm font-medium text-on-surface-variant">{note.message}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:col-span-5 flex flex-col gap-8">
                        <div className="bg-secondary-container rounded-[3.5rem] p-12 text-white relative overflow-hidden group shadow-xl">
                            <div className="relative z-10 flex flex-col h-full">
                                <h3 className="text-2xl font-black mb-6 leading-tight">Next Class <br /> Is Ready.</h3>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                                        <Calendar size={24} />
                                    </div>
                                    <div className="font-bold">
                                        <div className="text-[10px] uppercase opacity-60">Tomorrow</div>
                                        <div className="text-lg">Monday, 04:30 PM</div>
                                    </div>
                                </div>
                                <div className="mt-12 group-hover:translate-x-2 transition-transform">
                                    <button className="bg-white text-secondary-container px-8 py-4 rounded-2xl font-black flex items-center gap-3 shadow-xl">
                                        <Play size={20} fill="currentColor" stroke="none" />
                                        Launch Session
                                    </button>
                                </div>
                            </div>
                            <Clock className="absolute top-[-30px] right-[-30px] w-64 h-64 text-white/10" />
                        </div>
                        
                        <div className="bg-white rounded-[3.5rem] border border-outline-variant p-12 shadow-sm flex flex-col justify-center items-center text-center group">
                            <div className="w-20 h-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center text-primary mb-6 transition-transform group-hover:rotate-6">
                                <Download size={40} />
                            </div>
                            <h4 className="text-lg font-black text-primary mb-2">Study Materials</h4>
                            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mb-8">Update available: V2.4</p>
                            <button className="w-full py-4 border-2 border-outline-variant rounded-2xl font-black text-sm text-primary hover:bg-surface-container transition-all">Access Repo</button>
                        </div>
                    </div>
                </div>
            </motion.div>
          ) : (
            <div className="flex items-center justify-center h-[60vh] text-on-surface-variant font-black uppercase tracking-[0.4em]">
                {activeTab} Module Locked
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
