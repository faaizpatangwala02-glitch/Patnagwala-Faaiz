import { Course, Review, Student, Notification } from "../types";

export const COURSES: Course[] = [
  {
    id: "1",
    title: "Tally Prime With GST",
    description: "Comprehensive mastery of Tally including GST returns, reconciliation, and advanced reporting.",
    category: "Software",
    price: "₹15,000",
    duration: "3 Months",
    rating: 4.8,
    reviews: 124,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCjmVjQ1iUJQeJp1LaYAICCTdKX2ncfQz_jwbXXw_eV_QxicvBCCfB4I1PSK0fnzOyZXvxX0gFwtmIstJC_zVKkTKfVA8vrR0Zkm2U4Md1y_ODCVNzc3DO8xUECDAy4sDu7Bgp36Oqs52VpAGTyRLyvobza07vT0dXcnP4Mp--kvMGccUdPUdvA7hHV5bL5R-2uwqR--_hJ7Lr4PQQx2Q_TvxsW04x2E7qyiunrI2gU1IVjZrlgUQQDaH96qTx28VsN3RkTj1RyiqM",
    featured: true,
    studentsCount: 450
  },
  {
    id: "2",
    title: "Advanced Excel Mastery",
    description: "Master formulas, pivot tables, and dashboard creation for complex financial data analysis.",
    category: "Office",
    price: "₹8,000",
    duration: "2 Months",
    rating: 4.9,
    reviews: 89,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfJ206-CheZih_Br1jit1CwUpYR2C-9KbxfTMSiAmS0pmzgpvGngwXOvclbByCAyb4bBwiZMesR9_wVP1Kc8B-wk0bqbVGOjmCYb0TM2X-nzao2vSuXnoI51vtDbGnf1OvFzQ57cUu7CnHVjv9_MZKOSfJdVdxJPyZkMK-1hdKHjbZQah42Z3MPjFpOSVbgaNOGaKL46CmqNKAKlIBbww0ODOEerNggdNw5PNN37UNwDBCz0cYVaGsomWXQXrw1XF8rWXj1zt0S1E",
    featured: true,
    studentsCount: 320
  },
  {
    id: "3",
    title: "GST & TDS Filing Expert",
    description: "Hands-on practical training for filing various government tax returns and staying compliant.",
    category: "Taxation",
    price: "₹12,000",
    duration: "2.5 Months",
    rating: 4.7,
    reviews: 156,
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBodzMrjVRlG3B9VM7Chzj6XaNEskWneF62d1CC3DtoIcNJBVGwkaxE0wuCCM1Q-rzFT3XYoYOYTTlFvVgg9VgGinNNTGh7RwVTMBdyHFG71ggdaft1ytQ5WSJ3-MVu6DQdZHq6pNXQRm0dxaiLArbM2s0yfH3FaOcqFWPC-mMXlQDYwllvaGgkkRG1PZggH3MHK7SWN2XbZ_NH74QNv4z5kegM_1YPDR3fHwsj_MFz_TOPGcWbgGkrmta_m-m0G8MkO0-MAjC_o0o",
    featured: true,
    studentsCount: 280
  },
  {
    id: "4",
    title: "Project Management for Accountants",
    description: "Learn how to manage large scale accounting projects and team workflows efficiently.",
    category: "Accounting",
    price: "₹10,000",
    duration: "3 Months",
    rating: 4.6,
    reviews: 45,
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    featured: false,
    studentsCount: 120
  }
];

export const REVIEWS: Review[] = [
  {
    id: "1",
    name: "Ishan Patel",
    role: "Tally Prime Student",
    text: "Ayan Academy helped me get practical accounting knowledge and confidence for real jobs. The faculty is extremely supportive.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=ishan"
  },
  {
    id: "2",
    name: "Priya Shah",
    role: "GST & Taxation Student",
    text: "Best Tally and GST training institute with supportive faculty. The hands-on training style is exactly what I needed.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=priya"
  },
  {
    id: "3",
    name: "Snehal Mehta",
    role: "Advanced Excel Student",
    text: "Very professional teaching style and practical learning environment. I highly recommend Ayan Academy to all accounting aspirants.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=snehal"
  },
  {
    id: "4",
    name: "Harshil Vyas",
    role: "Full Accounting Course",
    text: "Practical approach is what sets Ayan Academy apart. I learned more here in 3 months than in my entire college degree.",
    rating: 5,
    image: "https://i.pravatar.cc/150?u=harshil"
  }
];

export const STUDENTS_DATA: Student[] = [
  { id: "101", name: "Anish Kumar", email: "anish@example.com", joinedDate: "2024-01-15", status: "Active", totalCourses: 2, attendance: 95, paidAmount: 23000 },
  { id: "102", name: "Sneha Reddy", email: "sneha@example.com", joinedDate: "2024-02-10", status: "Active", totalCourses: 1, attendance: 88, paidAmount: 15000 },
  { id: "103", name: "Vikram Singh", email: "vikram@example.com", joinedDate: "2023-12-05", status: "Inactive", totalCourses: 3, attendance: 70, paidAmount: 35000 },
];

export const NOTIFICATIONS: Notification[] = [
  { id: "1", title: "Fee Due", message: "Your installment for Tally Prime is due by 15th.", time: "2 hours ago", read: false, type: "warning" },
  { id: "2", title: "New Assignment", message: "Assignment 4: GST Reconciliation has been posted.", time: "5 hours ago", read: false, type: "info" },
  { id: "3", title: "Welcome!", message: "Welcome to Ayan Academy. Let's start your journey.", time: "1 day ago", read: true, type: "success" },
];

export const ADMIN_STATS = {
  totalStudents: 1240,
  activeStudents: 850,
  revenueMonthly: 345000,
  revenueGrowth: 22.4,
  courseCompletionRate: 92,
  newAdmissions: 45
};

export const REVENUE_DATA = [
  { month: 'Jan', amount: 80000 },
  { month: 'Feb', amount: 95000 },
  { month: 'Mar', amount: 110000 },
  { month: 'Apr', amount: 125000 },
];

export const ATTENDANCE_DATA = [
  { day: 'Mon', count: 42 },
  { day: 'Tue', count: 38 },
  { day: 'Wed', count: 45 },
  { day: 'Thu', count: 41 },
  { day: 'Fri', count: 40 },
];
