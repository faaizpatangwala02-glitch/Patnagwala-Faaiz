export interface Course {
  id: string;
  title: string;
  description: string;
  category: "Accounting" | "Taxation" | "Software" | "Office";
  price: string;
  duration: string;
  rating: number;
  reviews: number;
  image: string;
  progress?: number;
  studentsCount?: number;
  featured?: boolean;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  joinedDate: string;
  status: "Active" | "Inactive";
  totalCourses: number;
  attendance: number;
  paidAmount: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "success" | "warning" | "error";
}

export interface Review {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  image?: string;
}

export type AuthUser = {
  id: string;
  name: string;
  role: "admin" | "student";
  email: string;
  avatar?: string;
} | null;
