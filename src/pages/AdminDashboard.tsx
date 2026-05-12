import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  BookOpen, 
  DollarSign, 
  TrendingUp, 
  Bell, 
  Settings, 
  Plus, 
  Search, 
  Edit, 
  Trash2, 
  Calendar, 
  LayoutDashboard,
  LogOut,
  ChevronRight,
  MoreVertical,
  CheckCircle2,
  Clock,
  User as UserIcon,
  Download,
  GraduationCap
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
import { ADMIN_STATS, REVENUE_DATA, ATTENDANCE_DATA, STUDENTS_DATA, COURSES } from '../constants/data';
import { cn } from '../lib/utils';
import { useAuth } from '../App';

const StatBox = ({ title, value, icon: Icon, change, isPositive }: any) => (
  <div className="bg-white p-8 rounded-[2.5rem] border border-outline-variant shadow-sm hover:shadow-md transition-shadow group">
    <div className="flex justify-between items-start mb-6">
      <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
        <Icon size={28} />
      </div>
      <div className={cn(
        "flex items-center gap-1 text-xs font-black px-3 py-1 rounded-full",
        isPositive ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"
      )}>
        <TrendingUp size={12} className={cn(!isPositive && "rotate-180")} />
        {change}%
      </div>
    </div>
    <div className="text-3xl font-black text-primary mb-1">{value}</div>
    <div className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">{title}</div>
  </div>
);

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const { logout } = useAuth();

  const sidebarItems = [
    { name: "Overview", icon: <LayoutDashboard size={20} /> },
    { name: "Students", icon: <Users size={20} /> },
    { name: "Courses", icon: <BookOpen size={20} /> },
    { name: "Finances", icon: <DollarSign size={20} /> },
    { name: "Settings", icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex min-h-screen bg-surface pt-20">
      {/* Sidebar - Fix position on desktop */}
      <aside className="w-80 border-r border-outline-variant fixed left-0 top-20 h-[calc(100vh-80px)] bg-white hidden lg:flex flex-col p-8">
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
              <span className={cn(
                "transition-transform",
                activeTab === item.name ? "scale-110" : "group-hover:scale-110"
              )}>
                {item.icon}
              </span>
              {item.name}
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
      <main className="flex-1 lg:ml-80 p-6 md:p-12">
        <header className="flex justify-between items-center mb-12">
          <div>
            <h1 className="text-3xl font-black text-primary mb-2">Admin Panel</h1>
            <p className="text-sm font-bold text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                <Clock size={16} className="text-secondary-container" />
                Control Center • May 12, 2026
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative p-3 bg-white border border-outline-variant rounded-2xl hover:bg-surface-container transition-all">
                <Bell size={20} />
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="hidden sm:flex items-center gap-3 bg-white p-2 pr-6 border border-outline-variant rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center font-black">A</div>
                <div className="text-left">
                    <p className="text-xs font-black text-primary leading-none mb-1">Administrator</p>
                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Master Access</p>
                </div>
            </div>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {activeTab === "Overview" ? (
            <motion.div 
               key="overview"
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               className="space-y-12"
            >
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <StatBox title="Total Students" value={ADMIN_STATS.totalStudents} icon={Users} change={12} isPositive={true} />
                    <StatBox title="Monthly Revenue" value={`₹${ADMIN_STATS.revenueMonthly}`} icon={DollarSign} change={8.2} isPositive={true} />
                    <StatBox title="New Admissions" value={ADMIN_STATS.newAdmissions} icon={UserIcon} change={5.4} isPositive={false} />
                    <StatBox title="Completion Rate" value={`${ADMIN_STATS.courseCompletionRate}%`} icon={CheckCircle2} change={3.1} isPositive={true} />
                </div>

                {/* Charts */}
                <div className="grid lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-8 bg-white p-10 rounded-[3rem] border border-outline-variant shadow-sm">
                        <div className="flex justify-between items-center mb-10">
                            <h3 className="text-xl font-black text-primary">Revenue Analytics</h3>
                            <select className="bg-surface-container border-none rounded-xl px-4 py-2 text-xs font-bold font-sans">
                                <option>Last 6 Months</option>
                                <option>Last Year</option>
                            </select>
                        </div>
                        <div className="h-[400px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={REVENUE_DATA}>
                                    <defs>
                                        <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#00236f" stopOpacity={0.1}/>
                                            <stop offset="95%" stopColor="#00236f" stopOpacity={0}/>
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#757682', fontSize: 12, fontWeight: 700}} dy={10} />
                                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#757682', fontSize: 12, fontWeight: 700}} dx={-10} />
                                    <Tooltip 
                                      contentStyle={{borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)'}}
                                      itemStyle={{fontWeight: 900, color: '#00236f'}}
                                    />
                                    <Area type="monotone" dataKey="amount" stroke="#00236f" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="lg:col-span-4 bg-white p-10 rounded-[3rem] border border-outline-variant shadow-sm">
                        <h3 className="text-xl font-black text-primary mb-10">Recent Activity</h3>
                        <div className="space-y-8">
                            {[1, 2, 3, 4, 5].map(i => (
                                <div key={i} className="flex gap-6 items-start">
                                    <div className="w-10 h-10 rounded-[1.25rem] bg-surface-container flex items-center justify-center shrink-0">
                                        <div className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-primary mb-1 leading-tight">New Enrollment in Tally Master</p>
                                        <p className="text-xs font-bold text-on-surface-variant flex items-center gap-2">
                                            <Clock size={12} />
                                            15 minutes ago
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <button className="w-full mt-12 py-4 bg-surface-container rounded-2xl text-xs font-black text-primary uppercase tracking-widest hover:bg-surface-container-high transition-colors">
                            View All Logs
                        </button>
                    </div>
                </div>

                {/* Quick Academic Overview */}
                <div className="grid lg:grid-cols-2 gap-8">
                    <div className="bg-white p-10 rounded-[3rem] border border-outline-variant shadow-sm">
                        <h3 className="text-xl font-black text-primary mb-8">Daily Attendance</h3>
                        <div className="h-[250px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={ATTENDANCE_DATA}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontWeight: 700}}/>
                                    <YAxis axisLine={false} tickLine={false} tick={{fontWeight: 700}}/>
                                    <Tooltip cursor={{fill: 'transparent'}} contentStyle={{borderRadius: '16px'}} />
                                    <Bar dataKey="count" fill="#fd761a" radius={[10, 10, 10, 10]} barSize={40} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                    <div className="bg-primary rounded-[3rem] p-10 text-white relative overflow-hidden flex flex-col justify-center">
                         <h3 className="text-3xl font-black mb-4">Academic Report</h3>
                         <p className="text-white/60 mb-8 max-w-sm">Monthly performance report is ready. 45 new students have joined this week.</p>
                         <button className="w-fit bg-secondary-container text-white px-8 py-3 rounded-2xl font-black text-sm flex items-center gap-2 shadow-xl">
                            <Download size={18} />
                            Generate PDF
                         </button>
                         <GraduationCap className="absolute top-[-20px] right-[-20px] w-48 h-48 text-white/5 rotate-12" />
                    </div>
                </div>
            </motion.div>
          ) : activeTab === "Students" ? (
             <motion.div 
               key="students"
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               className="bg-white rounded-[3.5rem] border border-outline-variant shadow-xl overflow-hidden"
             >
                <div className="p-10 border-b border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-6">
                    <div className="relative w-full max-w-sm group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors" size={20} />
                        <input 
                          type="text" 
                          placeholder="Search students..." 
                          className="w-full pl-16 pr-6 py-4 rounded-2xl bg-surface-container border-2 border-transparent focus:border-primary/20 outline-none font-bold"
                        />
                    </div>
                    <button className="w-full sm:w-auto bg-primary text-white px-8 py-4 rounded-2xl font-black flex items-center justify-center gap-3 shadow-xl">
                        <Plus size={20} />
                        Add Student
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-surface-container/30">
                            <tr>
                                <th className="px-10 py-6 text-left text-xs font-black text-on-surface-variant uppercase tracking-widest">Student</th>
                                <th className="px-6 py-6 text-left text-xs font-black text-on-surface-variant uppercase tracking-widest">Joined</th>
                                <th className="px-6 py-6 text-left text-xs font-black text-on-surface-variant uppercase tracking-widest">Attendance</th>
                                <th className="px-6 py-6 text-left text-xs font-black text-on-surface-variant uppercase tracking-widest">Status</th>
                                <th className="px-10 py-6 text-right text-xs font-black text-on-surface-variant uppercase tracking-widest">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant">
                            {STUDENTS_DATA.map(st => (
                                <tr key={st.id} className="hover:bg-surface-container/20 transition-colors">
                                    <td className="px-10 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-black uppercase shadow-sm">
                                                {st.name.charAt(0)}
                                            </div>
                                            <div>
                                                <p className="font-black text-primary">{st.name}</p>
                                                <p className="text-xs font-bold text-on-surface-variant uppercase">{st.email}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6 font-bold text-sm text-on-surface-variant">{st.joinedDate}</td>
                                    <td className="px-6 py-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-24 h-2 bg-outline-variant rounded-full overflow-hidden">
                                                <div className="h-full bg-secondary-container" style={{width: `${st.attendance}%`}} />
                                            </div>
                                            <span className="text-xs font-black text-primary">{st.attendance}%</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-6">
                                        <span className={cn(
                                            "px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest",
                                            st.status === 'Active' ? "bg-green-100 text-green-600" : "bg-surface-container text-on-surface-variant"
                                        )}>
                                            {st.status}
                                        </span>
                                    </td>
                                    <td className="px-10 py-6 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="p-3 bg-surface-container rounded-xl text-primary hover:bg-primary hover:text-white transition-all">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-3 bg-red-50 rounded-xl text-error hover:bg-error hover:text-white transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
             </motion.div>
          ) : (
            <div className="flex items-center justify-center h-[60vh] text-on-surface-variant font-black uppercase tracking-[0.4em]">
                {activeTab} Coming Soon
            </div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
