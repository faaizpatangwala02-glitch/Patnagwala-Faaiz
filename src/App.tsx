/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  MessageCircle, 
  Menu, 
  X, 
  LogOut, 
  Bell, 
  User as UserIcon, 
  LayoutDashboard, 
  BookOpen, 
  Image as ImageIcon, 
  PhoneCall, 
  Home as HomeIcon,
  Moon,
  Sun,
  ChevronUp
} from 'lucide-react';
import { cn } from './lib/utils';
import { AuthUser } from './types';

// Pages
import HomePage from './pages/HomePage';
import CoursesPage from './pages/CoursesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StudentDashboard from './pages/StudentDashboard';
import AdminDashboard from './pages/AdminDashboard';

// Toast Context
const ToastContext = createContext<{
  showToast: (msg: string, type?: 'success' | 'error' | 'info') => void;
} | null>(null);

export const useToast = () => useContext(ToastContext)!;

// Auth Context
const AuthContext = createContext<{
  user: AuthUser;
  login: (role: 'admin' | 'student') => void;
  logout: () => void;
} | null>(null);

export const useAuth = () => useContext(AuthContext)!;

// Theme Context
const ThemeContext = createContext<{
  isDark: boolean;
  toggleTheme: () => void;
} | null>(null);

export const useTheme = () => useContext(ThemeContext)!;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <HomeIcon size={18} /> },
    { name: 'Courses', path: '/courses', icon: <BookOpen size={18} /> },
    { name: 'Gallery', path: '/gallery', icon: <ImageIcon size={18} /> },
    { name: 'Contact', path: '/contact', icon: <PhoneCall size={18} /> },
  ];

  const handleScrollToLink = (path: string) => {
    setIsOpen(false);
    if (path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-[100] transition-all duration-500 py-3 md:py-5",
      scrolled 
        ? "bg-surface/80 dark:bg-on-background/80 backdrop-blur-xl border-b border-outline-variant py-2 shadow-sm" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="/" className="flex flex-col select-none" onClick={() => handleScrollToLink('/')}>
          <span className={cn(
            "text-2xl font-black tracking-tighter transition-colors",
            scrolled || isDark ? "text-primary dark:text-primary-fixed" : "text-white"
          )}>
            Ayan Academy
          </span>
          <span className={cn(
            "text-[9px] uppercase tracking-[0.3em] font-extrabold",
            scrolled || isDark ? "text-on-surface-variant dark:text-tertiary-fixed-dim" : "text-white/80"
          )}>
            We Make Accountants
          </span>
        </a>

        {/* Desktop Nav */}
        <div className={cn(
            "hidden lg:flex items-center gap-10 font-bold text-sm",
            scrolled || isDark ? "text-on-surface" : "text-white"
        )}>
          {navLinks.map((link) => (
            <a 
              key={link.path}
              href={link.path}
              className={cn(
                "relative group py-2",
                location.pathname === link.path ? "text-secondary-container" : "hover:text-secondary-container/80 transition-colors"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-secondary-container scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left",
                location.pathname === link.path ? "scale-x-100" : ""
              )} />
            </a>
          ))}
          
          <div className="h-6 w-px bg-outline-variant" />
          
          <div className="flex items-center gap-4">
            <button onClick={toggleTheme} className="p-2 rounded-xl hover:bg-surface-container transition-colors">
              {isDark ? <Sun size={20} className="text-primary-fixed" /> : <Moon size={20} />}
            </button>

            {user ? (
              <div className="flex items-center gap-4">
                <a 
                  href={user.role === 'admin' ? '/admin' : '/dashboard'}
                  className="bg-primary text-white px-6 py-2.5 rounded-2xl flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95"
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </a>
                <button 
                  onClick={logout}
                  className="p-2.5 text-error hover:bg-error/10 rounded-2xl transition-colors"
                >
                  <LogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <a href="/login" className="px-6 py-2.5 hover:opacity-70 transition-opacity">Login</a>
                <a href="/register" className="bg-secondary text-white px-8 py-2.5 rounded-2xl hover:bg-secondary/90 transition-all shadow-xl shadow-secondary/10">Join Now</a>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className={cn(
            "lg:hidden flex items-center gap-4",
            scrolled || isDark ? "text-on-surface" : "text-white"
        )}>
          <button onClick={toggleTheme} className="p-2">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 w-full bg-surface dark:bg-on-background border-b border-outline-variant shadow-2xl p-8 z-[100]"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.path}
                  href={link.path}
                  className="flex items-center gap-4 text-2xl font-black text-on-surface dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="text-primary">{link.icon}</span>
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-outline-variant" />
              {user ? (
                <div className="flex flex-col gap-4">
                  <a href={user.role === 'admin' ? '/admin' : '/dashboard'} className="flex items-center gap-4 text-2xl font-black text-primary">
                    <LayoutDashboard size={24} />
                    My Dashboard
                  </a>
                  <button onClick={logout} className="flex items-center gap-4 text-2xl font-black text-error text-left">
                    <LogOut size={24} />
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  <a href="/login" className="w-full text-center py-4 text-lg font-bold border border-outline-variant rounded-2xl">Login</a>
                  <a href="/register" className="w-full text-center py-4 text-lg font-bold bg-secondary text-white rounded-2xl">Create Account</a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <motion.a 
    href="https://wa.me/919825893675"
    target="_blank"
    rel="noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    whileHover={{ scale: 1.15 }}
    className="fixed bottom-24 md:bottom-12 right-6 z-[90] bg-[#25D366] text-white p-5 rounded-[2rem] shadow-2xl flex items-center justify-center hover:shadow-[#25D366]/30 transition-all"
  >
    <MessageCircle size={28} />
  </motion.a>
);

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const checkScroll = () => setVisible(window.scrollY > 400);
      window.addEventListener('scroll', checkScroll);
      return () => window.removeEventListener('scroll', checkScroll);
    }, []);
  
    return (
      <AnimatePresence>
        {visible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-44 md:bottom-32 right-6 z-[90] bg-white dark:bg-on-surface text-primary p-4 rounded-[1.5rem] shadow-2xl border border-outline-variant hover:bg-surface-container transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    );
  };

export default function App() {
  const [user, setUser] = useState<AuthUser>(null);
  const [isDark, setIsDark] = useState(false);
  const [toast, setToast] = useState<{ msg: string; type: 'success' | 'error' | 'info' } | null>(null);

  const login = (role: 'admin' | 'student') => {
    setUser({
      id: role === 'admin' ? 'admin_1' : 'student_1',
      name: role === 'admin' ? 'Admin User' : 'Student User',
      role,
      email: role === 'admin' ? 'admin@ayan.edu' : 'student@ayan.edu',
    });
    showToast(`Welcome back, ${role === 'admin' ? 'Admin' : 'Student'}!`, "success");
  };

  const logout = () => {
    setUser(null);
    showToast("Successfully logged out", "info");
  };

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  const showToast = (msg: string, type: 'success' | 'error' | 'info' = 'info') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      <ThemeContext.Provider value={{ isDark, toggleTheme }}>
        <ToastContext.Provider value={{ showToast }}>
          <BrowserRouter>
            <div className={cn(
                "min-h-screen transition-colors duration-500 ease-in-out selection:bg-secondary-container selection:text-white", 
                isDark ? "dark bg-on-background text-on-surface" : "bg-background"
            )}>
              <Navbar />
              
              <main className="relative z-0 pt-0">
                <AnimatePresence mode="wait">
                    <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/courses" element={<CoursesPage />} />
                    <Route path="/gallery" element={<GalleryPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/login" element={user ? <Navigate to="/" /> : <LoginPage />} />
                    <Route path="/register" element={user ? <Navigate to="/" /> : <RegisterPage />} />
                    
                    {/* Protected Routes */}
                    <Route 
                        path="/dashboard/*" 
                        element={user?.role === 'student' ? <StudentDashboard /> : <Navigate to="/login" />} 
                    />
                    <Route 
                        path="/admin/*" 
                        element={user?.role === 'admin' ? <AdminDashboard /> : <Navigate to="/login" />} 
                    />
                    </Routes>
                </AnimatePresence>
              </main>

              <WhatsAppButton />
              <BackToTop />

              {/* Toast Message */}
              <AnimatePresence>
                {toast && (
                  <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 50, scale: 0.8 }}
                    className={cn(
                      "fixed bottom-10 left-1/2 -translate-x-1/2 z-[1000] px-8 py-4 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white font-black text-sm flex items-center gap-4 border border-white/10 backdrop-blur-2xl",
                      toast.type === 'success' ? "bg-secondary-container" : toast.type === 'error' ? "bg-error" : "bg-primary"
                    )}
                  >
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        {toast.type === 'success' ? '✓' : toast.type === 'error' ? '✕' : '!'}
                    </div>
                    {toast.msg}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </BrowserRouter>
        </ToastContext.Provider>
      </ThemeContext.Provider>
    </AuthContext.Provider>
  );
}
